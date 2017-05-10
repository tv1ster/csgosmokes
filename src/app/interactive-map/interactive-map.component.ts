import { Component, OnInit, Input  } from '@angular/core';


@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.less']
})
export class InteractiveMapComponent implements OnInit {
  @Input() map;

  constructor() { }

  ngOnInit() {
    console.log(this.map);
  }

}
