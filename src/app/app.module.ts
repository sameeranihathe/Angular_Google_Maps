import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCmJJSN3z1wJBZS58g8mwwvz5699qNNY5c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
