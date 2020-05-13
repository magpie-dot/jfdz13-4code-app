const DATABASE = "https://code-for-animals-90802.firebaseio.com";

// ACTION NAME
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";
const FETCH_USER = "FETCH_USER";
const UPDATE_USER = "UPDATE_USER";
const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

// INITIAL STATE
const initialState = {
  loading: false,
  error: null,
  userData: null,
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    case FETCH_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        userData: action.payload,
      };

    case TOGGLE_FAVOURITE:
      return {
        ...state,
        favouriteAnimals: action.payload,
      };
    default:
      return state;
  }
};

// ACTION CREATOR
export const fetchUser = (id) => (dispatch) => {
  fetch(`${DATABASE}/Users/${id}.json`)
    .then((res) => res.json())
    .then((user) => {
      const userData = Object.keys(user).map((key) => ({
        id: key,
        ...user[key],
      }));
      dispatch({ type: FETCH_USER, payload: userData });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err });
    });
};

export const updateUser = (id, user) => (dispatch) => {
  fetch(`${DATABASE}/Users/${id}.json`, {
    method: "PUT",
    body: JSON.stringify({
      id: user.id,
      name: user.name,
      favouriteAnimals: user.favouriteAnimals,
      charity: user.charity,
      creationDate: user.creationDate,
    }),
  });
};

export const addToFavourite = (favouriteAnimals, animal) => (dispatch) => {
  const favouriteAnimalsArray = favouriteAnimals.push(animal.id);
  dispatch({ type: TOGGLE_FAVOURITE, payload: favouriteAnimalsArray });
};
