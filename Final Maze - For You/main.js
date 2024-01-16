// Get canvas and context
const cnv = document.getElementById("gameCanvas");
const ctx = cnv.getContext("2d");

// Fit the canvas to the window size
cnv.width = 1272;
cnv.height = 843;

let gdspd = [0.49, 0.64, 0.7, 0.87, 1.00, 1.21, 1.43]
let gdset = gdspd[3];
let shift = 0;
let use = 0;
let doorImg = document.createElement("img");
doorImg.src = "img/dark_oak_door_double.png";
let adjust = prompt(
  "How many Hz is this device using? (please be honest for this one question)"
);
alert("By the way, press T to toggle on and off FPS Quality Check-ins.");
if (adjust > 30) {
  use = 10;
} else if (adjust > 80) {
  use = 20;
} else if (adjust > 225) {
  use = 75;
} else {
  use = 150;
}

let b5R = 67;
let b5G = 20;
let b5B = 143;
let p5R = 255;
let p5G = 141;
let p5B = 12;
let w6R = 21;
let w6G = 123;
let w6B = 207;
let p6RGB = 255;
let e6R = 240;
let e6G = 105;
let e6B = 217;
let finstage = 0;

let yella_b5R = 188 / 0.5 / adjust;
let yella_b5G = 121 / 0.5 / adjust;
let yella_b5B = -131 / 0.5 / adjust;
let yella_p5R = -188 / 0.5 / adjust;
let yella_p5G = -121 / 0.5 / adjust;
let yella_p5B = 131 / 0.5 / adjust;
let yella_p6RGB = 255 / 0.55 / adjust;
let yella_w6R = [
  219 / 0.35 / adjust,
  -157 / 0.35 / adjust,
  -62 / 0.35 / adjust,
];
let yella_w6G = [-18 / 0.35 / adjust, -10 / 0.35 / adjust, 28 / 0.35 / adjust];
let yella_w6B = [10 / 0.35 / adjust, -199 / 0.35 / adjust, 189 / 0.35 / adjust];
let yella_e6R = [
  -157 / 0.35 / adjust,
  -62 / 0.35 / adjust,
  219 / 0.35 / adjust,
];
let yella_e6G = [-10 / 0.35 / adjust, 28 / 0.35 / adjust, -18 / 0.35 / adjust];
let yella_e6B = [-199 / 0.35 / adjust, 189 / 0.35 / adjust, 10 / 0.35 / adjust];

let previousT = "no";

let leftarrow_prst = false;
let rightarrow_prst = false;
let uparrow_prst = false;
let downarrow_prst = false;
let A_prst = false;
let D_prst = false;
let W_prst = false;
let S_prst = false;
let T_prst = false;
let R_prst = false;

let framup = 0;
let numbabwe = 0;

//level 0 learn in blank
//level 1 nothing new
//level 2 color change
//level 3 speed change
//level 4 size change & enemies moving
//level 5 bg color change & fake walls
//level 6 enemies sizing & trippy speed

//walls rgb(21, 123, 207)
//to rgb(240, 105, 217)
//to rgb(83, 95, 18)
//nmes a little behind (or ahead?)
let levelsetbgcolor = [
  "#ffffff",
  "#ffffff",
  "#ffff00",
  "#ff00bf",
  "#113746",
  "#43148f",
  "#000000",
  "#ffffff"
];
let levelsetplcolor = [
  "#000000",
  "#000000",
  "#ff0000",
  "#ff007f",
  "#282828",
  "#ff8d0c",
  "#ffffff",
  "#000000"
];
let levelsetwlcolor = [
  "#808080",
  "#808080",
  "#00bf00",
  "#200000",
  "#9c2600",
  "#5898c1",
  "#157bcf",
  "#808080"
];
let levelsetbdcolor = [
  "#ff0000",
  "#ff0000",
  "#6000bf",
  "#20ff7f",
  "#9c2600",
  "#480048",
  "#f069d9",
  "#ff0000"
];
let levelsetplspeed = [5, 5, 5, 12, 3, 4, 8, 5];
let levelsetplsize = [30, 30, 30, 30, 13, 42, 25, 30];
let levelsetplx = [40, 1202, 653, 72, 1259, 393, 24, 622];
let levelsetply = [40, 338, 438, 792, 20, 6, 712, 406];
let levelsetDRX = [1157, 500, 518, 701, 720, 774, 710, 2024];
let levelsetDRY = [726, 500, 726, 25, 67, 702, 490, 2024];
let level = 0;
let frames = 0;
let FPS = 0;
let sph;
let F3G = -1;
let degrees = Math.PI / 180;

