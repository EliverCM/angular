import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  tabSelected: Number = 1;
  constructor() {}

  activateTab(tabId: Number) {
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    this.tabSelected = tabId;

    const tab = document.querySelector(`#tab${tabId}-tab`);
    if (tab) {
      tab.classList.add('active');
    }
  }

  ngOnInit(): void {}
}
