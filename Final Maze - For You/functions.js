function checkCol(dir) {
  let walln;
  if (level == 0) {
    walln = wall0;
  }
  if (level == 1) {
    walln = wall1;
  }
  if (level == 2) {
    walln = wall2;
  }
  if (level == 3) {
    walln = wall3;
  }
  if (level == 4) {
    walln = wall4;
  }
  if (level == 5) {
    walln = wall5;
  }
  if (level == 6) {
    walln = wall6;
  }
  for (let i = 0; i < walln; i++) {
    let plat = walls[level][i];
    if (rectCollide(player, plat)) {
      if (dir == "left") {
        player.x = plat.x + plat.w;
      } else if (dir == "right") {
        player.x = plat.x - player.w;
      } else if (dir == "down") {
        player.y = plat.y - player.h;
      } else if (dir == "up") {
        player.y = plat.y + plat.h;
      }
    }
  }
}

function Call() {
  FPS = Math.round((frames * 100) / 100);
  frames = 0;
}

function SpeedChangeAHAHAH() {
  if (level == 6) {
    gdset = gdspd[Math.round(Math.random() * 7 - 0.4999999)]
  } else {
    gdset = gdspd[4];
  }
}

function moveNMEs() {
  if (level == 4) {
    mnmes[4][0].x += nme4_0_dir;
    if (mnmes[4][0].x > 1164) {
      mnmes[4][0].x = 1164;
      nme4_0_dir *= -1;
    }
    if (mnmes[4][0].x < 1045) {
      mnmes[4][0].x = 1045;
      nme4_0_dir *= -1;
    }

    mnmes[4][1].x += nme4_1_dir;
    if (mnmes[4][1].x > 1250) {
      mnmes[4][1].x = 1250;
      nme4_1_dir *= -1;
    }
    if (mnmes[4][1].x < 916) {
      mnmes[4][1].x = 916;
      nme4_1_dir *= -1;
    }

    mnmes[4][2].y += nme4_2_dir;
    if (mnmes[4][2].y > 219) {
      mnmes[4][2].y = 219;
      nme4_2_dir *= -1;
    }
    if (mnmes[4][2].y < 0) {
      mnmes[4][2].y = 0;
      nme4_2_dir *= -1;
    }

    mnmes[4][3].y += nme4_3_dir;
    if (mnmes[4][3].y > 219) {
      mnmes[4][3].y = 219;
      nme4_3_dir *= -1;
    }
    if (mnmes[4][3].y < 0) {
      mnmes[4][3].y = 0;
      nme4_3_dir *= -1;
    }
  }

  if (level == 5) {
    mnmes[5][0].y += nme5_0_dir;
    if (mnmes[5][0].y > 800) {
      mnmes[5][0].y = 800;
      nme5_0_dir *= -1;
    }
    if (mnmes[5][0].y < 0) {
      mnmes[5][0].y = 0;
      nme5_0_dir *= -1;
    }

    mnmes[5][1].x += nme5_1_dir;
    if (mnmes[5][1].x > 303) {
      mnmes[5][1].x = 303;
      nme5_1_dir *= -1;
    }
    if (mnmes[5][1].x < 127) {
      mnmes[5][1].x = 127;
      nme5_1_dir *= -1;
    }

    mnmes[5][2].x += nme5_2_dir;
    if (mnmes[5][2].x > 358) {
      mnmes[5][2].x = 358;
      nme5_2_dir *= -1;
    }
    if (mnmes[5][2].x < 127) {
      mnmes[5][2].x = 127;
      nme5_2_dir *= -1;
    }

    mnmes[5][3].y += nme5_3_dir;
    if (mnmes[5][3].y > 591) {
      mnmes[5][3].y = 591;
      nme5_3_dir *= -1;
    }
    if (mnmes[5][3].y < 251) {
      mnmes[5][3].y = 251;
      nme5_3_dir *= -1;
    }

    mnmes[5][4].y += nme5_4_dir;
    if (mnmes[5][4].y > 591) {
      mnmes[5][4].y = 591;
      nme5_4_dir *= -1;
    }
    if (mnmes[5][4].y < 251) {
      mnmes[5][4].y = 251;
      nme5_4_dir *= -1;
    }

    mnmes[5][5].y += nme5_5_dir;
    if (mnmes[5][5].y > 591) {
      mnmes[5][5].y = 591;
      nme5_5_dir *= -1;
    }
    if (mnmes[5][5].y < 251) {
      mnmes[5][5].y = 251;
      nme5_5_dir *= -1;
    }
  }

  if (level == 6) {
    mnmes[6][0].x += nme6_0_dir * gdset;
    if (mnmes[6][0].x > 178) {
      mnmes[6][0].x = 178;
      nme6_0_dir *= -1;
    }
    if (mnmes[6][0].x < 0) {
      mnmes[6][0].x = 0;
      nme6_0_dir *= -1;
    }

    mnmes[6][1].x += nme6_1_dir * gdset;
    if (mnmes[6][1].x > 178) {
      mnmes[6][1].x = 178;
      nme6_1_dir *= -1;
    }
    if (mnmes[6][1].x < 0) {
      mnmes[6][1].x = 0;
      nme6_1_dir *= -1;
    }

    mnmes[6][2].y += nme6_2_dir * gdset;
    if (mnmes[6][2].y > 823) {
      mnmes[6][2].y = 823;
      nme6_2_dir *= -1;
    }
    if (mnmes[6][2].y < 767) {
      mnmes[6][2].y = 767;
      nme6_2_dir *= -1;
    }

    mnmes[6][3].x += nme6_3_dir * gdset;
    if (mnmes[6][3].x > 1229) {
      mnmes[6][3].x = 1229;
      nme6_3_dir *= -1;
    }
    if (mnmes[6][3].x < 1087) {
      mnmes[6][3].x = 1087;
      nme6_3_dir *= -1;
    }

    mnmes[6][4].x += nme6_4_dir * gdset;
    if (mnmes[6][4].x > 1229) {
      mnmes[6][4].x = 1229;
      nme6_4_dir *= -1;
    }
    if (mnmes[6][4].x < 1087) {
      mnmes[6][4].x = 1087;
      nme6_4_dir *= -1;
    }

    mnmes[6][5].x += nme6_5_dir * gdset;
    if (mnmes[6][5].x > 1229) {
      mnmes[6][5].x = 1229;
      nme6_5_dir *= -1;
    }
    if (mnmes[6][5].x < 1087) {
      mnmes[6][5].x = 1087;
      nme6_5_dir *= -1;
    }

    mnmes[6][6].x += nme6_6_dir * gdset;
    if (mnmes[6][6].x > 1136) {
      mnmes[6][6].x = 1136;
      nme6_6_dir *= -1;
    }
    if (mnmes[6][6].x < 704) {
      mnmes[6][6].x = 704;
      nme6_6_dir *= -1;
    }

    mnmes[6][7].x += nme6_7_dir * gdset;
    if (mnmes[6][7].x > 1024) {
      mnmes[6][7].x = 1024;
      nme6_7_dir *= -1;
    }
    if (mnmes[6][7].x < 0) {
      mnmes[6][7].x = 0;
      nme6_7_dir *= -1;
    }

    mnmes[6][8].x += nme6_8_dir * gdset;
    if (mnmes[6][8].x > 503) {
      mnmes[6][8].x = 503;
      nme6_8_dir *= -1;
    }
    if (mnmes[6][8].x < 0) {
      mnmes[6][8].x = 0;
      nme6_8_dir *= -1;
    }

    mnmes[6][9].y += nme6_9_dir * gdset;
    if (mnmes[6][9].y > 672) {
      mnmes[6][9].y = 672;
      nme6_9_dir *= -1;
    }
    if (mnmes[6][9].y < 147) {
      mnmes[6][9].y = 147;
      nme6_9_dir *= -1;
    }

    szes[0].x -= sze6_0_wh[0] / 2 * gdset;
    szes[0].w += sze6_0_wh[0] * gdset;
    szes[0].y -= sze6_0_wh[1] / 2 * gdset;
    szes[0].h += sze6_0_wh[1] * gdset;
    if ((szes[0].w > 151) & (szes[0].h > 80)) {
      szes[0].w = 151;
      szes[0].h = 80;
      sze6_0_wh[0] *= -1;
      sze6_0_wh[1] *= -1;
    }
    if ((szes[0].w < 35) & (szes[0].h < 25)) {
      szes[0].w = 35;
      szes[0].h = 25;
      sze6_0_wh[0] *= -1;
      sze6_0_wh[1] *= -1;
    }

    szes[1].x -= sze6_1_wh[0] / 2 * gdset;
    szes[1].w += sze6_1_wh[0] * gdset;
    szes[1].y -= sze6_1_wh[1] / 2 * gdset;
    szes[1].h += sze6_1_wh[1] * gdset;
    if ((szes[1].w > 262) & (szes[1].h == 5)) {
      szes[1].w = 262;
      szes[1].h = 5;
      sze6_1_wh[0] *= -1;
      sze6_1_wh[1] *= -1;
    }
    if ((szes[1].w < 3) & (szes[1].h == 5)) {
      szes[1].w = 3;
      szes[1].h = 5;
      sze6_1_wh[0] *= -1;
      sze6_1_wh[1] *= -1;
    }

    szes[2].x -= sze6_2_wh[0] / 2 * gdset;
    szes[2].w += sze6_2_wh[0] * gdset;
    szes[2].y -= sze6_2_wh[1] / 2 * gdset;
    szes[2].h += sze6_2_wh[1] * gdset;
    if ((szes[2].w > 265) & (szes[2].h < 25)) {
      szes[2].w = 265;
      szes[2].h = 25;
      sze6_2_wh[0] *= -1;
      sze6_2_wh[1] *= -1;
    }
    if ((szes[2].w < 25) & (szes[2].h > 165)) {
      szes[2].w = 25;
      szes[2].h = 165;
      sze6_2_wh[0] *= -1;
      sze6_2_wh[1] *= -1;
    }

    szes[3].x -= sze6_3_wh[0] / 2 * gdset;
    szes[3].w += sze6_3_wh[0] * gdset;
    szes[3].y -= sze6_3_wh[1] / 2 * gdset;
    szes[3].h += sze6_3_wh[1] * gdset;
    if ((szes[3].w > 70) & (szes[3].h > 140)) {
      szes[3].w = 70;
      szes[3].h = 140;
      sze6_3_wh[0] *= -1;
      sze6_3_wh[1] *= -1;
    }
    if ((szes[3].w < 25) & (szes[3].h < 10)) {
      szes[3].w = 25;
      szes[3].h = 10;
      sze6_3_wh[0] *= -1;
      sze6_3_wh[1] *= -1;
    }
  }
}

