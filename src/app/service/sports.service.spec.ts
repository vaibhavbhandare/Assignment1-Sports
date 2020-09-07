import { TestBed } from '@angular/core/testing';
import { SportsListService } from './sports.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SportsListService', () => {
  let service: SportsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      providers: [SportsListService],
    });
    service = TestBed.inject(SportsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have baseRefUrl', () => {
    expect(service.baseRefUrl).toBeDefined();
  });

  it(`should have baseRefUrl contain 'http://localhost:3000'`, () => {
    expect(service.baseRefUrl).toContain('http://localhost:3000');
  });
});
