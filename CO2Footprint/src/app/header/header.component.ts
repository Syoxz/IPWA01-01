import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  position: "start" | "end" = "start";
  title = "CO2Footprint"

  ngOnInit() {
    this.checkDirection();
  }

  checkDirection() {
    const rtlLanguages = ["ar", "he", "fa", "ur", "ps", "sd"];
    const lang = navigator.language;
    if (rtlLanguages.includes(lang)) {
      this.position = "end"
    }
  }
}

