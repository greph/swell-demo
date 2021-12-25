import {Component} from '@angular/core';

import {BaseComponent} from './base.component';
import swell from 'swell-js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    swell.init('logesh', 'pk_rU82dazIL3FXPDsXwVhX4OImeoyHLGCm');
  }
}
