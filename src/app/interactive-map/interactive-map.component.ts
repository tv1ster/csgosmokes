import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Throws } from '../constants/db.constant';
import { Map } from '../constants/maps.constant';
import { ThrowsService } from '../throws.service';


@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.less'],
  providers: [ThrowsService]
})
export class InteractiveMapComponent implements AfterViewInit, OnInit, OnChanges  {
  @Input() map: Map;
  @ViewChild('mapContainer') mapContainer: ElementRef;
  smokes: Throws[];
  mapContainerHeight: Number;
  mapContainerWidth: Number;
  pickedThrows: string;
  pickedSide: string;
  getData;

  constructor(private throwsService: ThrowsService) {
    this.getData = function (throwType: string = 'smoke', throwSide: string = 't') {
      this.throwsService.getThrows(this.map.name, throwType, throwSide).subscribe((smokes) => {
        this.smokes = smokes;
      });
    };
  }

  ngOnInit () {
    this.pickedThrows = 'smoke';
    this.pickedSide = 't';
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.map && changes.map.currentValue) {
      this.getData(this.pickedThrows, this.pickedSide);
    }
  }

  ngAfterViewInit() {
    const domMapContainer = this.mapContainer.nativeElement;
    this.mapContainerHeight = domMapContainer.clientHeight;
    this.mapContainerWidth = domMapContainer.clientWidth;
  }

}
