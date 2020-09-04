import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPageComponent } from './list.component';

describe('ListingPageComponent', () => {
  let component: ListingPageComponent;
  let fixture: ComponentFixture<ListingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
