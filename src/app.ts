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
      { route: ['', '/'], name: 'dash', moduleId: PLATFORM.moduleName('views/dash/dash'), title: 'Dashboard', nav: true },
      { route: 'yahtzee', name: 'yahtzee', moduleId: PLATFORM.moduleName('views/yahtzee/yahtzee'), title: 'Yahtzee', nav: true }
    ]);

    this.router = router;
  }
}
