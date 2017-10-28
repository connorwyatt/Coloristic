import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { HeaderComponent } from './components/header/header.component';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, GameContainerComponent, HeaderComponent]
      }).compileComponents();
    })
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
