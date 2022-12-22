import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import homeData from '../../../assets/data/home.json'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  videos: any[] = [];
  segments: any[] = [];

  constructor() {
    this.segments = [
      'All',
      'New to you',
      'Gaming',
      'Sitcoms',
      'Computer program',
      'Documentary',
      'Music',
    ].map((val) => ({
      title: val,
      selected: false,
    }));

    setTimeout(() => {
      this.videos = homeData;
    }, 2000);
  };

  selectSegment(index: any){
    this.segments.map((item) => (item.selected = false));
    this.segments[index].selected = true;
  };

  doRefresh(event: RefresherCustomEvent){
    setTimeout(() => {
      this.videos = [];
      setTimeout(() => {
        this.videos = homeData;
      }, 2000);
      event.target.complete();
    }, 1500);
  }

}
