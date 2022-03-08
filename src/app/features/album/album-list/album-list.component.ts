import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Album } from 'src/app/models/album/album';
import { AlbumService } from 'src/app/services/album.service';
import { PagingInfo } from 'src/app/shared/models/paging-info';
import * as AllFavoriteActions from '../../../store/actions/favorite-actions';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];
  pagingInfo: PagingInfo = { itemsPerPage: 10, currentPage: 1 };

  constructor(
    private albumService: AlbumService,
    private store: Store<any>,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  addToFavorite(album: Album) {
    this.store.dispatch(new AllFavoriteActions.AddToFavorite(album));
    this.toastrService.success('Favorilere eklendi', album.title);
  }
}
