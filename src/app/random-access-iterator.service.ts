import { Injectable } from '@angular/core';
import { RandomAccessIterator } from './randomisation/randomAccessIterator';

@Injectable()
export class RandomAccessIteratorService {
  public newIterator<Element>(
    elements: Array<Element>,
    repeat: boolean
  ): Iterator<Element> {
    return RandomAccessIterator(elements, repeat);
  }
}