let door = {
  x: levelsetDRX[level],
  y: levelsetDRY[level],
  w: 115,
  h: 117,
};
// walls n stuff
let walls = [];
walls.push([]);
walls.push([]);
walls.push([]);
walls.push([]);
walls.push([]);
walls.push([]);
walls.push([]);

walls[0].push(newRect(0, 150, 872, 70));
walls[0].push(newRect(1152, 0, 120, 120));
walls[0].push(newRect(675, 370, 597, 55));
walls[0].push(newRect(400, 370, 68, 473));
walls[0].push(newRect(842, 625, 68, 218));
walls[0].push(newRect(1031, 460, 241, 35));

walls[1].push(newRect(1154, 288, 118, 30));
walls[1].push(newRect(1154, 388, 118, 30));
walls[1].push(newRect(0, 822, 1272, 21));
walls[1].push(newRect(352, 432, 75, 390));
walls[1].push(newRect(672, 433, 60, 410));
walls[1].push(newRect(962, 218, 92, 625));
walls[1].push(newRect(1024, 93, 180, 155));
walls[1].push(newRect(894, 0, 9, 158));
walls[1].push(newRect(598, 158, 250, 60));
walls[1].push(newRect(493, 168, 22, 100));
walls[1].push(newRect(311, 0, 41, 323));
walls[1].push(newRect(157, 442, 30, 335));
walls[1].push(newRect(37, 442, 245, 30));

walls[2].push(newRect(633, 422, 6, 421));
walls[2].push(newRect(633, 0, 6, 337));
walls[2].push(newRect(0, 418, 426, 6));
walls[2].push(newRect(529, 418, 478, 6));
walls[2].push(newRect(1145, 418, 127, 6));
walls[2].push(newRect(528, 249, 6, 175));
walls[2].push(newRect(420, 334, 6, 87));
walls[2].push(newRect(420, 168, 6, 84));
walls[2].push(newRect(314, 249, 6, 88));
walls[2].push(newRect(314, 0, 6, 86));
walls[2].push(newRect(208, 80, 6, 91));
walls[2].push(newRect(102, 80, 6, 260));
walls[2].push(newRect(420, 80, 216, 6));
walls[2].push(newRect(102, 165, 218, 6));
walls[2].push(newRect(102, 334, 218, 6));
walls[2].push(newRect(208, 249, 326, 6));

walls[3].push(newRect(10, 757, 88, 23));
walls[3].push(newRect(2, 620, 92, 13));
walls[3].push(newRect(166, 674, 32, 169));
walls[3].push(newRect(202, 468, 20, 81));
walls[3].push(newRect(202, 448, 124, 20));
walls[3].push(newRect(640, 404, 500, 50));
walls[3].push(newRect(640, 524, 142, 50));
walls[3].push(newRect(824, 524, 50, 50));
walls[3].push(newRect(916, 524, 81, 50));
walls[3].push(newRect(1040, 524, 100, 50));
walls[3].push(newRect(640, 644, 112, 50));
walls[3].push(newRect(794, 644, 45, 50));
walls[3].push(newRect(881, 644, 116, 50));
walls[3].push(newRect(1040, 644, 100, 50));
walls[3].push(newRect(640, 764, 199, 50));
walls[3].push(newRect(881, 764, 116, 50));
walls[3].push(newRect(1040, 764, 100, 50));
walls[3].push(newRect(90, 157, 1182, 23));
walls[3].push(newRect(90, 157, 43, 220));

