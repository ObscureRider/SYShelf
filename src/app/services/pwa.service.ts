import {Injectable} from '@angular/core';
import {Platform} from '@angular/cdk/platform';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {take, timer} from "rxjs";
import {A2hsComponent} from "../dialogs/a2hs/a2hs.component";

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform
  ) {
  }

  public initPwaPrompt() {

    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        this.a2hsPrompt('android');
      });
    }

    if (this.platform.IOS) {
      // @ts-ignore
      const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
      if (!isInStandaloneMode) {
        this.a2hsPrompt('ios');
      }
    }

  }

  private a2hsPrompt(mobileType: 'ios' | 'android') {
    timer(3000)
      .pipe(take(1))
      .subscribe(() => this.bottomSheet.open(A2hsComponent, {data: {mobileType, promptEvent: this.promptEvent}}));
  }
}
