import { Component, OnInit } from '@angular/core';
import {} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-founder-page',
  templateUrl: './founder-page.component.html',
  styleUrls: ['./founder-page.component.scss'],
})
export class FounderPageComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
