import { Component, OnInit, Input } from '@angular/core';
import { Throws } from '../constants/db.constant';

@Component({
  selector: 'app-throw',
  templateUrl: './throw.component.html',
  styleUrls: ['./throw.component.less']
})
export class ThrowComponent implements OnInit {
  @Input() throwsData: Throws[];
  @Input() height: number;
  @Input() width: number;
  hoverThrow;
  leaveThrow;

  constructor() {
    this.hoverThrow = (throwEl) => {
      throwEl.r1 = 9;
      throwEl.r2 = 21;
      throwEl.rLine = 4;
    };
    this.leaveThrow = (throwEl) => {
      delete throwEl.r1;
      delete throwEl.r2;
      delete throwEl.rLine;
    };
  }

  ngOnInit() {
  }

}
