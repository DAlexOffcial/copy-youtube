import { Component } from '@angular/core';
import { videoInfo } from '../../interface/videoInfo.interface';
import { videos } from '../../constants/videosInfo.contants';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {

  getVideosInfo () : videoInfo[]{
    return videos
  }


}
