import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { programmingTopics } from '../../constants/topics.contants';

@Component({
  selector: 'category-pills',
  templateUrl: './category-pills.component.html',
  styleUrls: ['./category-pills.component.css']
})
export class CategoryPillsComponent implements AfterViewInit, OnDestroy{

  isLeftVisible: boolean = false;
  isRightVisible: boolean = true;
  selectedTopic: string = 'All';
  scrollPosition: number = 0;
  
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  
  moveLeft(){
    this.scrollContainer.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }
  moveRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }

  onScroll() {
    this.scrollPosition = this.scrollContainer.nativeElement.scrollLeft;
    const scrollContainer = this.scrollContainer.nativeElement;
    const maxScrollContainer = scrollContainer.scrollWidth - scrollContainer.clientWidth; 

    if(this.scrollPosition > 0){
      this.isLeftVisible = true
    }else{
      this.isLeftVisible = false
    }

    if (this.scrollPosition < maxScrollContainer) {
      this.isRightVisible = true;
    } else {
      this.isRightVisible = false;
    }

  }
  
  ngAfterViewInit() {
    this.scrollContainer.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    this.onScroll()
  }

  selectTopic(topic: string): void {
    this.selectedTopic = topic;
  }
  
  getProgrammingTopics () : string[] {
    return programmingTopics 
  }
  
  ngOnDestroy(): void {
    this.scrollContainer.nativeElement.removeEventListener('scroll', this.onScroll.bind(this));
  }
}
