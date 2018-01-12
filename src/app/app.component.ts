import { Component } from '@angular/core';
import {Bookmark} from './bookmark';
import {BookmarkService} from './bookmark.service';
@Component({
  selector: 'app-root',
  template: `<h4>Component</h4>

  <div *ngFor="let bookmark of _bookmarks">
  {{bookmark.title}}
  <br/>
  {{bookmark.url}}
  </div>
  <p>Glass icon: <span class="glyphicon glyphicon-glass"></span></p> 
  <button type="button" class="btn btn-default" (click)="clickbutton()">Default</button> 
  `,
  styleUrls: ['./app.component.css'],
  providers: [BookmarkService]
})
export class AppComponent {
  title = 'app';

  _bookmarks: Bookmark[];

  _bookmark: Bookmark;

     

  errorString: string;

  constructor(private _boomarkService: BookmarkService)
  {

  }

ngOnInit()
{
  this.getBookmarks();
}

  getBookmarks(){
    this._boomarkService.getBookmarks()
        .subscribe(bookmarks => this._bookmarks = bookmarks,
        error => this.errorString = <any> error);
  }


  postBookmarks(): void {
     this._boomarkService.postBookmarks(this._bookmark)
	     .subscribe(bookmarks => this._bookmark = bookmarks,
        error => this.errorString = <any> error);
   }


  clickbutton(){
    this.postBookmarks();
    this.getBookmarks();
   console.log("i clicked button");
  }

}
