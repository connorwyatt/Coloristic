import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameContainerComponent } from './game-container.component';
import { GameService } from '../../game.service';

describe('GameContainerComponent', () => {
  let component: GameContainerComponent;
  let fixture: ComponentFixture<GameContainerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GameContainerComponent],
        providers: [GameService]
      }).compileComponents();

      TestBed.overrideProvider(GameService, { useValue: {} });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
