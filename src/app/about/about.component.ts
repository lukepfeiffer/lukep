import { Component, OnInit } from '@angular/core';
import { Image } from "../image";
import { IMAGES } from "../images";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  images = IMAGES;

  constructor() { }

  ngOnInit() {
  }

}
