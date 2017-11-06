import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { colors } from './color/colors';
import { COLORS_TOKEN } from './color/colors.token';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { HeaderComponent } from './components/header/header.component';
import { GameService } from './game.service';
import { RandomAccessIteratorService } from './random-access-iterator.service';

@NgModule({
  declarations: [AppComponent, GameContainerComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [
    GameService,
    RandomAccessIteratorService,
    {
      provide: COLORS_TOKEN,
      useValue: colors
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
