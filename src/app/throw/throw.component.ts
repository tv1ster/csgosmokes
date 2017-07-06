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

  constructor() {
  }

  ngOnInit() {
  }

}
