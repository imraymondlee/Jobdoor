import { Component, OnInit, Input } from '@angular/core';
import { Posting } from '../../models/Posting';

@Component({
  selector: 'app-single-posting',
  templateUrl: './single-posting.component.html',
  styleUrls: ['./single-posting.component.scss']
})
export class SinglePostingComponent implements OnInit {
  @Input() singlePosting: Posting;

  constructor() { }

  ngOnInit() {
  }

}
