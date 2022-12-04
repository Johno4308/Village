// COS3712 ASSIGNMENT 2
// JOHNATHAN DAVID COOKSON
// ID 8812125074088
// STUDENT NUMBER 45051429


// *********** DECLARING SCENE ***********
var scene = new THREE.Scene() 

// *********** DECALRING OBJECT GEOMETRIES ***********
var planeGeo = new THREE.PlaneBufferGeometry(300,300);               
planeGeo.rotateX(4.7);  
var hutbaseGeo = new THREE.CylinderBufferGeometry(22, 22, 21);
var hutroofGeo = new THREE.ConeGeometry(25, 20, 64);
const points = [];                                                  
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 20 + 10, ( i - 5 ) * 3 ) );
}
const iglooGeo = new THREE.LatheGeometry( points );
var iglooground_Geo = new THREE.CircleGeometry( 25, 32 ); 
var iglooEnt_Geo = new THREE.CylinderGeometry( 8, 8, 20, 32 );
var igloohole_Geo = new THREE.CircleGeometry( 7, 32 ); 
var lakeGeo = new THREE.CircleGeometry( 42, 32 ); 


// *********** DECLARING TEXTURES ***********
var loader = new THREE.TextureLoader()  
var nightTexture = loader.load('static/nighttime.jpg')
var dayTexture = loader.load('static/daytime.jpg')
var planeTexture = loader.load('static/plane.jpg')
var lakeTexture = loader.load('static/lake.jpg') 
var hutbaseTexture = loader.load('static/hut/hutbase.jpg')
var hutroofTexture = loader.load('static/hut/hutroof.jpg')
var iglooTexture = loader.load('static/igloo.jpg')
var lakeAlpha = loader.load('static/lakealpha.png')
var igloo_norMap = loader.load('static/igloo_NorMap.jpg')
var fireTexture = loader.load('static/fire.jpg');


// *********** DECLARING MATERIALS ***********
var planeMat = new THREE.MeshLambertMaterial({
    map: planeTexture,
})   

var hutbaseMat = new THREE.MeshLambertMaterial(hutbaseMat);
hutbaseMat.Color = 0xF2F3F5;
hutbaseMat.map = hutbaseTexture;
var hutroofMat = new THREE.MeshLambertMaterial(hutroofMat);
hutroofMat.Color = 0xF2F3F5;
hutroofMat.map = hutroofTexture;
var iglooMat = new THREE.MeshLambertMaterial(iglooMat);
iglooMat.Color = 0xFFFFFFF;
iglooMat.map = iglooTexture;
iglooMat.normalMap = igloo_norMap;

var iglooground_Mat = new THREE.MeshLambertMaterial({
    map: iglooTexture,          
});
var igloohole_Mat = new THREE.MeshLambertMaterial({
    color: 0x57585F             
})
var lakeMat = new THREE.MeshLambertMaterial({
    map: lakeTexture,           
    alphaMap: lakeAlpha,        
});

// ALL FIRE AND SMOKE IMPLEMENTATION BELOW (BESIDES SCENE FUNCTION) LINES 67 - 119
const fireGEO = new THREE.ConeGeometry( 10, 15, 32 );
const fireMat = new THREE.MeshBasicMaterial( {
    color: 0xffff00,
    map: fireTexture
} );

const fire = new THREE.Mesh( fireGEO, fireMat );
scene.add( fire );
fire.position.y = -48;
fire.position.z = 35;
class CustomSinCurve extends THREE.Curve {

	constructor( scale = 1 ) {

		super();

		this.scale = scale;

	}

	getPoint( t, optionalTarget = new THREE.Vector3() ) {

		const tx = t * 3 - 1.5;
		const ty = Math.sin( 2 * Math.PI * t );
		const tz = 0;

		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

	}

}

const path = new CustomSinCurve( 3 );
const smoke1GEO = new THREE.TubeGeometry( path, 20, 1, 4, false );
const smoke1Mat = new THREE.MeshBasicMaterial( { color: 0x828383 } );
const smoke1 = new THREE.Mesh( smoke1GEO, smoke1Mat );
scene.add( smoke1 );
smoke1.position.x = 2;
smoke1.position.y = -40;
smoke1.position.z = 35;
smoke1.rotation.z = -28.9;

const smoke2GEO = new THREE.TubeGeometry( path, 20, 1, 4, false );
const smoke2Mat = new THREE.MeshBasicMaterial( { color: 0x828383 } );
const smoke2 = new THREE.Mesh( smoke2GEO, smoke2Mat );
scene.add( smoke2 );

