import * as BABYLON from "BABYLON";

export class Camera extends BABYLON.ArcRotateCamera {

  constructor(private name: string,
              private canvas: HTMLCanvasElement,
              private scene: BABYLON.Scene,
              private position: BABYLON.Vector3 = new BABYLON.Vector3(0, 5, -10)) {
    super(name, 1, 1, 10, position, scene);
    this.createCamera(canvas);
  }

  createCamera(canvas: HTMLCanvasElement) {
    super.setTarget(BABYLON.Vector3.Zero());
    super.attachControl(canvas, false);
  }
}
