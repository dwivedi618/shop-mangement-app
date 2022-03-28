import { Component, Input, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() percent = 0;
  @Input() diameter = 60;
  color = 'primary'

  mode: ProgressSpinnerMode = 'determinate';

  constructor() { }

  ngOnInit(): void {
  }

}