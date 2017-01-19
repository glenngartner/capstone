import * as BABYLON from 'BABYLON';
import {Camera} from './objects/Camera';
import {Light} from './objects/Light';
import {GameBoard} from './objects/GameBoard';
import {Material} from "./utils/Material";

export class BabylonView {
  title: string = "babylon game viewport";
  private scene: BABYLON.Scene;
  private engine: BABYLON.Engine;

  constructor() {
  }

  attached() {
    this.scene = this.createScene();
    this.render(this.engine, this.scene);
  }

  // createCamera(canvas, scene): BABYLON.Camera {
  //   let camera = new BABYLON.ArcRotateCamera('arcCamera1', 1, 1, 10, new BABYLON.Vector3(0, 5, -10), scene);
  //   camera.setTarget(BABYLON.Vector3.Zero());
  //   camera.attachControl(canvas, false);
  // }

  createScene() {

    let canvas = <HTMLCanvasElement>document.getElementById('renderCanvas');
    this.engine = new BABYLON.Engine(canvas, true);

    let scene = new BABYLON.Scene(this.engine);

    let camera = new Camera('cam1', canvas, scene);

    //create the basic lighting
    // let light = new BABYLON.HemisphericLight('hemiLight1', new BABYLON.Vector3(0, 1, 0), scene);
    let light = new Light('hemiLight1', scene);

    // create a simple starting sphere
    let sphere = new BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 2;

    // add a ground plane
    // let ground = new BABYLON.Mesh.CreateGround('ground1', 4, 0, 4, scene);
    let board = new GameBoard('gameBoard', 8, 16, scene);
    let mat = new Material('planeMat', '#FF0000', .5, scene);
    mat.albedoColor = BABYLON.Color3.Red();
    board.mesh.material = mat;
    // board.mesh.material.albedoColor = BABYLON.Color3.Red();

    return scene;
  }

  render(engine: BABYLON.Engine, scene: BABYLON.Scene) {
    engine.runRenderLoop(function () {
      scene.render();
    });
  }
}
