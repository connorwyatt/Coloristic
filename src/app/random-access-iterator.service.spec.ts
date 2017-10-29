import { inject, TestBed } from '@angular/core/testing';
import { RandomAccessIteratorService } from './random-access-iterator.service';

describe('RandomAccessIteratorService', () => {
  let service: RandomAccessIteratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomAccessIteratorService]
    });
  });

  beforeEach(
    inject(
      [RandomAccessIteratorService],
      (injectedService: RandomAccessIteratorService) => {
        service = injectedService;
      }
    )
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns a new iterator each time', () => {
    const iterator1 = service.newIterator([], true);
    const iterator2 = service.newIterator([], true);

    expect(iterator1).not.toBe(iterator2);
  });
});