function Changepc() {
  if (level == 6) {
    p6RGB -= yella_p6RGB;
    if (p6RGB < 0) {
      p6RGB = 0;
      yella_p6RGB *= -1;
    }
    if (p6RGB > 255) {
      p6RGB = 255;
      yella_p6RGB *= -1;
    }
  }
}

function Changebg() {
  if (level == 5) {
    b5R += yella_b5R;
    b5G += yella_b5G;
    b5B += yella_b5B;
    if ((b5R > 255) & (b5G > 141) & (b5B < 12)) {
      b5R = 255;
      b5G = 141;
      b5B = 12;
      yella_b5R *= -1;
      yella_b5G *= -1;
      yella_b5B *= -1;
    }
    if ((b5R < 67) & (b5G < 20) & (b5B > 143)) {
      b5R = 67;
      b5G = 20;
      b5B = 143;
      yella_b5R *= -1;
      yella_b5G *= -1;
      yella_b5B *= -1;
    }

    p5R += yella_p5R;
    p5G += yella_p5G;
    p5B += yella_p5B;
    if ((p5R > 255) & (p5G > 141) & (p5B < 12)) {
      p5R = 255;
      p5G = 141;
      p5B = 12;
      yella_p5R *= -1;
      yella_p5G *= -1;
      yella_p5B *= -1;
    }
    if ((p5R < 67) & (p5G < 20) & (p5B > 143)) {
      p5R = 67;
      p5G = 20;
      p5B = 143;
      yella_p5R *= -1;
      yella_p5G *= -1;
      yella_p5B *= -1;
    }
  }

  if (level == 6) {
    w6R += yella_w6R[finstage] * gdset;
    w6G += yella_w6G[finstage] * gdset;
    w6B += yella_w6B[finstage] * gdset;
    e6R += yella_e6R[finstage] * gdset;
    e6G += yella_e6G[finstage] * gdset;
    e6B += yella_e6B[finstage] * gdset;
    //(240, 105, 217)
    if (finstage == 0) {
      shift = 0;
      if (
        w6R > 240 &&
        w6G < 105 &&
        w6B > 217 &&
        e6R < 83 &&
        e6G < 95 &&
        e6B < 1860
      ) {
        w6R = 240;
        w6G = 105;
        w6B = 217;
        e6R = 83;
        e6G = 95;
        e6B = 18;
        finstage = 1;
      }
    }
    if (finstage == 1) {
      if (
        w6R < 83 &&
        w6G < 95 &&
        w6B < 18 &&
        e6R < 21 &&
        e6G > 123 &&
        e6B > 207
      ) {
        w6R = 83;
        w6G = 95;
        w6B = 18;
        e6R = 21;
        e6G = 123;
        e6B = 207;
        finstage = 2;
      }
    }
    if (finstage == 2) {
      if (
        w6R < 21 &&
        w6G > 123 &&
        w6B > 207 &&
        e6R > 240 &&
        e6G < 105 &&
        e6B > 217
      ) {
        w6R = 21;
        w6G = 123;
        w6B = 207;
        e6R = 240;
        e6G = 105;
        e6B = 217;
        shift = 1;
      }
    }
    if (shift == 1) {
      finstage = 0;
    }
  }
}

