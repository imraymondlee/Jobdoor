import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostingService } from '../../posting.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {
  id: string;
  posting:any;

  constructor(private route: ActivatedRoute, private router: Router, private postingService: PostingService) { }

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
        console.log(this.posting);
      }, err => {
          // Redirect home if not own by user
          if(err instanceof HttpErrorResponse) {
            if(err.status === 401) {
              this.router.navigate(['/']);
            }
          }
      });
  }
}
