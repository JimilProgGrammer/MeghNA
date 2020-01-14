import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cloud-detect',
  templateUrl: './cloud-detect.component.html',
  providers: [ NgxSpinnerService ],
  styleUrls: ['./cloud-detect.component.css']
})
export class CloudDetectComponent implements OnInit {

  @ViewChild('imgSrcElem') elem: ElementRef;
  x: number = 0;
  y: number = 0;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(this.elem.nativeElement)
      .on('click', (event) => {
        this.spinner.show();
        this.x = event.pageX - this.elem.nativeElement.offsetLeft;
        this.y = event.pageY - this.elem.nativeElement.offsetTop;
        console.log("("+this.x+","+this.y+")");
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      });
  }

}