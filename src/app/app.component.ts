import { Component } from '@angular/core';
import {Bookmark} from './bookmark';
import {BookmarkService} from './bookmark.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookmarkService]
})
export class AppComponent {
  title = 'app';

  _bookmarks: Bookmark[];

  _bookmark: Bookmark;

     model = new Bookmark('aaa123', 'bbb123'); 

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
     this._boomarkService.postBookmarks(this.model)
	     .subscribe(bookmarks => this._bookmark = bookmarks,
        error => this.errorString = <any> error);
   }


  clickbutton(){
    this.postBookmarks();
    this.getBookmarks();
   console.log("i clicked button");
  }

}
