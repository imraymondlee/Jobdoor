import { Component, OnInit } from '@angular/core';
import { PostingService } from '../../posting.service';
import { Posting } from '../../models/Posting';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-postings',
  templateUrl: './my-postings.component.html',
  styleUrls: ['./my-postings.component.scss']
})
export class MyPostingsComponent implements OnInit {
  postings:Posting[];

  constructor(private postingService: PostingService, private router: Router) { }

  ngOnInit() {
    this.getMyPostings();
  }

  getMyPostings(): void {
    this.postingService.getMyPostings()
      .subscribe(posts => {
        this.postings = posts;
      }, err => {
        if(err instanceof HttpErrorResponse) {
          if(err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      });
  }

}
