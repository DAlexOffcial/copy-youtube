import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { fromEvent, map, Observable, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit, OnDestroy{
  public showSerchBarState = signal<boolean>(false)
  resizeObservable!: Observable<boolean>
  resizeSuscribe!: Subscription

  ngOnInit(): void {
    this.resizeObservable = fromEvent(window, 'resize').pipe(
      map(() => window.innerWidth >= 768),
      startWith(window.innerWidth >= 768)
    );

    this.resizeSuscribe = this.resizeObservable.subscribe(() => {
       this.showSerchBarState.set(false)
    });
  }
  
  ShowSerchBar( state : boolean){
    this.showSerchBarState.set(!state)
  }

  ngOnDestroy(): void {
    this.resizeSuscribe.unsubscribe()
  }
}
