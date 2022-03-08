import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Album } from 'src/app/models/album/album';
import { Favorite } from 'src/app/models/states/favorite';
import * as AllFavoriteActions from '../../../store/actions/favorite-actions';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent implements OnInit {
  favorites: Favorite[] = [];
  constructor(
    private toastrService: ToastrService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites() {
    this.store.select('favoriteReducer').subscribe((data) => {
      this.favorites = data;
    });
  }

  removeFavorite(album: Album) {
    this.store.dispatch(new AllFavoriteActions.RemoveFromFavorite(album));
    this.toastrService.info('Favorilerden çıkartıldı', album.title);
  }
}
