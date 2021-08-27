import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  /**
   * primary links
   */
  primaryLinks = [
    { path : 'activity',icon :'grid_view', name : 'Dashboard' },
    { path : 'chats',icon :'dry_cleaning', name : 'Product' },
    { path : 'groups',icon :'groups', name : 'Customer' },
    { path : 'calls',icon :'inventory', name : 'Purchase' },
    { path : 'sale',icon :'sell', name : 'Sale' },
    { path : 'neworder',icon :'add', name : 'New Order' },

    { path : 'return',icon :'undo', name : 'Return' },
    { path : 'files',icon :'published_with_changes', name : 'Replace' },

    { path : 'files',icon :'summarize', name : 'Report' },
    { path : 'files',icon :'settings', name : 'Settings' },


  ]  
  constructor() { }

  ngOnInit(): void {
  }

}
