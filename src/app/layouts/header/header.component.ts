import {Component} from '@angular/core';
import {BaseComponent} from "../../base.component";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent {
  name: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.name = 'Logesh';
  }
}
