import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ColorService } from './color/color.service';
import { NTC_TOKEN } from './color/ntc.token';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, GameContainerComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [ColorService, { provide: NTC_TOKEN, useValue: ntc }],
  bootstrap: [AppComponent]
})
export class AppModule {}
