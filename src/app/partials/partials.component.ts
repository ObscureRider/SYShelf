import {Component, OnInit} from '@angular/core';
import {PartialsService} from "./partials.service";

import {LangService} from "../services/lang.service"; // REMOVE from here

@Component({
  selector: 'sys-partials',
  templateUrl: './partials.component.html',
  styleUrls: ['./partials.component.scss']
})

export class PartialsComponent implements OnInit {
  mtb_Title: String | undefined;
  mtb_isVisible: boolean | undefined;

  constructor(public _mls: LangService, private _ps: PartialsService) { /// REMOVE _mls
  }

  ngOnInit(): void {
    this.mtb_Title = this._ps.mtb_Title;
    this.mtb_isVisible = this._ps.mtb_isVisible;
  }
}
