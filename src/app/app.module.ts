import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ColorService } from './color/color.service';
import { NTC_TOKEN } from './color/ntc.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ColorService,
    { provide: NTC_TOKEN, useValue: ntc }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
