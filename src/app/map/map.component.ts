import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  map: String;
  availableMap: Boolean;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.map((params: Params) => {
      return params['mapName'];
    }).subscribe((mapName) => {
      this.map = mapName;
      this.availableMap = checkMap(this.map);
    });
    function checkMap(map: String) {
      return map === 'mirage';
    }
  }

}
