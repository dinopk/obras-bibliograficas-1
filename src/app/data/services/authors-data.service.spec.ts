import { TestBed } from '@angular/core/testing';

import { AuthorsDataService } from './authors-data.service';

describe('AuthorsDataService', () => {
  let service: AuthorsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return author name formatted for simple case', () => {
    const name = 'Flávio Maran Florentino'
    const assert = 'Maran Florentino, Flávio';
    const [expectName, expectTotalAMount] = service.formatAuthorName(name);

    expect(expectName).toEqual(assert);
    expect(expectTotalAMount).toEqual(3);
  });

  it('should retirn author name formatted when prepositions case', () => {
    const name = 'Lucas dos Santos'
    const assert = 'Santos, Lucas dos';
    const [expectName, expectTotalAMount] = service.formatAuthorName(name);

    expect(expectName).toEqual(assert);
    expect(expectTotalAMount).toEqual(3);
  });

  it('should return author name formatted when honor name case', () => {
    const name = 'Edgar Silva Filho'
    const assert = 'Silva Filho, Edgar';
    const [expectName, expectTotalAMount] = service.formatAuthorName(name);

    expect(expectName).toEqual(assert);
    expect(expectTotalAMount).toEqual(3);
  });

  it('should return author name with uppercase when olny one name inputted', () => {
    const name = 'Florentino'
    const assert = name.toUpperCase();
    const [expectName, expectTotalAMount] = service.formatAuthorName(name);

    expect(expectName).toEqual(assert);
    expect(expectTotalAMount).toEqual(1);
  })
});
