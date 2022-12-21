import { Component } from '@angular/core';
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
      //this.selectSegment(0);
      this.videos = homeData;
    }, 5000)

  };

}