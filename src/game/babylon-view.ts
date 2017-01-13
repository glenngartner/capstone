import * as BABYLON from 'BABYLON';

export class BabylonView {
  title: string = "babylon game viewport";
  public scene: BABYLON.Scene;
  private engine: BABYLON.Engine;

  constructor() {
  }

  attached(){
    this.scene = this.createScene();
    this.render(this.engine, this.scene);
  }

  createScene(){

    let canvas = document.getElementById('renderCanvas');
    this.engine = new BABYLON.Engine(canvas, true);

    let scene = new BABYLON.Scene(this.engine);

    // create the camera
    let camera = new BABYLON.ArcRotateCamera('arcCamera1', 1, 1, 10, new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);

    //create the basic lighting
    let light = new BABYLON.HemisphericLight('hemiLight1', new BABYLON.Vector3(0, 1, 0), scene);

    // create a simple starting sphere
    let sphere = new BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 2;

    // add a ground plane
    let ground = new BABYLON.Mesh.CreateGround('ground1', 4, 0, 4, scene);

    return scene;
  }

  render(engine: BABYLON.Engine, scene: BABYLON.Scene){
    console.log("render function entered");
    engine.runRenderLoop(function(){
      scene.render();
    });
  }
}
