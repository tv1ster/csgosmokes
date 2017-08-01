import { Component, Input, ViewChild, ElementRef, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Throws } from '../constants/db.constant';
import { Map } from '../constants/maps.constant';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.less']
})
export class InteractiveMapComponent implements OnInit, OnChanges  {
  @Input() map: Map;
  @ViewChild('mapContainer') mapContainer: ElementRef;
  gottenData: FirebaseListObservable<Throws[]>;
  smokes: Throws[];
  mapContainerHeight: Number;
  mapContainerWidth: Number;
  pickedThrows: string;
  pickedSide: string;
  getData;

  constructor(private db: AngularFireDatabase) {
    this.gottenData = db.list('/throws');

    this.getData = function (throwType: string = 'smoke', throwSide: string = 't') {
      this.smokes = this.gottenData.map((data) => {
        return data.filter((item) => {
          return item.map === this.map.name && item.type === throwType && item.side === throwSide;
        });
      });
    };
  }

  ngOnInit () {
    this.pickedThrows = 'smoke';
    this.pickedSide = 't';
    const domMapContainer = this.mapContainer.nativeElement;
    this.mapContainerHeight = domMapContainer.clientHeight;
    this.mapContainerWidth = domMapContainer.clientWidth;
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.map && changes.map.currentValue) {
      this.getData(this.pickedThrows, this.pickedSide);
    }
  }

}
