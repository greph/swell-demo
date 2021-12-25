import {AfterViewInit, Injectable, OnInit} from '@angular/core';

@Injectable()
export abstract class BaseComponent implements OnInit, AfterViewInit {

  protected constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
}
