import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM, inject } from 'aurelia-framework';

@inject()
export class App {
  private router: Router;

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'The box beta';
    config.options.root = '/';
    config.options.hashChange = false;
    config.options.pushState = true;

    config.map([
      { route: ['', '/'], name: 'dash', moduleId: PLATFORM.moduleName('views/dash/dash'), title: 'Dashboard', nav: true },
      { route: 'demo', name: 'demo', moduleId: PLATFORM.moduleName('views/demo/demo'), title: 'Demo IOS', nav: true },
      { route: 'yahtzee', name: 'yahtzee', moduleId: PLATFORM.moduleName('views/yahtzee/yahtzee'), title: 'Yahtzee', nav: true }
    ]);

    this.router = router;
  }
}
