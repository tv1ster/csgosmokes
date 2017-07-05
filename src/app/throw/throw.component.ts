import { Component, OnInit, Input } from '@angular/core';
import { Throws } from '../constants/db.constant';

@Component({
  selector: 'app-throw',
  templateUrl: './throw.component.html',
  styleUrls: ['./throw.component.less']
})
export class ThrowComponent implements OnInit {
  @Input() throwData: Throws;
  @Input() height: Throws;
  @Input() width: Throws;

  constructor() {
  }

  ngOnInit() {
    // console.log(this.height);
    // console.log(this.width);
  }

}
