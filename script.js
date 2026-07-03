window.addEventListener("load", () => {

    const card = document.querySelector(".glass");

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = "1s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);

});const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth/700,
0.1,
1000
);

camera.position.z=22;

const renderer=new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
window.innerWidth,
700
);

document
.getElementById("sphere")
.appendChild(renderer.domElement);

const group=new THREE.Group();

scene.add(group);

const skills=[

"Python",
"TensorFlow",
"OpenCV",
"Deep Learning",
"Machine Learning",
"HTML",
"CSS",
"JavaScript",
"Django",
"Flask",
"Pandas",
"NumPy",
"Pygame"

];

const radius=8;

skills.forEach((skill,index)=>{

const canvas=document.createElement("canvas");

canvas.width=512;
canvas.height=256;

const ctx=canvas.getContext("2d");

ctx.fillStyle="#6d5df6";

ctx.beginPath();

ctx.roundRect(0,0,512,256,40);

ctx.fill();

ctx.fillStyle="white";

ctx.font="bold 42px Arial";

ctx.textAlign="center";

ctx.fillText(skill,256,145);

const texture=new THREE.CanvasTexture(canvas);

const material=new THREE.SpriteMaterial({

map:texture

});

const sprite=new THREE.Sprite(material);

const phi=Math.acos(-1+(2*index)/skills.length);

const theta=Math.sqrt(skills.length*Math.PI)*phi;

sprite.position.set(

radius*Math.cos(theta)*Math.sin(phi),

radius*Math.sin(theta)*Math.sin(phi),

radius*Math.cos(phi)

);

sprite.scale.set(4,2,1);

group.add(sprite);

});

function animate(){

requestAnimationFrame(animate);

group.rotation.y+=0.003;

group.rotation.x+=0.001;

renderer.render(scene,camera);

}

animate();

window.addEventListener("mousemove",(e)=>{

group.rotation.y=e.clientX*0.001;

group.rotation.x=e.clientY*0.0007;

});const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});