walls[4].push(newRect(842, 625, 68, 218));
walls[4].push(newRect(894, 0, 9, 158));
walls[4].push(newRect(493, 168, 22, 100));
walls[4].push(newRect(208, 249, 326, 6));
walls[4].push(newRect(314, 0, 6, 86));
walls[4].push(newRect(1145, 418, 127, 6));
walls[4].push(newRect(640, 524, 142, 50));
walls[4].push(newRect(916, 524, 81, 50));
walls[4].push(newRect(2, 620, 92, 13));
walls[4].push(newRect(166, 674, 32, 169));
walls[4].push(newRect(258, 370, 32, 169));
walls[4].push(newRect(25, 10, 148, 30));

walls[5].push(newRect(225, 370, 31, 98));
walls[5].push(newRect(100, 370, 123, 15));
walls[5].push(newRect(100, 453, 123, 15));
walls[5].push(newRect(370, 251, 60, 592));
walls[5].push(newRect(702, 691, 21, 152));
walls[5].push(newRect(702, 691, 430, 11));
walls[5].push(newRect(1102, 0, 30, 100));
walls[5].push(newRect(1092, 100, 50, 201));
walls[5].push(newRect(1102, 301, 30, 100));
walls[5].push(newRect(1102, 602, 30, 100));

walls[6].push(newRect(0, 697, 77, 8));
walls[6].push(newRect(77, 748, 140, 8));
walls[6].push(newRect(191, 639, 364, 20));
walls[6].push(newRect(369, 690, 70, 20));
walls[6].push(newRect(575, 690, 46, 20));
walls[6].push(newRect(621, 568, 30, 122));
walls[6].push(newRect(575, 568, 46, 20));
walls[6].push(newRect(555, 588, 20, 71));
walls[6].push(newRect(621, 690, 116, 20));
walls[6].push(newRect(737, 608, 30, 102));
walls[6].push(newRect(536, 753, 3, 48));
walls[6].push(newRect(452, 763, 84, 7));
walls[6].push(newRect(984, 726, 35, 117));
walls[6].push(newRect(989, 644, 98, 22));
walls[6].push(newRect(1062, 308, 25, 358));
walls[6].push(newRect(1087, 641, 107, 25));
walls[6].push(newRect(1177, 641, 15, 138));
walls[6].push(newRect(1153, 364, 41, 197));
walls[6].push(newRect(1153, 364, 119, 14));
walls[6].push(newRect(699, 295, 388, 13));
walls[6].push(newRect(763, 64, 509, 36));
walls[6].push(newRect(332, 138, 310, 152));
walls[6].push(newRect(283, 443, 25, 95));
walls[6].push(newRect(470, 443, 25, 95));
walls[6].push(newRect(579, 444, 55, 124));
walls[6].push(newRect(579, 444, 333, 33));

let dgrs = [];
dgrs.push([]);
dgrs.push([]);
dgrs.push([]);
dgrs.push([]);
dgrs.push([]);
dgrs.push([]);
dgrs.push([]);

dgrs[0].push(newRect(1152, 250, 120, 120));
dgrs[0].push(newRect(1031, 425, 241, 35));
dgrs[0].push(newRect(100, 480, 207, 300));

dgrs[1].push(newRect(903, 0, 46, 135));
dgrs[1].push(newRect(949, 363, 13, 95));
dgrs[1].push(newRect(848, 0, 46, 564));
dgrs[1].push(newRect(544, 307, 134, 105));
dgrs[1].push(newRect(404, 268, 140, 69));
dgrs[1].push(newRect(493, 68, 22, 100));
dgrs[1].push(newRect(515, 68, 225, 30));