//walls rgb(21, 123, 207)
//to rgb(240, 105, 217)
//to rgb(83, 95, 18)
//nmes a little behind (or ahead?)

// 0-1 = HELLO!?!? (A brick)
// 2-15 = A LITERAL SLIDESHOW (ChromeBook)
// 16-24 = AHH! MY EYES! ("DeFeCtIvE 2007 hP lApToP")
// 25-35 = Very choppy (Ancient one-game machines)
// 36-50 = A little ruff (iPhone)
// 51-79 = It's aight (Average Computer Laptop)
// 80-120 = Pretty smooth (Nintendo Switch)
// 121-160 = Smooth, like, butta! (High-powered gaming computer)
// 161-269 = Seriously super-smooooth (My MSI E-Sports Gaming Monitor)
// 270+ = SEXY SMOOTHNESS (Best machine ever!)

function drawFPS() {
  ctx.font = "30px Consolas";
  levelsetbgcolor[5] = `rgb(${b5R}, ${b5G}, ${b5B})`;
  ctx.fillStyle = levelsetbgcolor[level];
  ctx.fillText("FPS: " + FPS, 25, 35);
  if (F3G == 1) {
    ctx.font = "17px Consolas";
    ctx.fillText("Quality: " + checkSMOOTHNEZ(FPS), 25, 65);
    ctx.fillText("Compare: " + checkcomp(FPS), 25, 86);
  }
}

