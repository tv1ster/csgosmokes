import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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

  constructor(private throwsService: ThrowsService) {
    this.getData = function () {
      this.throwsService.getThrows().subscribe((smokes) => {
        this.smokes = smokes;
      });
    };
  }

  ngAfterViewInit() {
    const domMapContainer = this.mapContainer.nativeElement;
    this.mapContainerHeight = domMapContainer.clientHeight;
    this.mapContainerWidth = domMapContainer.clientWidth;
  }

}
