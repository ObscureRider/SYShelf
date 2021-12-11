import {Injectable} from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Injectable({
  providedIn: 'root'
})
export class LangService {
  availLangs: string | { id: string; label: string; }[] | undefined;
  activeLang: string | undefined;

  constructor(private _tls: TranslocoService) {
  }

  ngOnInit() {
    this.activeLang = this._tls.getActiveLang();
    this.availLangs = this._tls.getActiveLang();
  }

  change(lang: string) {
    this._tls.setActiveLang(lang);
    this.activeLang = lang;
  }
}
