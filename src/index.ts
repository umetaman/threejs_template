import * as THREE from "three";
import { BaseApp } from "./base";

class MyApp extends BaseApp{

    public geometry = new THREE.BoxGeometry(250,250,250);
    public material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    public box = new THREE.Mesh(this.geometry, this.material);

    public Setup(): void{
        console.log("This is Setup.");

        this.Renderer.setSize(this.Width, this.Height);
        this.Renderer.setPixelRatio(window.devicePixelRatio);
        this.Renderer.setClearColor(0xffffff);

        this.Camera.fov = 45;
        this.Camera.aspect = this.Aspect;
        this.Camera.near = 1;
        this.Camera.far = 10000;
        this.Camera.position.set(0,0,1000);
        this.Camera.updateProjectionMatrix();

        this.Light.position.set(1,1,1);
        this.Light.color.set(0xffffff);
        this.Scene.add(this.Light);

        this.Scene.add(this.box);
    }

    public Update(): void{
        console.log("This is Update.");

        this.box.rotation.x += 0.05;
        this.box.rotation.y += 0.05;
    }

}

const app = new MyApp();