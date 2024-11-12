import { Component, EventEmitter, Input, Output } from '@angular/core';
import { sideBarItem } from '../../interface/sideBarItem.interface';
import { sideBarItems } from '../../constants/sideBarItem.contants';

@Component({
  selector: 'small-side-bar-item',
  templateUrl: './small-side-bar-item.component.html',
  styleUrls: ['./small-side-bar-item.component.css']
})
export class SmallSideBarItemComponent {


  itemsSideBarItems () : sideBarItem[] {
    return sideBarItems
  }

  selectedTopic: string = 'Home';
  onSelectTopic(topic: string): void {
    this.selectedTopic = topic;
  }
  
}
