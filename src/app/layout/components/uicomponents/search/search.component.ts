import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<any>();
  searchText = ''
  constructor() { 
  }

  ngOnInit(): void {
  }

  onTyping(){
    this.onSearch.emit(this.searchText);
  }

}
