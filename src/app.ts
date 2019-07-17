import { Modal } from './functions/components/modal/modal';
import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM, inject } from 'aurelia-framework';
import { IUser } from 'model/user';

@inject()
export class App {
  private router: Router;
  private sessionUser: IUser;

  constructor(
    public modalService: Modal
  ) {
    this.modalService = new Modal();
    this.sessionUser = { firstName: 'Levi', lastName: 'Deurloo', mailAddress: 'levi@jke.nl' } as IUser;
  }

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'The box beta';
    config.options.root = '/';
    config.options.hashChange = false;
    config.options.pushState = true;

    config.map([
      { route: ['', '/'], name: 'dash', moduleId: PLATFORM.moduleName('views/dash/dash'), title: 'Dashboard', nav: true, settings: { data: 'home' } },
      { route: 'demo', name: 'demo', moduleId: PLATFORM.moduleName('views/demo/demo'), title: 'Demo IOS', nav: true, settings: { data: 'person' } },
      { route: 'yahtzee', name: 'yahtzee', moduleId: PLATFORM.moduleName('views/yahtzee/yahtzee'), title: 'Yahtzee', nav: true, settings: { data: 'star' } },
      { route: 'drugs', name: 'drugs', moduleId: PLATFORM.moduleName('views/drugs/drugs'), title: 'Droga', nav: true, settings: { data: 'person' } },
    ]);

    this.router = router;
  }
}
