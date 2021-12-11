import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'a2hs',
  templateUrl: './a2hs.component.html',
  styleUrls: ['./a2hs.component.scss']
})

export class A2hsComponent implements OnInit {

  constructor(
    public bottomSheetRef: MatBottomSheetRef<A2hsComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { mobileType: 'ios' | 'android', promptEvent?: any },
  ) {
  }

  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  public close() {
    this.bottomSheetRef.dismiss();
  }

  ngOnInit(): void {
  }
}

/*
export class A2hsComponent implements OnInit {

  constructor(
    @Inject(MatBottomSheet) public data: { mobileType: 'ios' | 'android', promptEvent?: any },
    private bottomSheetRef: MatBottomSheetRef<A2hsComponent>
  ) {
  }

  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  public close() {
    this.bottomSheetRef.dismiss();
  }

  ngOnInit(): void {
  }
}
*/
