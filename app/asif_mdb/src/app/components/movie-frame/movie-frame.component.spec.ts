import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFrameComponent } from './movie-frame.component';

describe('MovieFrameComponent', () => {
  let component: MovieFrameComponent;
  let fixture: ComponentFixture<MovieFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
