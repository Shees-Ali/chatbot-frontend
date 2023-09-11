import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base/base';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BasePage implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {}
}