smoke2.position.x = -2;
smoke2.position.y = -40;
smoke2.position.z = 35;
smoke2.rotation.z = -28.9;
smoke2.rotation.y = -40.1;


// *********** DECLARING OBJECT MESH & SETTING OF POSITION ***********
var plane = new THREE.Mesh(planeGeo,planeMat)      
plane.position.set(0,-52,-31)   
scene.add(plane)               
var hutbase = new THREE.Mesh(hutbaseGeo, hutbaseMat)
scene.add(hutbase)
hutbase.position.y = -40      
hutbase.rotation.y = 3.6
hutbase.position.z = 60
hutbase.position.x = 66
var hutroof = new THREE.Mesh(hutroofGeo,hutroofMat);
scene.add(hutroof)
hutroof.position.x = 67
hutroof.position.y = -19
hutroof.position.z = 60
var igloo = new THREE.Mesh(iglooGeo,iglooMat)
scene.add(igloo)
igloo.recieveShadow = true;

igloo.position.x = -89
igloo.position.y = -40
igloo.position.z = -93
igloo.rotation.z = -3.1
var iglooground = new THREE.Mesh(iglooground_Geo,iglooground_Mat)
scene.add(iglooground)
iglooground.position.y = -40;
iglooground.position.x = -88;
iglooground.position.z = -95;
iglooground.rotation.x = -1.6;
var iglooEntrance = new THREE.Mesh(iglooEnt_Geo,iglooMat)
scene.add(iglooEntrance)
iglooEntrance.position.y = -48
iglooEntrance.rotation.x = 1.5
iglooEntrance.position.z = -66
iglooEntrance.rotation.z = -0.5
iglooEntrance.position.x = -75
var iglooEnt = new THREE.Mesh(igloohole_Geo, igloohole_Mat)
scene.add(iglooEnt)
iglooEnt.position.y = -48
iglooEnt.rotation.y = 0.5
iglooEnt.position.z = -57
iglooEnt.rotation.z = -1.6
iglooEnt.position.x = -70
iglooEnt.rotation.x = 12.6
var lake = new THREE.Mesh(lakeGeo,lakeMat);
scene.add(lake)
lake.position.y = -51.2;
lake.position.z = -25;
lake.rotation.x = -1.6;

// *********** DECLARING LIGHTS ***********
var pointLight_1 = new THREE.PointLight(0xFFFFFF, 5)    
scene.add(pointLight_1)
pointLight_1.position.x = 96.1 
pointLight_1.position.y = 5.1
pointLight_1.position.z = 202.4
var pointLight_2 = new THREE.PointLight(0xFFFFFF, 1)
scene.add(pointLight_2)
pointLight_2.position.x = -199.8
pointLight_2.position.y = 20.2
pointLight_2.position.z = -117
//LIGHT_3
var pointLight_3 = new THREE.PointLight(0xFFFFFF, 1.5)
scene.add(pointLight_3)
pointLight_3.position.x = 134.1
pointLight_3.position.y = 12.7
pointLight_3.position.z = -17.7

//FIRELIGHT                                             //FIRELIGHTHING FOR NIGHT SCENE
var fireLight = new THREE.PointLight(0xFFAE00, 3);      //RED SIDE OF YELLOW COLOUR CHOICE
scene.add(fireLight);
fireLight.position.y = -40;                             //POSITIONS TO SHINE OUT OF CONE FIRE PIT
fireLight.position.z = 35;


//* DAY AND NIGHT FUNCTIONS */                          // DAY NIGHT FUNCTIONS
function dayScene(){
    scene.background = dayTexture;
    pointLight_1.intensity = 1;
    pointLight_2.intensity = 1;
    pointLight_3.intensity = 1;
    scene.add(lake);
    scene.remove(fire);
    scene.remove(fireLight);
    scene.remove(smoke1);
    scene.remove(smoke2);
}

function nightScene(){
    scene.background = nightTexture;
    pointLight_1.intensity = 0.0;
    pointLight_2.intensity = 0.0;
    pointLight_3.intensity = 0.0;
    scene.add(fire);
    scene.add(fireLight);
    scene.add(smoke1);
    scene.add(smoke2);
}

// ROTATING OF SMOKE EFFECT
var smokeRotationStep = 0.05;
function smokeRotation(step){
    smoke1.rotation.y += step;
    smoke2.rotation.y -= step;
}


// *********** DECLARING CAMERA ***********
var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 500) 
camera.position.set(0,-3,200);  
scene.add(camera)               

