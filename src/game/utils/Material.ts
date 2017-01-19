import * as BABYLON from "BABYLON";

export class Material extends BABYLON.PBRMaterial {

  constructor(private name:string,
              private color: string,
              private roughess: number,
              private scene: BABYLON.Scene){
    super(name, scene);

    // this.albedoColor = BABYLON.Color3.FromHexString(color);
    // let mat = new BABYLON.PBRMaterial(name, scene);
    // mat.albedoColor = BABYLON.Color3.FromHexString(color);
  }

  configure(color: string){
    // this.albedoColor = color;
  }
}
