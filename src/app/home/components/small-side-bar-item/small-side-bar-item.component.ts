import { Component, Input } from '@angular/core';
import { sideBarItem } from '../../interface/sideBarItem.interface';

@Component({
  selector: 'small-side-bar-item',
  templateUrl: './small-side-bar-item.component.html',
  styleUrls: ['./small-side-bar-item.component.css']
})
export class SmallSideBarItemComponent {
  @Input() itemBar!: sideBarItem 
}
