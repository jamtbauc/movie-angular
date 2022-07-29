import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchMoviesComponent } from './fetch-movies.component';

describe('FetchMoviesComponent', () => {
  let component: FetchMoviesComponent;
  let fixture: ComponentFixture<FetchMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
