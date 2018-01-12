import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { Bookmark } from './bookmark';

import { BookmarkService } from './bookmark.service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent, Bookmark
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, HttpModule, CommonModule
  ],
  providers: [BookmarkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
