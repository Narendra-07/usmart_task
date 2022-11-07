import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { Router, RouterLinkActive } from "@angular/router";
// import { GetCertificateComponent } from '../get-certificate/get-certificate.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
   isAgreed : any;
   Agreed: any;
  name = 'Angular';
  display = false;
  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
  
  yt_iframe_html: any;

  dm_iframe_html: any;
  
  youtubeUrl = "https://www.youtube.com/watch?v=iHhcHTlGtRs";
  dailymotionUrl = "https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport";

  constructor(
    private embedService: EmbedVideoService
  ) {
    this.yt_iframe_html = this.embedService.embed(this.youtubeUrl);
    
    this.dm_iframe_html = this.embedService.embed(this.dailymotionUrl);
  }

  ngOnInit(): void {
  }

}
