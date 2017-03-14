'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var WIDTH = window.innerWidth;
var HEIGHT = 100;
var drawStyle = '#b1b1b1';
var canvasTrm;
var topOffSet;
var bottomOffSet;
var r1;
var r2;
var arc1;
var arc2;
var arr1;
var arr2;
var arr3;
var arr4;
var arr5;
var arr6;
var y;
var y1;
var disY;
var isLoad = false;

var callback;

var canvas = document.createElement('canvas');
var body = document.body;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.borderBottom = "1px solid #ccc";
// canvas.style.position = ""
body.style.transform = "translate(0,-" + HEIGHT + "px)";
body.insertBefore(canvas, body.firstChild);

// console.log(canvas);
var context = canvas.getContext('2d');

function init(opt) {
    callback = opt.callback;
    initData();
    draw();
}

function end() {
    // console.log('end');
    move(HEIGHT);
    isLoad = false;
    initData();
    draw();
}

function load() {
    console.log('load!!!');

    clear();
    renderText('Loading...');

    isLoad = true;
    move(0);
    callback();
}

function initData() {

    canvasTrm = HEIGHT;

    topOffSet = bottomOffSet = 15;
    r1 = r2 = WIDTH / 15; //2个圆直径

    //圆心坐标
    arc1 = [WIDTH / 2, HEIGHT - bottomOffSet], arc2 = [WIDTH / 2, HEIGHT - bottomOffSet];

    arr1 = [arc2[0] - r2 / 2, arc2[1]]; //bottom
    arr2 = [WIDTH / 2, arc2[1]]; //center
    arr3 = [arc1[0] - r1 / 2, arc1[1]]; //top

    arr4 = [arc2[0] + r2 / 2, arc2[1]]; //bottom
    arr5 = arr2; //center
    arr6 = [arc1[0] + r1 / 2, arc1[1]]; //top

    // console.log()
}
function drawArc() {
    //绘制圆
    context.beginPath();
    context.arc(arc1[0], arc1[1], r1 / 2, 0, 2 * Math.PI);
    context.strokeStyle = drawStyle;
    context.fillStyle = drawStyle;
    context.fill();

    context.beginPath();
    context.arc(arc2[0], arc2[1], r2 / 2, 0, 2 * Math.PI);
    context.strokeStyle = drawStyle;
    context.fill();
}

function drawBezier() {
    //绘制曲线
    context.beginPath();
    context.moveTo(arr1[0], arr1[1]);
    context.quadraticCurveTo(arr2[0], arr2[1], arr3[0], arr3[1]);
    // context.lineTo(arr4[0],arr4[1]);
    context.lineTo(arr6[0], arr6[1]);
    context.quadraticCurveTo(arr5[0], arr5[1], arr4[0], arr4[1]);

    context.lineTo(arr1[0], arr1[1]);
    // context.lineTo(arr6[0], arr6[1]);
    // context.lineTo(arr1[0], arr1[1]);

    context.strokeStyle = drawStyle;
    context.fillStyle = drawStyle;
    context.fill();
}

function renderText(text) {
    context.font = "12px";
    context.textAlign = "center";
    context.fillText(text, WIDTH / 2, HEIGHT / 2);
}

function draw() {
    // context.clearRect(0, 0, WIDTH, HEIGHT);
    clear();
    drawArc();
    drawBezier();
}

function clear() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
}

function loop(y) {

    console.log(y);
    arc1 = [arc1[0], arc1[1] - y];

    arr1 = [arc2[0] - r2 / 2, arc2[1]];
    arr3 = [arc1[0] - r1 / 2, arc1[1]];
    arr4 = [arc2[0] + r2 / 2, arc2[1]];
    arr5 = [WIDTH / 2, (arc2[1] - arc1[1]) / 2 + arc1[1]];
    arr6 = [arc1[0] + r1 / 2, arc1[1]];
    arr2 = arr5;
    draw();
}

function move(y) {
    if (y > 100 || y < 0) {
        return;
    }
    body.style.transform = "translate(0,-" + y + "px)";
}

document.addEventListener('touchstart', function (e) {
    // e.preventDefault();
    if (isLoad) {
        return;
    }
    y = e.pageY || e.touches[0].pageY;
    // console.log(y);
}, false);

document.addEventListener('touchmove', function (e) {
    // e.preventDefault();
    if (isLoad) {
        return;
    }
    y1 = e.pageY || e.touches[0].pageY;
    disY = y1 - y > 0 ? 1 : -1;
    y = y1;

    canvasTrm -= disY;

    // body.style.transform = "translate(0,-" + canvasTrm + "px)";
    move(canvasTrm);

    if (canvasTrm < 10) {
        //开启加载
        load();
        return;
    }

    if (arc1[1] <= topOffSet || arc1[1] > HEIGHT - bottomOffSet || canvasTrm > 70) {
        return;
    }
    r2 = r2 - disY / 5;
    r1 = r1 - disY / 8;
    loop(disY);
}, false);

document.addEventListener('touchend', function (e) {
    // body.style.transform = "translate(0,-" + HEIGHT + "px)";
    if (isLoad) {
        return;
    }
    move(HEIGHT);
    initData();
    draw();
});

exports.init = init;
exports.end = end;
//# sourceMappingURL=pullDownRefresh.js.map
