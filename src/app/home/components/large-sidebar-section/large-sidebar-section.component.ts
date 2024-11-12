import { Component } from '@angular/core';
import { sideBarItem } from '../../interface/sideBarItem.interface';
import { sideBarItems } from '../../constants/sideBarItem.contants';

@Component({
  selector: 'large-sidebar-section',
  templateUrl: './large-sidebar-section.component.html',
  styleUrls: ['./large-sidebar-section.component.css']
})
export class LargeSidebarSectionComponent {
  itemsSideBarItems () : sideBarItem[] {
    return sideBarItems
  }

}
