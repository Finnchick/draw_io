import Camera, {CameraOptions} from "./Camera";

const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d')!;

const nodes = [];
const camera = new Camera(context, {startingPosition: [700, 250]} as CameraOptions);

interface Point {
	x: number,
	y: number
}

type lastPoint = Point | undefined;

if (!canvas) {
	throw new Error('no canvas')
}

if (!context) {
	throw new Error('no context')
}

function resize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	draw();

}

function draw() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}
let lastPoint: lastPoint;



function move(e: MouseEvent) {

	if (e.buttons) {
		if (!lastPoint) {
			const {x:xTarget, y:yTarget} = camera.worldToScreen(e.offsetX, e.offsetY);
			lastPoint = { x: xTarget, y: yTarget };
			return;
		}
		camera.begin()
		context.beginPath();
		const {x:xLast, y:yLast} = camera.worldToScreen(lastPoint.x, lastPoint.y);
		// context.moveTo(xLast, yLast);
		const {x:xTarget, y:yTarget} = camera.worldToScreen(e.offsetX, e.offsetY);
		console.log('xLast ' + xLast + ' yLast ' +yLast + ' xTarget ' + xTarget + ' yTarget ' + yTarget + ' event x ' + e.offsetX + ' event y ' + e.offsetY)
		 context.lineTo(xTarget, yTarget);
		context.strokeStyle = 'green';
		context.lineWidth = 5;
		context.lineCap = 'round';
		context.stroke();
		// lastPoint = { x: xTarget, y: yTarget };
	//	debugger
		camera.end();
	}
}

function key(e: KeyboardEvent) {
	if (e.key === 'Backspace') {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}
}

window.onkeydown = key;
window.onmousemove = move;
window.onresize = resize;
resize();