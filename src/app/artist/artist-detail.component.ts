import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from './artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'artist-detail',
  templateUrl: 'artist-detail.component.html'
})
export class ArtistDetailComponent implements OnInit, OnDestroy {

  artist;
  paramsSubscription : Subscription;

  constructor(private currentRoute: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit() {
  	this.paramsSubscription = this.currentRoute.params.subscribe(params => {
    	this.artist = this.artistService.getArtist(params['artistId']);
    })
  }

  ngOnDestroy() {
  	this.paramsSubscription.unsubscribe();
  }

}
