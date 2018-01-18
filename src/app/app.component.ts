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
_bookmark = new Bookmark('', ''); 
  
firstname: string;

     model = new Bookmark('zzzzz', 'bbb123'); 

  errorString: string;

  constructor(private _boomarkService: BookmarkService)
  {

  }



ngOnInit()
{
  this.firstname = "qwertyyyy";
 this.getBookmarks();

 this.getBookmarksByID();
  
}

getBookmarks(){
    this._boomarkService.getBookmarks()
        .subscribe(bookmarks => this._bookmarks = bookmarks,
        error => this.errorString = <any> error);
  }


  getBookmarksByID(){
    this._boomarkService.getBookmarksByID()
        .subscribe(bookmarks => this._bookmark = bookmarks,
        error => this.errorString = <any> error);
  }


  postBookmarks(): void {
     this._boomarkService.postBookmarks(this.model)
	     .subscribe(bookmarks => this._bookmark = bookmarks,
        error => this.errorString = <any> error);
   }

   deleteBookmarks(): void {
     this._boomarkService.deleteBookmarks(16)
	     .subscribe(bookmarks => this._bookmark = bookmarks,
        error => this.errorString = <any> error);
   }


  clickbutton(){
   this.postBookmarks();
    this.getBookmarks();
   console.log("i clicked buttons");
  }

  deleteClick(){
    this.deleteBookmarks();
   this.getBookmarks();
    console.log("i clicked delete button");
  }

  itemClick(){
    this.getBookmarksByID();
    console.log("i clicked item button");
  }

}
