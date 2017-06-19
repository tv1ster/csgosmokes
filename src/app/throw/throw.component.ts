import { Component, OnInit, Input } from '@angular/core';
import { Throws } from '../constants/db.constant';

@Component({
  selector: 'app-throw',
  templateUrl: './throw.component.html',
  styleUrls: ['./throw.component.less']
})
export class ThrowComponent implements OnInit {
  @Input() throwData: Throws;

  constructor() {
  }

  ngOnInit() {

  }

}
