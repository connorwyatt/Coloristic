import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NTC_TOKEN } from './color/ntc.token';
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
      provide: NTC_TOKEN,
      useValue: ntc
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