function checkSMOOTHNEZ(Frammess) {
  if (Frammess <= 1) {
    return "HELLO!?!?";
  } else if (Frammess <= 15) {
    return "A LITERAL SLIDESHOW";
  } else if (Frammess <= 24) {
    return "AHH! MY EYES!";
  } else if (Frammess <= 35) {
    return "Very choppy";
  } else if (Frammess <= 50) {
    return "A little ruff";
  } else if (Frammess <= 79) {
    return "It's aight";
  } else if (Frammess <= 120) {
    return "Pretty smooth";
  } else if (Frammess <= 160) {
    return "Smooth, like, butta!";
  } else if (Frammess <= 269) {
    return "Seriously, super-smooooth";
  } else {
    return "SEXY SMOOTHNESS";
  }
}

function checkcomp(Frammess) {
  if (Frammess <= 1) {
    return "A brick";
  } else if (Frammess <= 15) {
    return "ChromeBook";
  } else if (Frammess <= 24) {
    return "DeFeCtIvE 2007 hP lApToP";
  } else if (Frammess <= 35) {
    return "Ancient one-game machines";
  } else if (Frammess <= 50) {
    return "iPhone";
  } else if (Frammess <= 79) {
    return "Average Computer Laptop";
  } else if (Frammess <= 120) {
    return "Nintendo Switch";
  } else if (Frammess <= 160) {
    return "High-powered gaming computer";
  } else if (Frammess <= 269) {
    return "My MSI E-Sports Gaming Monitor";
  } else {
    return "Best machine ever!";
  }
}

