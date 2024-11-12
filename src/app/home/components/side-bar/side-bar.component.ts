import { Component } from '@angular/core';
import { sideBarItem } from '../../interface/sideBarItem.interface';
import { sideBarItems } from '../../constants/sideBarItem.contants';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  itemsSideBarItems () : sideBarItem[] {
    return sideBarItems
  }
}
