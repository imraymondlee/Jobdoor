import { Component, OnInit } from '@angular/core';
import { PostingService } from '../../posting.service';
import { Posting } from '../../models/Posting';

@Component({
  selector: 'app-postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.scss']
})
export class PostingsComponent implements OnInit {
  postings:Posting[];

  constructor(private postingService: PostingService) { }

  ngOnInit() {
    this.getPostings();

  }

  getPostings(): void {
    this.postingService.getPostings()
      .subscribe(posts => {
        this.postings = posts;
      });
  }

}
