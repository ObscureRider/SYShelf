import {Component, OnInit} from '@angular/core';
import {LangService} from "../../services/lang.service";

@Component({
  selector: 'sys-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  //inject service into the component
  constructor(public _tls: LangService) {
  }

  ngOnInit(): void {
  }
}
