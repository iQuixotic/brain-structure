// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// // import React3 from 'react-three-renderer';
// import TrackballControls from 'three-trackballcontrols';
// import * as THREE from 'three';
// import * as OBJLoader from 'three-obj-loader';
// import PureRenderMixin from 'react-addons-pure-render-mixin'; // ES6
// OBJLoader(THREE);

// class Brain extends Component {

//   componentDidMount() {
 
//     this.THREE = THREE;
//     const objLoader = new this.THREE.OBJLoader();
//     objLoader.load('./brain3d.obj', (object) => {});
//   }
// }
// // import * as THREE from 'three';
// // var manager = new THREE.LoadingManager();



// const scene = new THREE.Scene();

// // Set the scene size.
// const WIDTH = 400;
// const HEIGHT = 300;

// // Set some camera attributes.
// const VIEW_ANGLE = 45;
// const ASPECT = WIDTH / HEIGHT;
// const NEAR = 0.1;
// const FAR = 10000;

// // // Get the DOM element to attach to
// const container =
//     document.querySelector('#container');

// // // Create a WebGL renderer, camera
// // // and a scene
// const renderer = new THREE.WebGLRenderer();
// const camera =
//     new THREE.PerspectiveCamera(
//         VIEW_ANGLE,
//         ASPECT,
//         NEAR,
//         FAR
//     );

   

// const scene = new THREE.Scene();

// // Model
// let loader = new THREE.OBJLoader();
// loader.load('./brain3d.obj', handle_load);

// function handle_load(geometry, materials) {
//     let mesh = new THREE.Mesh(geometry, materials);
//     scene.add(mesh);
//     mesh.position.z = -10;
// }

// // // Add the camera to the scene.
// scene.add(camera);

// // // Start the renderer.
// renderer.setSize(WIDTH, HEIGHT);


// // // Attach the renderer-supplied
// // // DOM element.
// container.appendChild(renderer.domElement);