function checkDie() {
  let dgrn;
  let mnmen = 0;
  let sizerz = 0;
  if (level == 0) {
    dgrn = dgr0;
  }
  if (level == 1) {
    dgrn = dgr1;
  }
  if (level == 2) {
    dgrn = dgr2;
  }
  if (level == 3) {
    dgrn = dgr3;
  }
  if (level == 4) {
    dgrn = dgr4;
    mnmen = mnme4;
  }
  if (level == 5) {
    dgrn = dgr5;
    mnmen = mnme5;
  }
  if (level == 6) {
    dgrn = dgr6;
    mnmen = mnme6;
    sizerz = syszee;
  }
  for (let i = 0; i < dgrn; i++) {
    let rh = dgrs[level][i];
    if (rectCollide(player, rh)) {
      reset();
    }
  }
  for (let i = 0; i < mnmen; i++) {
    let tj = mnmes[level][i];
    if (rectCollide(player, tj)) {
      reset();
    }
  }
  for (let i = 0; i < sizerz; i++) {
    let vl = szes[i];
    if (rectCollide(player, vl)) {
      reset();
    }
  }
}

function checkDoor() {
  if (rectCollide(player, door)) {
    level += 1;
    if (level == 7) {
      alert("HOLY SHIT NO WAY! YOU WON!");
    }
    reset();
  }
}

function drawwalls() {
  let walln;
  let decon = 0;
  if (level == 0) {
    walln = wall0;
  }
  if (level == 1) {
    walln = wall1;
  }
  if (level == 2) {
    walln = wall2;
  }
  if (level == 3) {
    walln = wall3;
  }
  if (level == 4) {
    walln = wall4;
  }
  if (level == 5) {
    walln = wall5;
    decon = 1;
  }
  if (level == 6) {
    walln = wall6;
    decon = 3;
  }
  levelsetwlcolor[6] = `rgb(${w6R}, ${w6G}, ${w6B})`;
  ctx.fillStyle = levelsetwlcolor[level];
  if (FPS < 10) {
    sph = 100;
  } else if (FPS < 100) {
    sph = 116;
  } else if (FPS < 1000) {
    sph = 132;
  } else {
    sph = 148;
  }
  ctx.fillRect(25, 10, sph, 30);
  if (F3G == 1) {
    ctx.fillRect(25, 50, 332, 21);
    ctx.fillRect(25, 71, 392, 21);
  }
  for (let i = 0; i < walln; i++) {
    let wall = walls[level][i];
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
  }
  for (let i = 0; i < decon; i++) {
    let dec = decos[level][i];
    ctx.fillRect(dec.x, dec.y, dec.w, dec.h);
  }
  ctx.drawImage(doorImg, levelsetDRX[level], levelsetDRY[level]);
}

function drawStars() {
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, star.s, star.e);
    ctx.lineWidth = star.j;
    ctx.strokeStyle = star.c;
    ctx.stroke();
  }
}

function StarSwap() {
  if (framup - numbabwe == Math.round(use / 2)) {
    stars.splice(0, 1);
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
}

function drawHazards() {
  let dgrn;
  let mnmen = 0;
  let sizerz = 0;
  if (level == 0) {
    dgrn = dgr0;
  }
  if (level == 1) {
    dgrn = dgr1;
  }
  if (level == 2) {
    dgrn = dgr2;
  }
  if (level == 3) {
    dgrn = dgr3;
  }
  if (level == 4) {
    dgrn = dgr4;
    mnmen = mnme4;
  }
  if (level == 5) {
    dgrn = dgr5;
    mnmen = mnme5;
  }
  if (level == 6) {
    dgrn = dgr6;
    mnmen = mnme6;
    sizerz = syszee;
  }
  levelsetbdcolor[6] = `rgb(${e6R}, ${e6G}, ${e6B})`;
  ctx.fillStyle = levelsetbdcolor[level];
  for (let i = 0; i < dgrn; i++) {
    let rh = dgrs[level][i];
    ctx.fillRect(rh.x, rh.y, rh.w, rh.h);
  }
  ctx.fillStyle = levelsetbdcolor[level];
  for (let i = 0; i < mnmen; i++) {
    let tj = mnmes[level][i];
    ctx.fillRect(tj.x, tj.y, tj.w, tj.h);
  }
  ctx.fillStyle = levelsetbdcolor[level];
  for (let i = 0; i < sizerz; i++) {
    let vl = szes[i];
    ctx.fillRect(vl.x, vl.y, vl.w, vl.h);
  }
}

function rectCollide(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.h > rect2.y
  );
}