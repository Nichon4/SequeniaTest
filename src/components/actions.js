import {createAction, handleActions} from 'redux-actions';

const loadData = createAction("LOAD_DATA");
const openFilmData = createAction("OPEN_FILM_DATA");
const closeFilmData = createAction("CLOSE_FILM_DATA");

export {loadData, openFilmData, closeFilmData};

const initialState = {
  films: {
    isLoaded: false,
    data: [],
  },
  filmData: null,
  filmDataShow: false,
};

export const reducer = handleActions(
  {
    LOAD_DATA: (state, action) => ({
      films: action.payload
    }),
    OPEN_FILM_DATA: (state, action) => {
      console.log(action.payload);
      return ({
        ...state,
        filmData: action.payload,
        filmDataShow: action.payload.id,
      });
    },
    CLOSE_FILM_DATA: (state) => ({
      ...state,
      filmData: null,
      filmDataShow: false,
    })
  },
  initialState
);
