import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isMobileShow: any;
  public isDesktopShow: any;
  public innerWidth: any;
  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
    // console.log(window.outerWidth);

    if (this.innerWidth < 992 || window.outerWidth < 992) {
      this.isMobileShow = true;
      this.isDesktopShow = false;
    } else {
      // console.log('hi');

      this.isMobileShow = false;
      this.isDesktopShow = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
    // console.log(window.outerWidth);
    // console.log(this.innerWidth);
    if (this.innerWidth < 992 || window.outerWidth < 992) {
      this.isMobileShow = true;
      this.isDesktopShow = false;
    } else {
      console.log('hi');

      this.isMobileShow = false;
      this.isDesktopShow = true;
    }
  }
}
