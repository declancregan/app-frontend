import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';

import {Bookmark} from './bookmark';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BookmarkService {
    constructor(private _http: Http){
    }

    private _bookmarksUrl = 'http://localhost:3000/api/bookmarks';

    getBookmarks(){

        return this._http.get(this._bookmarksUrl)
                    .map(res => <Bookmark[]> res.json())
                    .catch(this.handleError);

    }

body = {title: 'Brad7', url: 'smith7'};


    postBookmarks(_bookmark:Bookmark): Observable<Bookmark> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:3000/api/bookmarks', this.body, options)
                   .map(res => <Bookmark> res.json())
                    .catch(this.handleError);
    }

private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error')
}

}