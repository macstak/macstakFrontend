// @ts-ignore
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

// @ts-ignore
import Parallax from 'parallax-js';

// @ts-ignore
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
// @ts-ignore
export class PageNotFoundComponent implements AfterContentInit {
  constructor(public router: Router) {}

  // @ts-ignore
  ngAfterContentInit(): void {
    const scene = document.getElementById('scene');
    const parallax = new Parallax(scene, {
      relativeInput: true,
    });
  }

  // @ts-ignore
  gotToHomePage() {
    this.router.navigateByUrl('');
  }
}
