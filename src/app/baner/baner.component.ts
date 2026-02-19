import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss'],
})
export class BanerComponent implements OnInit, OnDestroy {
  designation = 'Full Stack';
  private designationList = ['Full Stack', 'Front End', 'Angular', 'React'];
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      const idx = this.designationList.indexOf(this.designation);
      this.designation = this.designationList[(idx + 1) % this.designationList.length];
    }, 2500);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
