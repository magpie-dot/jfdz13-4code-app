const DATABASE = "https://code-for-animals-90802.firebaseio.com";

// ACTION NAME
const SET_DATA = "SET_DATA";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";

// INITIAL STATE
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
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
    default:
      return state;
  }
};

// ACTION CREATOR
export const fetchAnimals = () => (dispatch) => {
  dispatch({ type: SET_LOADING });

  fetch(`${DATABASE}/animals.json`)
    .then((res) => res.json())
    .then((animals) => {
      const arrayAnimals = Object.keys(animals).map((key) => ({
        id: key,
        ...animals[key],
      }));
      dispatch({ type: SET_DATA, payload: arrayAnimals });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err });
    });
};
