import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslocoService} from "@ngneat/transloco";
import {Observable} from 'rxjs';
import {timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';

const API_URL = 'http://192.168.1.142:4200/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private _tls: TranslocoService) {
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }

  getUser() {
    return timer(500)
      .pipe(
        mapTo({
          lang: 'en',
        })
      );
  }

  public setAvailLangs(lang: string) {
    this._tls.setActiveLang(lang);
  }

  public getUserLanguages() {
    return this._tls.getActiveLang();
  }
}
