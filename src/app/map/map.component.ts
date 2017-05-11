import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

import { Map, getMap } from '../constants/maps.constant';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  map: Map;
  availableMap: Boolean;
  searchedMap: String;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.map((params: Params) => {
      return params['mapName'];
    }).subscribe((mapName) => {
      this.availableMap = getMap(mapName) !== null;
      if (this.availableMap) {
        this.map = getMap(mapName);
      } else {
        this.searchedMap = mapName;
      }
    });
  }

}
