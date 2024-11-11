import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { videoInfo } from '../../interface/videoInfo.interface';

@Component({
  selector: 'video-grid-item',
  templateUrl: './video-grid-item.component.html',
  styleUrls: ['./video-grid-item.component.css']
})
export class VideoGridItemComponent {
  @Input() infoVideo!: videoInfo 

  public isVideoPlaying: boolean = false
  @ViewChild('videoElement') videoRef!: ElementRef<HTMLVideoElement>;

  @HostListener('mouseenter')
  onMouseEnter() {
    if(this.videoRef == null) return;
    this.videoRef.nativeElement.currentTime = 0
    this.videoRef.nativeElement.play()
    this.isVideoPlaying = true
  }
  
  @HostListener('mouseleave')
  onMouseLeave() {
    if(this.videoRef == null) return;
    this.videoRef.nativeElement.pause()
    this.isVideoPlaying = false
  }

  get dynamicUrl(): string {
    return `/watchv=?${this.infoVideo?.id}`;
  }

  get channel(): string {
    return `/@${this.infoVideo.channel.id}`;
  }

  formatTime(duration : number): string{
   const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
    })
   const hours = Math.floor(duration / 60 / 60)
   const minutes = Math.floor((duration - hours * 60 * 60) / 60)
   const seconds = duration % 60

   if(hours > 0){
     return `${hours}:${LEADING_ZERO_FORMATTER.format(minutes)}:${LEADING_ZERO_FORMATTER.format(seconds)}`
   }

   return `${minutes}:${LEADING_ZERO_FORMATTER.format(seconds)}`
  }

  formatView(views: number): string{
    return new Intl.NumberFormat(undefined, { notation: 'compact'}).format(views);
  }
  
  formatDaysAgo(date: Date): string{

    const formatter = new Intl.RelativeTimeFormat(undefined, {
      numeric: 'always'
    })
    
    const DIVISIONS: { amount: number; name: Intl.RelativeTimeFormatUnit }[] = [
      { amount: 60, name: "seconds" },
      { amount: 60, name: "minutes" },
      { amount: 24, name: "hours" },
      { amount: 7, name: "days" },
      { amount: 4.34524, name: "weeks" },
      { amount: 12, name: "months" },
      { amount: Number.POSITIVE_INFINITY, name: "years" },
    ]

    let duration = ( date.getTime() - new Date().getTime()) / 1000

    for(let i = 0; i < DIVISIONS.length; i++){
      const division = DIVISIONS[i]
      if(Math.abs(duration) < division.amount){
        return formatter.format(Math.round(duration), division.name)
      }
      duration /= division.amount
    }

    return "Hace tiempo";
  }
}
