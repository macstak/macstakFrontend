import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// @ts-ignore
import Parallax from 'parallax-js';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  }

  gotToHomePage() {
    this.router.navigateByUrl('');
  }
}
