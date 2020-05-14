const DATABASE = "https://code-for-animals-90802.firebaseio.com";

// ACTION NAME
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";
const FETCH_USER = "FETCH_USER";
const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
const SET_USER = "SET_USER"

// INITIAL STATE
const initialState = {
  loading: false,
  error: null,
  userData: null,
  loggedUserId: null,
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
        loading: false,
        userData: action.payload,
      };
      case SET_USER: {
          return {
              ...state,
              loading: false,
              loggedUserId: action.payload,
          }
      }
    case TOGGLE_FAVOURITE:
      return {
        ...state,
        loading: false,
        userData: {
          ...state.userData,
          favouriteAnimals: action.payload,
        },
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
      dispatch({ type: FETCH_USER, payload: user });
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
  })
    .then(() => fetchUser(user.id)(dispatch))
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err });
    });
};

export const setUser = (id) => (dispatch) => {
    dispatch({type: SET_USER, payload: id})
}


export const toggleFavourite = (id, favouriteAnimalsId) => (dispatch) => {
  if (!favouriteAnimalsId) {
    const animalsIdArray = [id];
    return animalsIdArray;
  } else {
    const animalsIdArray = favouriteAnimalsId.includes(id)
      ? [
          ...favouriteAnimalsId.filter(
            (favouriteAnimalId) => favouriteAnimalId !== id
          ),
        ]
      : [...favouriteAnimalsId, id];
    dispatch({ type: TOGGLE_FAVOURITE, payload: animalsIdArray });
  }
};
