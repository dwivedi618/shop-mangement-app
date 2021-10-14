import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-missing-instruction',
  templateUrl: './data-missing-instruction.component.html',
  styleUrls: ['./data-missing-instruction.component.scss']
})
export class DataMissingInstructionComponent implements OnInit,OnChanges {
  @Input('instructions') private instructions;
  instruction: any;


  constructor() { 
  this.instruction = this.instructions

  }

  ngOnChanges(){
    this.instruction = this.instructions
    console.log("instruction ",this.instruction )
  }
  ngOnInit(): void {

  }

}