dgrs[2].push(newRect(782, 438, 65, 65));
dgrs[2].push(newRect(709, 526, 65, 65));
dgrs[2].push(newRect(646, 721, 65, 65));
dgrs[2].push(newRect(900, 496, 65, 65));
dgrs[2].push(newRect(953, 428, 65, 65));
dgrs[2].push(newRect(830, 622, 65, 65));
dgrs[2].push(newRect(884, 757, 65, 65));
dgrs[2].push(newRect(1057, 738, 65, 65));
dgrs[2].push(newRect(1016, 547, 65, 65));
dgrs[2].push(newRect(1134, 636, 65, 65));
dgrs[2].push(newRect(1173, 459, 65, 65));
dgrs[2].push(newRect(640, 4, 65, 65));
dgrs[2].push(newRect(678, 146, 65, 65));
dgrs[2].push(newRect(681, 323, 65, 65));
dgrs[2].push(newRect(831, 353, 65, 65));
dgrs[2].push(newRect(875, 276, 65, 65));
dgrs[2].push(newRect(1127, 322, 30, 30));
dgrs[2].push(newRect(1018, 345, 30, 30));
dgrs[2].push(newRect(932, 374, 30, 30));
dgrs[2].push(newRect(963, 263, 30, 30));
dgrs[2].push(newRect(1134, 191, 30, 30));
dgrs[2].push(newRect(1220, 240, 30, 30));
dgrs[2].push(newRect(1194, 367, 30, 30));
dgrs[2].push(newRect(1060, 219, 30, 30));
dgrs[2].push(newRect(889, 192, 30, 30));
dgrs[2].push(newRect(839, 157, 30, 30));
dgrs[2].push(newRect(1177, 120, 30, 30));
dgrs[2].push(newRect(1078, 138, 30, 30));
dgrs[2].push(newRect(1235, 55, 30, 30));
dgrs[2].push(newRect(1202, 11, 30, 30));
dgrs[2].push(newRect(1018, 42, 30, 30));
dgrs[2].push(newRect(977, 123, 30, 30));
dgrs[2].push(newRect(912, 73, 30, 30));
dgrs[2].push(newRect(802, 25, 30, 30));
dgrs[2].push(newRect(688, 92, 30, 30));
dgrs[2].push(newRect(781, 266, 30, 30));
dgrs[2].push(newRect(688, 218, 30, 30));

dgrs[3].push(newRect(0, 549, 222, 71));
dgrs[3].push(newRect(396, 468, 162, 318));
dgrs[3].push(newRect(394, 834, 166, 9));
dgrs[3].push(newRect(561, 786, 1, 48));
dgrs[3].push(newRect(300, 376, 26, 72));
dgrs[3].push(newRect(300, 352, 327, 26));
dgrs[3].push(newRect(617, 352, 10, 148));
dgrs[3].push(newRect(610, 813, 30, 30));
dgrs[3].push(newRect(737, 574, 15, 70));
dgrs[3].push(newRect(824, 694, 15, 70));
dgrs[3].push(newRect(824, 574, 15, 70));
dgrs[3].push(newRect(737, 454, 15, 70));
dgrs[3].push(newRect(916, 454, 15, 70));
dgrs[3].push(newRect(916, 574, 15, 70));
dgrs[3].push(newRect(916, 694, 15, 70));
dgrs[3].push(newRect(1106, 813, 30, 30));
dgrs[3].push(newRect(1106, 813, 15, 30));
dgrs[3].push(newRect(1106, 694, 15, 70));
dgrs[3].push(newRect(1106, 574, 15, 70));

dgrs[4].push(newRect(848, 0, 46, 564));
dgrs[4].push(newRect(544, 307, 134, 105));
dgrs[4].push(newRect(404, 268, 140, 69));
dgrs[4].push(newRect(1031, 425, 241, 35));
dgrs[4].push(newRect(100, 480, 207, 300));
dgrs[4].push(newRect(1110, 353, 88, 88));
dgrs[4].push(newRect(345, 592, 204, 17));
dgrs[4].push(newRect(321, 361, 205, 112));
dgrs[4].push(newRect(534, 253, 508, 35));
dgrs[4].push(newRect(25, 71, 241, 21));
dgrs[4].push(newRect(211, 92, 39, 157));

dgrs[5].push(newRect(100, 100, 596, 54));
dgrs[5].push(newRect(684, 0, 12, 154));
dgrs[5].push(newRect(100, 100, 27, 280));
dgrs[5].push(newRect(100, 463, 27, 280));
dgrs[5].push(newRect(0, 0, 100, 8));
dgrs[5].push(newRect(0, 835, 100, 8));
dgrs[5].push(newRect(767, 66, 42, 542));
dgrs[5].push(newRect(767, 66, 148, 22));
dgrs[5].push(newRect(897, 0, 18, 88));