// *********** DECLARING RENEDERER ***********
var renderer = new THREE.WebGLRenderer({    // declaring the webgl renderer class into a variable renderer
    antialias: false, // Tells the renderer to clear its color, depth or stencil drawing buffer -> bool which is set to false
    alpha: true
});     


renderer.setSize(window.innerWidth, window.innerHeight); // get the scale dimensions of the renderer
renderer.setClearColor(0x000000, 0);       
document.body.appendChild(renderer.domElement);                

// declaring a eventlistener function to make my scene scalable
window.addEventListener('resize',function(){    
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect=width/height;
    camera.updateProjectionMatrix;
})

camera.position.z = 150;

var clock = new THREE.Clock();
var matrix = new THREE.Matrix4(); 
function startRotation(step) {
    //shapeRotationStep = 5; // rotation time in seconds
    if (window.width !== window.clientWidth || window.height !== window.clientHeight) {
         renderer.setSize(window.clientWidth, window.clientHeight, false);
        camera.aspect = window.clientWidth /  window.clientHeight;
        camera.updateProjectionMatrix();
      }
        
      // Create a generic rotation matrix that will rotate an object
      matrix.makeRotationY(clock.getDelta() * 2 * Math.PI / step);
        
    // Apply matrix like this to rotate the camera.
    camera.position.applyMatrix4(matrix);
    }

 // HTML elements for event listeners and DOM interaction.
var shapeRotationDirectionControl = document.getElementById('direction-control');
var shapeRotationMotionControl = document.getElementById('motion-control'); 
var shapeRotationSpeedControl = document.getElementById('speed-control');
var shapeRotationStepValueText = document.getElementById('rotation-step-value-text');
var sceneZoomControl = document.getElementById('scene-zoom-control');
var sceneZoomValueText = document.getElementById('scene-zoom-value-text');
var sceneRotationControl = document.getElementById('scene-rotation-control');
var sceneToggleButton = document.getElementById('scene-toggle-button');
        
// Shape rotation settings and function.
var shapeRotationStep = 10;
var shapeIsRotating = true;
    
// Rotation direction control event listener.
shapeRotationDirectionControl.addEventListener('click', function(e) {
    if (e.target.className == 'clockwise')
        e.target.className = 'counter-clockwise';
    else
        e.target.className = 'clockwise';
    shapeRotationStep = -shapeRotationStep;
 });
    
// Rotation speed control event listener and function.
function updateRotationSpeed(e) {    
    if (shapeRotationStep < 0) {
        shapeRotationStep = -e.target.value;
        shapeRotationStepValueText.innerHTML = -shapeRotationStep; 
    }
    else {
        shapeRotationStep = +e.target.value;
        shapeRotationStepValueText.innerHTML = +shapeRotationStep;
    }
}
        
shapeRotationSpeedControl.addEventListener('input', function(e) {
    updateRotationSpeed(e);
});
        
// Rotation motion control event listener.
shapeRotationMotionControl.addEventListener('click', function(e) {
    if (shapeIsRotating)
        e.target.className = 'start';
    else
        e.target.className = 'stop';
            shapeIsRotating = !shapeIsRotating;
});

//Scene zoom setting and control event listener and function
var zoomLevel = 1;

function updateZoomLevel(e){
    zoomLevel = e.target.value;
    camera.zoom = zoomLevel;
    camera.updateProjectionMatrix();
    sceneZoomValueText.innerHTML = zoomLevel + 'x';
}

sceneZoomControl.addEventListener('input', function(e){
    updateZoomLevel(e);
});

//Scene camera position control event listener and function
var cameraXPos = -10;

function updateCameraPosition(e) {
    camera.position.x = e.target.value;
    camera.lookAt(scene.position);
}
        
sceneRotationControl.addEventListener('input', function(e) {					
    updateCameraPosition(e);
});
sceneRotationControl.value = cameraXPos;

var dayTime = true;
sceneToggleButton.addEventListener('click', function(e){
    dayTime = !dayTime;
})

shapeIsRotating.innerHTML = shapeRotationStep;
sceneZoomControl.value = zoomLevel;
sceneRotationControl.value = cameraXPos;

// *********** DECLARING ANIMATE *********** 
function animate() {
    requestAnimationFrame(animate);
    camera.lookAt(plane.position);
    smokeRotation(!dayTime ? smokeRotationStep : 0);
    startRotation(shapeIsRotating ? shapeRotationStep : 1000000);
    dayTime ? dayScene() : nightScene();
    renderer.render(scene, camera);
}
animate();



