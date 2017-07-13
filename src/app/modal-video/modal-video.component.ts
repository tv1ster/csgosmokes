import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.less']
})
export class ModalVideoComponent implements OnInit {
  @Input() throwData;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
