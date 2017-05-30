import { Component } from '@angular/core';
import { maps, Map } from './constants/maps.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  maps: Map[] = maps;
}
