import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  position:string;
  location: string;
  @Output() searchPostings: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let search = {
      position: this.position,
      location: this.location
    };
    this.searchPostings.emit(search);
  }

}
