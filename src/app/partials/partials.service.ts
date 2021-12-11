import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/*
  mtb: MaterialToolBar
 */

export class PartialsService {
  public mtb_Title: String | undefined;
  public mtb_isVisible: boolean | undefined;

  mtb_VisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.mtb_VisibilityChange.subscribe((value) => {
      this.mtb_isVisible = value
    });
  }

  toggleMtbVisibility() {
    this.mtb_VisibilityChange.next(!this.mtb_isVisible);
  }

  setMtbVisibility(value: boolean) {
    this.mtb_VisibilityChange.next(value);
  }
}

