import './style.css';

import * as THREE from 'three'
//import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
//import {GLTFLoader} from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias:true,
});

const loader = new GLTFLoader()
loader.load('assets/scene.gltf',function(gltf){
    console.log(gltf)
    const root =gltf.scene
    root.scale.set(15,15,15)
    root.translateY(-10)
    root.rotateY(160)
    scene.add(root)

},function ( xhr ) {

    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

})
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(30);


const pointLight = new THREE.PointLight(0xf92a82)
pointLight.position.set(5,5,10)
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0xFBC3B7)
//scene.add(ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200,50);
//scene.add(lightHelper,)//gridHelper)

const controls = new OrbitControls(camera,renderer.domElement)
scene.background = new THREE.Color(0x2e294e)



function animate(){
    requestAnimationFrame(animate);
    //controls.update()
    renderer.render(scene,camera)
    
}

animate()
