import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsContainerComponent } from './contacts-container/contacts-container.component';
import { ContactRowComponent } from './contacts-container/contact-row/contact-row.component';
import {FormsModule} from "@angular/forms";
import { SearchPipe } from './contacts-container/search.pipe';
import { ScrollingModule } from '@angular/cdk-experimental'

@NgModule({
  declarations: [
    AppComponent,
    ContactsContainerComponent,
    ContactRowComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
