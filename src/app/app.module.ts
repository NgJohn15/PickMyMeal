import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4jnali2wIr0kkFAQ07EMG5YYuSP9vhYw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
