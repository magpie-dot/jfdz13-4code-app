const DATABASE = "https://code-for-animals-90802.firebaseio.com";

// ACTION NAME
const SET_DATA = "SET_DATA";
const ADDTOFAVOURITE = "ADDTOFAVOURITE";

// INITIAL STATE
const initialState = {
  data: [],
};

// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

// ACTION CREATOR
export const fetchAnimals = () => (dispatch) => {
  fetch(`${DATABASE}/animals.json`)
    .then((res) => res.json())
    .then((animals) => {
      const arrayAnimals = Object.keys(animals).map((key) => ({
        id: key,
        ...animals[key],
      }));
      dispatch({ type: SET_DATA, payload: arrayAnimals });
    });
};
