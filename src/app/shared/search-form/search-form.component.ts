import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Output() searchTextEvent = new EventEmitter<string>();

  searchText: string;

  constructor() { }

  emitText() {
    this.searchTextEvent.emit(this.searchText);
  }

}
