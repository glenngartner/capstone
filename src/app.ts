import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Au Babylon';
    config.map([
      {
        route: '',
        name: 'home',
        viewPorts: {
          left: {moduleId: 'ui/left-menu'},
          right: {moduleId: 'game/game-view'}
        }
      }
    ]);

    this.router = router;
  }
}