dgrs[6].push(newRect(77, 697, 8, 59));
dgrs[6].push(newRect(205, 659, 12, 89));
dgrs[6].push(newRect(368, 722, 21, 121));
dgrs[6].push(newRect(555, 639, 20, 20));
dgrs[6].push(newRect(555, 690, 20, 20));
dgrs[6].push(newRect(439, 690, 14, 20));
dgrs[6].push(newRect(555, 568, 20, 20));
dgrs[6].push(newRect(767, 645, 222, 25));
dgrs[6].push(newRect(676, 710, 16, 98));
dgrs[6].push(newRect(601, 763, 74, 4));
dgrs[6].push(newRect(1051, 702, 10, 30));
dgrs[6].push(newRect(1112, 718, 10, 30));
dgrs[6].push(newRect(1019, 835, 253, 8));
dgrs[6].push(newRect(1252, 728, 20, 45));
dgrs[6].push(newRect(1194, 649, 20, 45));
dgrs[6].push(newRect(1194, 378, 78, 183));
dgrs[6].push(newRect(676, 79, 23, 229));
dgrs[6].push(newRect(763, 0, 509, 64));
dgrs[6].push(newRect(1161, 100, 111, 135));
dgrs[6].push(newRect(989, 196, 98, 112));
dgrs[6].push(newRect(805, 100, 43, 131));
dgrs[6].push(newRect(100, 79, 576, 20));
dgrs[6].push(newRect(100, 79, 20, 48));

let decos = [];
decos.push([]);
decos.push([]);
decos.push([]);
decos.push([]);
decos.push([]);
decos.push([]);
decos.push([]);

decos[5].push(newRect(1092, 401, 50, 201));

decos[6].push(newRect(453, 690, 102, 20));
decos[6].push(newRect(0, 0, 763, 79));
decos[6].push(newRect(0, 0, 100, 123));

let stars = [];

let star_g_w = Math.round(Math.random() * 64 + 191);
for (let i = 0; i < Math.round(Math.random() * 50 + 50); i++) {
  star_g_w = Math.round(Math.random() * 191 + 64);
  stars.push(
    newCircle(
      Math.round(Math.random() * 1313 - 20),
      Math.round(Math.random() * 883 - 20),
      1,
      0,
      360 * degrees,
      `rgb(${star_g_w}, ${star_g_w}, ${star_g_w})`,
      Math.random() * 2 + 0.5
    )
  );
}

let mnmes = [];
mnmes.push([]);
mnmes.push([]);
mnmes.push([]);
mnmes.push([]);
mnmes.push([]);
mnmes.push([]);
mnmes.push([]);

mnmes[4].push(newRect(1045, 260, 100, 20)); // x 1045 - 1164
mnmes[4].push(newRect(916, 577, 22, 44)); // x 916 - 1250
mnmes[4].push(newRect(535, 0, 75, 30)); // y 0 - 219
mnmes[4].push(newRect(626, 219, 75, 30)); // y 0 - 219

mnmes[5].push(newRect(0, 800, 100, 43)); // y 0 - 800
mnmes[5].push(newRect(303, 607, 67, 12)); // x 127 - 307
mnmes[5].push(newRect(358, 251, 12, 107)); // x 127 - 358
mnmes[5].push(newRect(430, 251, 98, 100)); // y 251 - 591
mnmes[5].push(newRect(528, 591, 99, 100)); // y 251 - 591
mnmes[5].push(newRect(627, 251, 98, 100)); // y 251 - 591

mnmes[6].push(newRect(0, 772, 37, 17)); // x 0 - 178
mnmes[6].push(newRect(178, 804, 37, 17)); // x 0 - 178
mnmes[6].push(newRect(601, 823, 74, 20)); // y 767 - 823
mnmes[6].push(newRect(1087, 406, 43, 5)); // x 1087 - 1229
mnmes[6].push(newRect(1229, 468, 43, 5)); // x 1087 - 1229
mnmes[6].push(newRect(1087, 539, 43, 5)); // x 1087 - 1229
mnmes[6].push(newRect(704, 212, 22, 15)); // x 704 - 1136
mnmes[6].push(newRect(0, 321, 31, 104)); // x 0 - 1024
mnmes[6].push(newRect(0, 547, 52, 85)); // x 0 - 503
mnmes[6].push(newRect(1, 147, 94, 24)); // y 147 - 672

