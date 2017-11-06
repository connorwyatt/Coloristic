import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameService } from '../../game.service';
import { GameContainerComponent } from './game-container.component';

describe('GameContainerComponent', () => {
  let component: GameContainerComponent;
  let fixture: ComponentFixture<GameContainerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GameContainerComponent],
        providers: [GameService]
      }).compileComponents();

      TestBed.overrideProvider(GameService, {
        useValue: {
          newGame() {
            return {
              currentColor: {
                name: 'White'
              },
              score: 0
            };
          }
        }
      });
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
