import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostingService } from '../../posting.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss'],
  providers: [DatePipe]
})
export class EditJobComponent implements OnInit {
  id: string;
  posting:any;
  position:string;
  company:string;
  location:string;
  url:string;
  date:string;


  constructor(private route: ActivatedRoute, private router: Router, private postingService: PostingService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id');
    });

    this.getSinglePosting(this.id);
  }

  getSinglePosting(id: string): void {
    this.postingService.getSinglePosting(this.id)
      .subscribe(posting => {
        this.posting = posting[0];

        this.position = this.posting.position;
        this.company = this.posting.company;
        this.location = this.posting.location;
        this.url = this.posting.url;
      }, err => {
          // Redirect home if not own by user
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401) {
              this.router.navigate(['/']);
            }
          }
      });
  }

  onSubmit() {
    this.date = this.datePipe.transform(new Date(), 'LLL. d, yyyy');
    let job = {
      'position': this.position,
      'company': this.company,
      'location': this.location,
      'url': this.url,
      'datePosted': this.date
    };

    this.postingService.updatePosting(this.id, job)
      .subscribe(res => {
        console.log(res);
      });
  }

  onCancel() {
    // return to My Postings
    this.router.navigate(['/my-postings']);
  }

  onDelete() {
    this.postingService.deletePosting(this.id)
      .subscribe(res => {
        console.log(res);
      });
  }

}
