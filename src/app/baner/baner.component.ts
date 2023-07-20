import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss'],
})
export class BanerComponent implements OnInit {
  designation: string = 'Full Stack';
  designationList: string[] = ['Full Stack','Front End'];
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    setInterval(()=>{
      let index = this.designationList.indexOf(this.designation);
      if((index+1) >= this.designationList.length) {
        index = -1;
      }
      this.designation = this.designationList[index+1];
    },2000)
  }
}
