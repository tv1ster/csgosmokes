import { Component, OnInit, Input  } from '@angular/core';

import { Map } from '../constants/maps.constant';
import { ThrowsService } from '../throws.service';


@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.less'],
  providers: [ThrowsService]
})
export class InteractiveMapComponent implements OnInit {
  @Input() map: Map;
  getData;
  smokes;

  constructor(private throwsService: ThrowsService) {
    this.getData = function () {
      this.throwsService.getThrows()
        .then(
          smokes => this.smokes = smokes,
          error =>  this.errorMessage = <any>error);
    };
  }

  ngOnInit() {
  }

}