// let nme(yk) = (full move / seconds) / hz
let nme4_0_dir = 119 / 1 / adjust;
let nme4_1_dir = 334 / 1.5 / adjust;
let nme4_2_dir = 219 / 0.88 / adjust;
let nme4_3_dir = -219 / 0.88 / adjust;

let nme5_0_dir = -800 / 1.5 / adjust;
let nme5_1_dir = -176 / 0.75 / adjust;
let nme5_2_dir = -227 / 1.1 / adjust;
let nme5_3_dir = 340 / 1.23 / adjust;
let nme5_4_dir = -340 / 1.23 / adjust;
let nme5_5_dir = 340 / 1.23 / adjust;

let nme6_0_dir = 178 / 0.6 / adjust;
let nme6_1_dir = -178 / 0.6 / adjust;
let nme6_2_dir = -56 / 0.42 / adjust;
let nme6_3_dir = 142 / 0.5 / adjust;
let nme6_4_dir = -142 / 0.5 / adjust;
let nme6_5_dir = 142 / 0.5 / adjust;
let nme6_6_dir = 432 / 0.64 / adjust;
let nme6_7_dir = 1024 / 0.96 / adjust;
let nme6_8_dir = 503 / 0.54 / adjust;
let nme6_9_dir = 525 / 1.7 / adjust;

let szes = [];
szes.push(newRect(272, 716, 35, 25)); // w 35 - 151  h 25 - 80
szes.push(newRect(535, 729, 3, 5)); // w 3 - 262  h 5
szes.push(newRect(832, 671, 25, 165)); // w 25 - 265  h 25 - 165
szes.push(newRect(176, 173, 70, 140)); // w 25 - 70  h 10 - 140

let sze6_0_wh = [116 / 0.67 / adjust, 55 / 0.67 / adjust];
let sze6_1_wh = [262 / 0.42 / adjust, 0 / 1 / adjust];
let sze6_2_wh = [240 / 0.73 / adjust, -140 / 0.73 / adjust];
let sze6_3_wh = [-45 / 0.33 / adjust, -130 / 0.33 / adjust];

function newRect(x, y, w, h) {
  return {
    x: x,
    y: y,
    w: w,
    h: h,
  };
}

function newCircle(x, y, r, s, e, c, j) {
  return {
    x: x,
    y: y,
    r: r,
    s: s,
    e: e,
    c: c,
    j: j,
  };
}

let wall0 = walls[0].length;
let wall1 = walls[1].length;
let wall2 = walls[2].length;
let wall3 = walls[3].length;
let wall4 = walls[4].length;
let wall5 = walls[5].length;
let wall6 = walls[6].length;
let mnme4 = mnmes[4].length;
let mnme5 = mnmes[5].length;
let mnme6 = mnmes[6].length;
let syszee = szes.length;
let dgr0 = dgrs[0].length;
let dgr1 = dgrs[1].length;
let dgr2 = dgrs[2].length;
let dgr3 = dgrs[3].length;
let dgr4 = dgrs[4].length;
let dgr5 = dgrs[5].length;
let dgr6 = dgrs[6].length;

function reset() {
  player = {
    x: levelsetplx[level],
    y: levelsetply[level],
    w: levelsetplsize[level],
    h: levelsetplsize[level],
    speed: (levelsetplspeed[level] * 60) / adjust,
  };
  door = {
    x: levelsetDRX[level],
    y: levelsetDRY[level],
    w: 115,
    h: 117,
  };
}

let player = {
  x: levelsetplx[level],
  y: levelsetply[level],
  w: levelsetplsize[level],
  h: levelsetplsize[level],
  speed: (levelsetplspeed[level] * 60) / adjust,
};

