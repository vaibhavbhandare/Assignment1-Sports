import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'Sports'`, () => {
    fixture.detectChanges();
    expect(component.headerTitle).toContain('Sports');
  });

  it(`should have setDark Theme is False`, () => {
    fixture.detectChanges();
    expect(component.setDark).toBeFalsy();
  });

  it(`should have call changeTheme is False`, () => {
    fixture.detectChanges();
    expect(component.changeTheme()).toBeFalsy();
  });

  it(`should have call ngOnInit is False`, () => {
    fixture.detectChanges();
    expect(component.ngOnInit()).toBeFalsy();
  });
});
