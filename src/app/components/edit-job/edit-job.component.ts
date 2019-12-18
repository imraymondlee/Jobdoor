import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostingService } from '../../posting.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

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


  constructor(private route: ActivatedRoute, private router: Router, private postingService: PostingService, private datePipe: DatePipe, private matDialog: MatDialog) { }

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
        this.router.navigate(['/my-postings']);
      });
  }

  onCancel() {
    // return to My Postings
    this.router.navigate(['/my-postings']);
  }


  onDelete() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.panelClass = "dialog";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title: 'Delete',
      body: 'Are you sure you want to delete this posting?'
    };

    const dialogRef = this.matDialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .subscribe(data => {
        // Delete if response from dialog is accepted
        if(data) {
          this.postingService.deletePosting(this.id)
            .subscribe(res => {
              this.router.navigate(['/my-postings']);
            });
        }
      });
  }

}
