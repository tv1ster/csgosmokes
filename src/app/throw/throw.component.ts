import {Component, OnInit, Input} from '@angular/core';
import {Throws} from '../constants/db.constant';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalVideoComponent} from '../modal-video/modal-video.component';

@Component({
  selector: 'app-throw',
  templateUrl: './throw.component.html',
  styleUrls: ['./throw.component.less']
})
export class ThrowComponent implements OnInit {
  @Input() throwsData: Throws[];
  @Input() height: number;
  @Input() width: number;


  constructor(private modalService: NgbModal) {
  }

  open(throwEl) {
    const modalRef = this.modalService.open(ModalVideoComponent, {
      windowClass: 'popup-video'
    });
    modalRef.componentInstance.throwData = throwEl;
  }

  public hoverThrow(throwEl: Throws) {
    throwEl.r1 = 9;
    throwEl.r2 = 21;
    throwEl.rLine = 4;
  }

  public leaveThrow(throwEl) {
    delete throwEl.r1;
    delete throwEl.r2;
    delete throwEl.rLine;
  }

  ngOnInit() {
  }

}
