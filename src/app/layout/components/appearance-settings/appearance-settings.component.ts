import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appearance-settings',
  templateUrl: './appearance-settings.component.html',
  styleUrls: ['./appearance-settings.component.scss']
})
export class AppearanceSettingsComponent implements OnInit {

  zoomLevel = [
    '25%','50%','75%','100%','125%','150%','175%','200%'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
