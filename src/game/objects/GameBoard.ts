import * as BABYLON from "BABYLON";

export class GameBoard {
  public mesh: BABYLON.Mesh;

  constructor(name: string, height: number, width: number, scene: BABYLON.Scene){
    this.mesh = this.createBoard(name, height, width, scene);
    this.mesh.material = this.createMaterial(this.mesh, scene);
    this.orientPlane(this.mesh, new BABYLON.Vector3(Math.PI/2, 0, 0));
  }

  createBoard(name: string, height: number, width: number, scene: BABYLON.Scene): BABYLON.Mesh{
    let box = BABYLON.MeshBuilder.CreatePlane(name, {
      width: width,
      height: height
    }, scene);

    return box;
  }

  orientPlane(mesh: BABYLON.Mesh, vector3: BABYLON.Vector3){
    mesh.rotation = vector3;
  }

  createMaterial(mesh:BABYLON.Mesh, scene: BABYLON.Scene): BABYLON.Material{
    let mat = new BABYLON.PBRMaterial('boardMat', scene);
    mat.albedoColor = BABYLON.Color3.FromHexString('#477E71');
    mat.reflectivityColor = new BABYLON.Color3(.2, .2, .2);
    mat.reflectionColor = new BABYLON.Color3(1, 1, 1);
    mat.microSurface = 0.5;
    return mat;
  }
}
