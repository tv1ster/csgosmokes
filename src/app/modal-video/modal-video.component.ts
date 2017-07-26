import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.less']
})
export class ModalVideoComponent implements OnInit {
  @Input() throwData;
  src: SafeResourceUrl;

  constructor(public activeModal: NgbActiveModal, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.throwData.url);
  }

}
