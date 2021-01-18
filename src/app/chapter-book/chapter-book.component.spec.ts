import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterBookComponent } from './chapter-book.component';

describe('ChapterBookComponent', () => {
  let component: ChapterBookComponent;
  let fixture: ComponentFixture<ChapterBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
