import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      .custom-list-item {
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 5px;
      }
    `,
  ],
})
export class SidebarComponent {}
