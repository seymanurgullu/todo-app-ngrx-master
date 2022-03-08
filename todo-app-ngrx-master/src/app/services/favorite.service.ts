import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../models/album/album';
import { Favorite } from '../models/favorite/favorite';
import { Favorites } from '../models/favorite/favorites';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor(private toastrService: ToastrService) {}

  getFavorites(): Favorite[] {
    return Favorites;
  }

  addToFavorite(album: Album) {
    let item = Favorites.find((f) => f.album.id === album.id);

    if (!item) {
      let favItem: Favorite = { album: album };
      Favorites.push(favItem);
      this.toastrService.success('Favorilere eklendi', album.title);
    } else {
      this.toastrService.error('Daha önce eklediniz.', album.title);
    }
  }

  removeFavorite(album: Album) {
    let item = Favorites.find((f) => f.album.id === album.id);

    if (item) {
      Favorites.splice(Favorites.indexOf(item), 1);
    }
  }
}
