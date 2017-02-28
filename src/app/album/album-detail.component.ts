import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlbumService } from './album.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'album-detail',
  templateUrl: 'album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit, OnDestroy {

  album;
  paramSubscription : Subscription;
  queryParamSubscription : Subscription;

  constructor(private currentRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
	this.paramSubscription = this.currentRoute.params.subscribe( params => {
		this.album = this.albumService.getAlbum(params['albumId']);
	})

	this.queryParamSubscription = this.currentRoute.queryParams.subscribe( queryParams => {
		console.log(queryParams['hello']);
	})
  }

  ngOnDestroy() {
  	this.paramSubscription.unsubscribe();
  	this.queryParamSubscription.unsubscribe();
  }

}
