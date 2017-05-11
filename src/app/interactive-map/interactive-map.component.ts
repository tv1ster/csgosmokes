import { Component, OnInit, Input  } from '@angular/core';

import { Map } from '../constants/maps.constant';


@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.less']
})
export class InteractiveMapComponent implements OnInit {
  @Input() map: Map;

  constructor() { }

  ngOnInit() {
  }

}
