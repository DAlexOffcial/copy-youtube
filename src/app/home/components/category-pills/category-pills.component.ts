import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { programmingTopics } from '../../constants/topics.contants';


@Component({
  selector: 'category-pills',
  templateUrl: './category-pills.component.html',
  styleUrls: ['./category-pills.component.css']
})
export class CategoryPillsComponent{
  isLeftVisible: boolean = false;
  isRightVisible: boolean = false;
  selectedTopic: string = 'All';
  
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;


  moveLeft(){
    this.scrollContainer.nativeElement.scrollBy({ left: -100, behavior: 'smooth' });
  }
  moveRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 100, behavior: 'smooth' });
  }

  selectTopic(topic: string): void {
    this.selectedTopic = topic;
  }

  getProgrammingTopics () : string[] {
    return programmingTopics 
  }
  
}
