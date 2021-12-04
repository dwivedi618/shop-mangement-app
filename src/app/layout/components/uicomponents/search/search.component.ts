import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() onSearch = new EventEmitter<any>();
  searchText = ''
  showSearch:boolean = false;
  

  onTyping(){
    this.onSearch.emit(this.searchText);
  }
  onSearchHandler = () =>{ this.showSearch = !this.showSearch}

}
