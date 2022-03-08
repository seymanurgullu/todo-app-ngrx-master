import { Action } from '@ngrx/store';
import { Album } from 'src/app/models/album/album';

export enum FavoriteActionTypes {
  ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
}

export class AddToFavorite implements Action {
  type: string = FavoriteActionTypes.ADD_TO_FAVORITES;
  constructor(public payload: Album) {}
}

export class RemoveFromFavorite implements Action {
  type: string = FavoriteActionTypes.REMOVE_FROM_FAVORITES;
  constructor(public payload: Album) {}
}

export type FavoriteActions = AddToFavorite | RemoveFromFavorite
