import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router'; 
import { PostingService } from '../../posting.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
  providers: [DatePipe]
})
export class PostJobComponent implements OnInit {
  position:string;
  company:string;
  location:string;
  url:string;
  date:string;

  constructor(private postingService: PostingService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.date = this.datePipe.transform(new Date(), 'LLL. d, yyyy');

    let posting = {
      'position': this.position,
      'company': this.company,
      'location': this.location,
      'url': this.url,
      'datePosted': this.date
    };

    this.postingService.createPosting(posting)
      .subscribe(res => {
        this.router.navigate(['/my-postings']);
      });
  }

}
