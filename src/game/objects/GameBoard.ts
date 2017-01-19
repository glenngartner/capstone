import * as BABYLON from 'BABYLON';

export class GameBoard {
  public mesh: BABYLON.Mesh;

  constructor(name: string, height: number, width: number, scene: BABYLON.Scene){
    this.mesh = this.createBoard(name, height, width, scene);
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
}
