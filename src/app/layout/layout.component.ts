import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

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

  ngOnInit() {
  }

}
