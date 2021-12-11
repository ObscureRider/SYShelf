import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TitleService} from "../../utils/browser/title";
import {TranslocoService} from "@ngneat/transloco";

import {PartialsService} from "../../partials/partials.service";

@Component({
  selector: 'sys-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  title = 'Dashboard';

  navLinks: any[];
  activeLinkIndex = -1;

  constructor(
    private router: Router,
    private _tls: TranslocoService,
    private _pt: TitleService,
    private _pS: PartialsService) {
    this.navLinks = [
      {
        label: 'first', //  _tls.selectTranslate("hello").subscribe(console.log)
        link: './analytics',
        index: 0
      }, {
        label: 'second',
        link: './notifications',
        index: 1
      }, {
        label: 'third',
        link: './reports',
        index: 1
      },
      {
        label: 'fourth',
        link: './reports',
        index: 1
      },
    ];
  }

  ngOnInit(): void {

    // 1. Reset page title
    this._pt.setTitle(this.title);

    // 2. Update Toolbar Title
    this._pS.mtb_Title = this.title;

    // 3. Set Toolbar Visibility
    this._pS.setMtbVisibility(true); // this._pS.mtb_isVisible = true;

    // X. Links
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
}