function gameLoop() {
  // Clear canvas
  levelsetbgcolor[5] = `rgb(${b5R}, ${b5G}, ${b5B})`;
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.fillStyle = levelsetbgcolor[level];
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  document.body.style.backgroundColor = levelsetbgcolor[level];

  // Draw walls/circles
  if (level == 6) {
    drawStars();
    StarSwap();
  }
  moveNMEs();
  Changepc();
  Changebg();
  drawPlaya();
  drawwalls();
  drawHazards();
  drawFPS();
  if (R_prst) {
    reset();
  }

  frames = frames + 1;
  framup += 1;
  numbabwe = Math.round(framup / use - 0.5) * use;

  requestAnimationFrame(gameLoop);
}

function FPSworker() {
  setTimeout(SpeedChangeAHAHAH, Math.random() * 500 + 500)
  setTimeout(Call, 1000);
  setTimeout(FPSworker, 1000);
}

function drawPlaya() {
  // Playa vertical
  if (uparrow_prst || W_prst) {
    player.y -= player.speed * gdset;
    checkCol("up");
    checkDoor();
  }
  if (downarrow_prst || S_prst) {
    player.y += player.speed * gdset;
    checkCol("down");
    checkDoor();
  }

  // Playa horizontal
  if (rightarrow_prst || D_prst) {
    player.x += player.speed * gdset;
    checkCol("right");
    checkDoor();
  }
  if (leftarrow_prst || A_prst) {
    player.x -= player.speed * gdset;
    checkCol("left");
    checkDoor();
  }

  if (T_prst) {
    if (previousT == "no") {
      F3G *= -1;
    }
    previousT = "yes";
  } else {
    previousT = "no";
  }

  if (player.x < 0) {
    player.x = 0;
  }

  if (player.x > 1272 - player.w) {
    player.x = 1272 - player.w;
  }

  if (player.y < 0) {
    player.y = 0;
  }

  if (player.y > 843 - player.h) {
    player.y = 843 - player.h;
  }
  checkDie();
  levelsetplcolor[5] = `rgb(${p5R}, ${p5G}, ${p5B})`;
  levelsetplcolor[6] = `rgb(${p6RGB}, ${p6RGB}, ${p6RGB})`;
  ctx.fillStyle = levelsetplcolor[level];
  ctx.fillRect(player.x, player.y, player.w, player.h);
}

window.addEventListener("load", gameLoop);
window.addEventListener("load", FPSworker);

document.addEventListener("keydown", pressmehandle);

function pressmehandle(e) {
  if (e.code == "ArrowLeft") {
    leftarrow_prst = true;
  }
  if (e.code == "ArrowRight") {
    rightarrow_prst = true;
  }
  if (e.code == "ArrowUp") {
    uparrow_prst = true;
  }
  if (e.code == "ArrowDown") {
    downarrow_prst = true;
  }
  if (e.code == "KeyA") {
    A_prst = true;
  }
  if (e.code == "KeyD") {
    D_prst = true;
  }
  if (e.code == "KeyW") {
    W_prst = true;
  }
  if (e.code == "KeyS") {
    S_prst = true;
  }
  if (e.code == "KeyT") {
    T_prst = true;
  }
  if (e.code == "KeyR") {
    R_prst = true;
  }
}

document.addEventListener("keyup", leggomehandle);

function leggomehandle(e) {
  if (e.code == "ArrowLeft") {
    leftarrow_prst = false;
  }
  if (e.code == "ArrowRight") {
    rightarrow_prst = false;
  }
  if (e.code == "ArrowUp") {
    uparrow_prst = false;
  }
  if (e.code == "ArrowDown") {
    downarrow_prst = false;
  }
  if (e.code == "KeyA") {
    A_prst = false;
  }
  if (e.code == "KeyD") {
    D_prst = false;
  }
  if (e.code == "KeyW") {
    W_prst = false;
  }
  if (e.code == "KeyS") {
    S_prst = false;
  }
  if (e.code == "KeyT") {
    T_prst = false;
  }
  if (e.code == "KeyR") {
    R_prst = false;
  }
}