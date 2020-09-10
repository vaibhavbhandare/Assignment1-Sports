 import { SportsListService as MockService } from '../app/service/mock.service';
 import { SportsListService } from '../app/service/sports.service';

 export const environment = {
  production: true,
  baseRefUrl : 'http://localhost:3000',
  providers: [ { provide: MockService, useClass: SportsListService }]
};
