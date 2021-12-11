import {Component, ViewEncapsulation} from '@angular/core';
import {DarkModeObserver} from "./utils/platform/dark-mode";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'mat-typography mat-app-background',
    '[class.dark-mode]': 'darkMode'
  }
})

export class AppComponent {
  title = 'SmartYourShelf';

  private sub: Subscription = new Subscription;
  public darkMode: boolean = false;

  constructor(
    private darkMode$: DarkModeObserver
  ) {

    // Detects the dark mode, when enabled
    this.sub.add(darkMode$.subscribe(dark => {
      // this.darkMode = dark;
    }));
  }

  // Disposes of the subscription
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
