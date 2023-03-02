var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.z = 10;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.1;

var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(5, 5, 5);
scene.add(light);

var carbonGeometry = new THREE.SphereGeometry(1, 32, 32);
var carbonMaterial = new THREE.MeshPhongMaterial({
	color: 0xff0000
});
var carbon = new THREE.Mesh(carbonGeometry, carbonMaterial);
carbon.position.set(0, 0, 0);
scene.add(carbon);

var hydrogenGeometry = new THREE.SphereGeometry(0.5, 32, 32);
var hydrogenMaterial = new THREE.MeshPhongMaterial({
	color: 0x0099ff
});
var hydrogen1 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
hydrogen1.position.set(2, 0, 0);
scene.add(hydrogen1);

var hydrogen2 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
hydrogen2.position.set(-2, 0, 0);
scene.add(hydrogen2);

var hydrogen3 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
hydrogen3.position.set(0, 2, 0);
scene.add(hydrogen3);

var hydrogen4 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
hydrogen4.position.set(0, -2, 0);
scene.add(hydrogen4);

var bondGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32);
var bondMaterial = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	emissive: 0xdddddd
});
var bond1 = new THREE.Mesh(bondGeometry, bondMaterial);
bond1.position.set(1, 0, 0);
bond1.rotation.z = Math.PI / 2;
scene.add(bond1);

var bond2 = new THREE.Mesh(bondGeometry, bondMaterial);
bond2.position.set(-1, 0, 0);
bond2.rotation.z = Math.PI / 2;
scene.add(bond2);

var bond3 = new THREE.Mesh(bondGeometry, bondMaterial);
bond3.position.set(0, 1, 0);
scene.add(bond3);

var bond4 = new THREE.Mesh(bondGeometry, bondMaterial);
bond4.position.set(0, -1, 0);
scene.add(bond4);

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}
animate();
