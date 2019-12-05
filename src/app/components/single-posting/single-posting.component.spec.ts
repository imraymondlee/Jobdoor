import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostingComponent } from './single-posting.component';

describe('SinglePostingComponent', () => {
  let component: SinglePostingComponent;
  let fixture: ComponentFixture<SinglePostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
