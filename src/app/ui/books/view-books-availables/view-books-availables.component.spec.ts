import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBooksAvailablesComponent } from './view-books-availables.component';

describe('ViewBooksAvailablesComponent', () => {
  let component: ViewBooksAvailablesComponent;
  let fixture: ComponentFixture<ViewBooksAvailablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBooksAvailablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBooksAvailablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 