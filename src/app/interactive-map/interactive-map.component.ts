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
export class InteractiveMapComponent implements AfterViewInit  {
  @Input() map: Map;
  @ViewChild('mapContainer') mapContainer: ElementRef;
  smokes: Throws[];
  mapContainerHeight: Number;
  mapContainerWidth: Number;
  getData;
  pickedThrows: string;

  constructor(private throwsService: ThrowsService) {
    this.getData = function () {
      this.throwsService.getThrows(this.map.name).subscribe((smokes) => {
        this.smokes = smokes;
      });
    };
  }

  ngOnInit () {
    this.pickedThrows = 'smoke';
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.map && changes.map.currentValue) {
      this.getData(changes.map.currentValue.name);
    }
  }

  ngAfterViewInit() {
    const domMapContainer = this.mapContainer.nativeElement;
    this.mapContainerHeight = domMapContainer.clientHeight;
    this.mapContainerWidth = domMapContainer.clientWidth;
  }

}
