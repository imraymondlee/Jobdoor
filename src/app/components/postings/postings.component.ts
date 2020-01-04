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
  totalPages:number;
  totalPagesArr:number[];
  currentPage:number;
  event = event;
  isLoading: Boolean = false;

  constructor(private postingService: PostingService) { }

  ngOnInit() {
    this.getPostings();
  }

  getPostings(): void {
    this.isLoading = true;
    this.postingService.getPostings()
      .subscribe(posts => {
        this.postings = posts.data;
        this.totalPages = posts.totalPages;
        this.totalPagesArr = Array(this.totalPages).fill(0).map((x,i)=>i+1);
        this.currentPage = 1;
        this.isLoading = false;
      });
  }

  changePage(page:number): void {
    this.currentPage = page;
    this.postingService.getPostings(page)
      .subscribe(posts => {
        this.postings = posts.data;
      });
  }

  // Called through eventemitter from search component
  searchPostings(event): void {
    this.postingService.getPostings(1, event.position, event.location)
      .subscribe(posts => {
        this.postings = posts.data;
        this.totalPages = posts.totalPages;
        this.totalPagesArr = Array(this.totalPages).fill(0).map((x,i)=>i+1);
      });
  }
}
