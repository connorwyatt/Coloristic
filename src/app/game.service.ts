import { Injectable } from '@angular/core';
import { ColorService } from './color/color.service';

@Injectable()
export class GameService {
  private colorService: ColorService;

  constructor(colorService: ColorService) {
    this.colorService = colorService;
  }
}
