import { Favorite } from 'src/app/models/states/favorite';
import {
  FavoriteActions,
  FavoriteActionTypes,
} from '../actions/favorite-actions';

export let initialState: Favorite[] = [];

export function favoriteReducer(state = initialState, action: FavoriteActions) {
  switch (action.type) {
    case FavoriteActionTypes.ADD_TO_FAVORITES:
      let item = state.find((f) => f.album.id === action.payload.id);

      if (!item) {
        let favItem: Favorite = { album: action.payload };
        return [...state, favItem];
      } else {
        return [...state];
      }

    case FavoriteActionTypes.REMOVE_FROM_FAVORITES:
      return state.filter((f) => f.album.id !== action.payload.id);

    default:
      return state;
  }
}
