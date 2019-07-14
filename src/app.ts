import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM, inject } from 'aurelia-framework';

@inject()
export class App {
  private router: Router;

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'The box beta';
    config.options.root = '/';
    config.options.hashChange = false;

    config.map([
      { route: ['', '/'], name: 'dash', moduleId: PLATFORM.moduleName('views/dash/dash'), title: 'Dash board' },
      { route: 'page', name: 'dapageh', moduleId: PLATFORM.moduleName('views/page/page'), title: 'page 2' }
    ]);

    this.router = router;
  }
}
