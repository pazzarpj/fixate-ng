import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-manage-list',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  routes: Object[] = [{
    icon: '',
    route: '.',
    title: 'Test Selection',
  }, {
    icon: '',
    route: '.',
    title: 'Test Runner',
  }, {
    icon: '',
    route: '.',
    title: 'Resource Control',
  }, {
    icon: '',
    route: '.',
    title: 'Debug',
  }
  ];
  usermenu: Object[] = [{
    icon: 'swap_horiz',
    route: '.',
    title: 'Switch account',
  }, {
    icon: 'tune',
    route: '.',
    title: 'Account settings',
  }, {
    icon: 'exit_to_app',
    route: '.',
    title: 'Sign out',
  },
  ];

  constructor() { }

}
