import * as BABYLON from "BABYLON";

export class Light extends BABYLON.HemisphericLight {

  //create the basic lighting
  constructor(private name: string,
              scene: BABYLON.Scene,
              private direction: BABYLON.Vector3 = new BABYLON.Vector3(0, 1, 0)) {
    super(name, direction, scene);
  }
}
