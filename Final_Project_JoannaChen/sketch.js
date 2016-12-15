var shed = [];
var fire = [];
var smoking = [];
var elephant;
var elephant2;
var tradeMap;
var back;
var lastDays;
var value;
var lato;
var hatchet;
var gun;
var goggles;
var gps;
var marker;
var marc;
//var track;
var roar;
var pile;
var crackling;
var fam;
var prelude;
var flag;
var x1, x2, x3, y1, y2, y3;
var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
var s;
var ypile;
var xpos, ypos;
var ax, ay, bx, by, cx, cy, dx, dy;
var fx;
var truck;
var truckX;

function preload() {
  elephant = loadImage("data/elephant.png");
  elephant2 = loadImage("data/elephant2.png");
  tradeMap = loadImage("data/map3.png");
  back = loadImage("data/back.png");
  lato = loadFont("data/Lato.ttf");
  marker = loadFont("data/PermanentMarker.ttf");
  marc = loadFont("data/MarcellusSC.ttf");
  //track = loadSound("data/time.mp3");
  roar = loadSound("data/sound.mp3");
  //loadGun = loadSound("data/gun.m4a");
  crackling = loadSound("data/fire.m4a");
  fam = loadImage("data/fam.png");
  prelude = loadImage("data/home.png");
  pile = loadImage("data/pile.png");
  gun = loadImage("data/ak47.png");
  hatchet = loadImage("data/hatchet.png");
  goggles = loadImage("data/goggles.png");
  gps = loadImage("data/gps.png");
  truck = loadImage("data/truck.png");

}

function setup() {
  createCanvas(600, 600);
  //track.play();
  //track.loop();
  //in kenya, there was a burning of 105 tons of ivory taken from poaches
  crackling.loop();
  x1 = 100;
  y1 = 200;
  x2 = 500;
  y2 = 200;
  x3 = 300;
  y3 = 500;
  a = 15;
  b = 15;
  c = 15;
  d = 15;
  e = 15;
  f = 15;
  g = 15;
  h = 15;
  i = 15;
  j = 15;
  k = 15;
  l = 15;
  m = 15;
  n = 15;
  o = 15;
  p = 15;
  //lastDays = createVideo("data/lastdays.mp4");
  flag = 0;
  s = 0;
  ypile = 175;
  xpos = 570;
  ypos = 397;
  ax = 250;
  ay = 250;
  bx = 480;
  by = 388;
  cx = 200;
  cy = 200;
  dx = 603;
  dy = 181;
  fx = 700;
  truckX = -385;
}

function draw() {
  //before main screen
  if (frameCount < 300) {
    tearShed();
    scale(.7);
    image(prelude, 25, 475);
  }
  if (frameCount > 300 || value === 0) { //if the frameCount is greater than 300 or user clicks back arrow
    //main screen after tearshed
    background(227 - s, 73 - s, 27 - s); //resembles fire
    fireAshes();
    //scale(.7);
    image(pile, 15, ypile, xpos, ypos);
    burning();
    scale(.7);
    image(elephant, x1, y1); //1
    image(elephant, x2, y2); //2
    image(elephant, x3, y3); //3
    s = random(0, 100);
    //if mouse is over elephant, then the elephant will vibrate
    if ((mouseX > 89) && (mouseX < 233) && (mouseY > 142) && (mouseY < 247)) { //1
      if (frameCount % 2 === 0) {
        x1 += 3;
        //burning ivory
        ypos -= .2;
        ypile += .2;
      } else if (frameCount % 2 == 1) {
        x1 -= 3;
        //burning ivory
        ypos -= .2;
        ypile += .2;
      }
    } else if ((mouseX > 370) && (mouseX < 506) && (mouseY > 142) && (mouseY < 247)) { //2
      if (frameCount % 2 === 0) {
        x2 += 3;
        //burning ivory
        ypos -= .2;
        ypile += .2;
      } else if (frameCount % 2 == 1) {
        x2 -= 3;
        //burning ivory
        ypos -= .2;
        ypile += .2;
      }
    } else if ((mouseX > 232) && (mouseX < 364) && (mouseY > 358) && (457)) { //3
      if (frameCount % 2 === 0) {
        x3 += 3;
        //burning ivory
        ypos -= .2;
        ypile += .2;
      } else if (frameCount % 2 == 1) {
        x3 -= 3;
        //burning ivory
        ypos -= .2;
        ypile += .2;
      }
    }
    if (value == 1) {
      crackling.pause();
      background(200);
      textSize(73);
      textFont(marker);
      stroke(0);
      strokeWeight(0);
      fill(0);
      text("HOW POACHERS KILL", 24, 110);
      image(goggles, 50, 150, ax, ay);
      image(gun, 200, 650, dx, dy);
      image(hatchet, 350, 200, bx, by);
      image(gps, 150, 450, cx, cy);
      if ((mouseX > 36) && (mouseX < 210) && (mouseY > 125) && (mouseY < 254)) { //goggles
        ax = 275;
        ay = 275;
        textSize(35);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("Night Vision", 300, 200);
      } else if ((mouseX > 249) && (mouseX < 578) && (mouseY > 144) && (mouseY < 410)) { //hatchet
        bx = 505;
        by = 413;
        textSize(35);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("Hatchet", 600, 300);
      } else if ((mouseX > 114) && (mouseX < 230) && (mouseY > 321) && (mouseY < 445)) { //gps
        cx = 225;
        cy = 225;
        textSize(35);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("GPS", 365, 500);
      } else if ((mouseX > 145) && (mouseX < 552) && (mouseY > 466) && (mouseY < 582)) { //gun
        dx = 628;
        dy = 206;
        textSize(35);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("AK-47", 570, 775);
      } else {
        ax = 250;
        ay = 250;
        bx = 480;
        by = 388;
        cx = 200;
        cy = 200;
        dx = 603;
        dy = 181;
      }
      scale(.19);
      image(back, 75, 4000);
      /*
      if (value == 1 && flag == 1) { //video page
        createCanvas(0, 0);
        scale(.8);
        image(back, 0, 0);
        //track.pause();
        crackling.stop();
        lastDays = createVideo("data/lastdays.mp4");
        lastDays.size(600, 400);
        lastDays.play();
        flag = 0;
        */
    } else if (value == 2) { //map page
      crackling.pause();
      background(200);
      textSize(68);
      textFont(marker);
      stroke(0);
      strokeWeight(0);
      fill(0);
      text("TOP 10 IVORY MARKETS", 20, 110);
      scale(1.1);
      image(tradeMap, 0, 150);
      fill(197, 27, 23);
      stroke(197, 27, 23);
      strokeWeight(1);
      ellipse(175, 250, 10, 10); //usa
      ellipse(627, 280, 10, 10); //china/hong kong
      ellipse(600, 307, 10, 10); //thailand
      ellipse(442, 283, 10, 10); //egypt
      ellipse(399, 227, 10, 10); //germany
      ellipse(390, 328, 10, 10); //nigeria
      ellipse(440, 400, 10, 10); //zimbabwe
      ellipse(442, 310, 10, 10); //sudan
      ellipse(462, 326, 10, 10); //ethiopia
      ellipse(664, 255, 10, 10); //japan
      if ((mouseX > 131) && (mouseX < 139) && (mouseY > 189) && (mouseY < 197)) { //usa
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(180, 215, 53, 30);
        fill(0);
        text("2. USA", 185, 237);
      } else if ((mouseX > 479) && (mouseX < 488) && (mouseY > 213) && (mouseY < 221)) { //china/hong kong
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(475, 253, 145, 30);
        fill(0);
        text("1. China/Hong Kong", 478, 274);
      } else if ((mouseX > 457) && (mouseX < 467) && (mouseY > 234) && (mouseY < 242)) { //thailand
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(507, 306, 86, 30);
        fill(0);
        text("3. Thailand", 512, 328);
      } else if ((mouseX > 337) && (mouseX < 345) && (mouseY > 216) && (mouseY < 223)) { //egypt
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(367, 250, 70, 30);
        fill(0);
        text("4. Egypt", 372, 270);
      } else if ((mouseX > 303) && (mouseX < 311) && (mouseY > 172) && (mouseY < 179)) { //germany
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(405, 195, 90, 30);
        fill(0);
        text("5. Germany", 410, 215);
      } else if ((mouseX > 296) && (mouseX < 304) && (mouseY > 250) && (mouseY < 258)) { //nigeria
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(395, 294, 78, 30);
        fill(0);
        text("6. Nigeria", 400, 315);
      } else if ((mouseX > 335) && (mouseX < 343) && (mouseY > 305) && (mouseY < 314)) { //zimbabwe
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(446, 400, 89, 30);
        fill(0);
        text("7. Zimbabwe", 450, 420);
      } else if ((mouseX > 336) && (mouseX < 345) && (mouseY > 236) && (mouseY < 244)) { //sudan
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(449, 280, 70, 30);
        fill(0);
        text("8. Sudan", 455, 300);
      } else if ((mouseX > 351) && (mouseX < 360) && (mouseY > 245) && (mouseY < 256)) { //ethiopia
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(467, 294, 85, 30);
        fill(0);
        text("9. Ethiopia", 473, 314);
      } else if ((mouseX > 507) && (mouseX < 516) && (mouseY > 194) && (mouseY < 202)) { //japan
        textSize(15);
        textFont(marc);
        fill(255);
        stroke(255);
        rect(670, 220, 75, 30);
        fill(0);
        text("10. Japan", 677, 241);
      }
      //truck carrying ivory
      image(truck, truckX, 550, 384, 114);
      if (truckX < 880) {
        truckX +=2;
      } else {
        truckX = -385;
      }
      scale(.17);
      image(back, 75, 4098);
    } else if (value == 3) { //timeline page
      background(200);
      crackling.pause();
      stroke(0);
      strokeWeight(2);
      line(50, 400, 800, 400); //timeline
      fill(178, 31, 26, 200);
      ellipse(50, 400, a, a); //1500s
      ellipse(100, 400, b, b); //1800s
      ellipse(150, 400, c, c); //1913
      ellipse(200, 400, d, d); //1950s
      ellipse(250, 400, e, e); //1973
      ellipse(300, 400, f, f); //1977
      ellipse(350, 400, g, g); //1978
      ellipse(400, 400, h, h); //1979
      ellipse(450, 400, i, i); //1989
      ellipse(500, 400, j, j); //1997
      ellipse(550, 400, k, k); //2002
      ellipse(600, 400, l, l); //2007
      ellipse(650, 400, m, m); //2011
      ellipse(700, 400, n, n); //2012
      ellipse(750, 400, o, o); //2013
      ellipse(800, 400, p, p); //2016
      if ((mouseX > 29) && (mouseX < 41) && (mouseY > 276) && (mouseY < 288)) { //1500s
        a = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("1500s: Estimates put the number of elephants on the African continent around 26 million \nwhen Europeans first started exploring.", 25, 50);
      } else if ((mouseX > 64) && (mouseX < 77) && (mouseY > 276) && (mouseY < 288)) { //1800s
        b = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("1800s: The mass production of combs, piano keys, brush handles and pool balls fuels an ivory \nfrenzy in Europe.", 25, 50);
      } else if ((mouseX > 99) && (mouseX < 111) && (mouseY > 276) && (mouseY < 288)) { //1913
        c = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("The U.S. is consuming two hundred tons of ivory per year. The African elephant population \nhas dropped to an estimated 10 million.", 25, 50);
      } else if ((mouseX > 134) && (mouseX < 146) && (mouseY > 276) && (mouseY < 288)) { //1950s
        d = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("1950s: Elephant slaughter begins to drastically increase with estimates that 250 elephants \nare killed every day.", 25, 50);
      } else if ((mouseX > 170) && (mouseX < 180) && (mouseY > 276) && (mouseY < 288)) { //1973
        e = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("1973: The Convention on International Trade in Endangered Species of Wild Fauna and \nFlora (CITES) is agreed to on March 3, 1973.", 25, 50);
        text("The Endangered Species Act is signed into law on December 28, 1973, becoming \nimmediately effective.", 25, 115);
      } else if ((mouseX > 205) && (mouseX < 215) && (mouseY > 276) && (mouseY < 288)) { //1977
        f = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("1977: The African elephant is listed on CITES. International trade for commercial purposes \ncontinues; the international African ivory trade is regulated by CITES.", 25, 50);
      } else if ((mouseX > 240) && (mouseX < 251) && (mouseY > 276) && (mouseY < 288)) { //1978
        g = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("1978: The African elephant is listed as threatened under the Endangered Species Act. \nA “special rule” allows for the commercial ivory trade to continue, including for the import \nand sale of African elephant ivory.", 25, 50);
      } else if ((mouseX > 275) && (mouseX < 286) && (mouseY > 276) && (mouseY < 288)) { //1979
        h = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("1979: Elephant population is reported at 1.3 million according to the results of the first \nPan-Africa elephant survey led by Dr. Iain Douglas-Hamilton.", 25, 50);
      } else if ((mouseX > 309) && (mouseX < 321) && (mouseY > 276) && (mouseY < 288)) { //1989
        i = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("1989: CITES agrees to list the African elephant on Appendix I, as a result a ban on the \ninternational sale of ivory goes into effect in early 1990.", 25, 50);
        text("Only 600,000 elephants remain. The African Elephant Conservation Act is passed, \nbanning the import of African elephant ivory into the U.S.", 25, 115);
      } else if ((mouseX > 345) && (mouseX < 355) && (mouseY > 276) && (mouseY < 288)) { //1997
        j = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("1997: Botswana, Namibia and Zimbabwe submit proposals downlist their populations \nto Appendix II and to sell their ivory stockpiles. CITES approves the sales based on the \npositive status of these countries’ national herds.  The first “one-off sale” occurs in 1999 \nto a single CITES-approved buyer, Japan.", 25, 50);
      } else if ((mouseX > 378) && (mouseX < 391) && (mouseY > 276) && (mouseY < 288)) { //2002
        k = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("2002: South Africa submits a proposal to downlist their populations to Appendix II. \nSouth Africa plus Botswana, Namibia and Zimbabwe seek another “one-off sale”. \nThis second one-off sale occurs in 2008 to two CITES-approved buyers, Japan and China. \nConservationists fear that opening up a legal ivory market in China will lead to increased \npoaching.", 25, 50);
      } else if ((mouseX > 415) && (mouseX < 425) && (mouseY > 276) && (mouseY < 288)) { //2007
        l = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("2007: The African Elephant Coalition (AEC) countries are successful in passing a \nCITES-instituted a 9-year moratorium on new ivory stockpile sale proposals.", 25, 50);
      } else if ((mouseX > 449) && (mouseX < 460) && (mouseY > 276) && (mouseY < 288)) { //2011
        m = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("2011: Numbers of poached elephants and large-scale ivory seizures are so high that it is \nlabeled annus horibilis for the species.", 25, 50);
      } else if ((mouseX > 484) && (mouseX < 497) && (mouseY > 276) && (mouseY < 288)) { //2012
        n = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("2012: Sudanese Janjaweed poachers travel across the Sahara desert to massacre several \nhundreds of elephants in the span of a few days in Bouba Ndjida National Park, Cameroon -- \nthe scale of the killing is labeled as unprecendented.", 25, 50);
        text("Secretary of State Hillary Clinton makes a Call to Action to world leaders to stop the epic \nslaughter of Africa’s elephants.", 25, 140);
        text("Growth of a consumer class in China increases demand for ivory. The price reaches $1,000 \nper pound in Beijing; low wages in Africa drive poachers to increasing harvesting. CITES \nrecognizes that elephant poaching has again reached “unsustainable level.”", 25, 200);
      } else if ((mouseX > 520) && (mouseX < 531) && (mouseY > 276) && (mouseY < 288)) { //2013
        o = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("2013: U.S. President Barack Obama passes Executive Order combating Wildlife Trafficking \nto attack the issue through a whole government approach.", 25, 50);
      } else if ((mouseX > 555) && (mouseX < 566) && (mouseY > 276) && (mouseY < 288)) { //2016
        p = 30;
        textSize(20);
        textFont(lato);
        stroke(0);
        strokeWeight(1);
        fill(0);
        text("2016: Great Elephant Census results are announced, elephant populations have dropped \n30% in surveyed areas with comparable data.", 25, 50);
        text("CITES passes resolution calling for all countries to close domestic ivory markets and votes \ndown proposals by Namibia and Zimbabwe to open legal ivory trade from their countries. \nCITES rejects proposal for elephants in Botswana, Namibia, South Africa and Zimbabwe to \nbe uplisted to Appendix I.", 25, 120);
        text("One elephant is killed every fifteen minutes, resulting in 33,000 elephant deaths a year.", 25, 240);
      } else {
        a = 15;
        b = 15;
        c = 15;
        d = 15;
        e = 15;
        f = 15;
        g = 15;
        h = 15;
        i = 15;
        j = 15;
        k = 15;
        l = 15;
        m = 15;
        n = 15;
        o = 15;
        p = 15;
      }
      scale(.19);
      image(back, 74, 4000); //back arrow
      scale(2.6);
      image(fam, fx, 1200);
      if ((mouseX > 243) && (mouseX < 573) && (mouseY > 420) && (mouseY < 590)) {
        if (frameCount % 2 === 0) {
          fx += 7;
        } else if (frameCount % 2 == 1) {
          fx -= 7;
        }
      }
    } else if (value == 4) {
      background(200);
    }
  }
} //draw closer

//falling teardrops
function tearShed() {
  background(200);
  for (var i = 0; i < 1; i++) {
    var t = new Tears(createVector(random(0, width)), 0); //tears fall from the top
    shed.push(t);
  }
  for (i = 0; i < shed.length; i++) {
    shed[i].run();
  }
}

//ash flakes from the fire
function fireAshes() {
  for (var v = 0; v < 1; v++) {
    var flake = new Ashes((random(0, width)), (random(0, height)));
    fire.push(flake);
  }
  for (v = 0; v < fire.length; v++) {
    fire[v].display();
  }
}

//burning ivory smoke
function burning() {
  for (var z = 0; z < 1; z++) {
    var xx = new Smoke(createVector((random(100, 420)), (random(200, 500)))); //smoke rising above
    smoking.push(xx);
  }
  for (z = 0; z < smoking.length; z++) {
    smoking[z].run();
  }
}

//when the mouse is pressed on the image, then it will lead to another page
function mousePressed() {
  //console.log("x: " + mouseX);
  //console.log("y: " + mouseY);
  if ((mouseX > 89) && (mouseX < 233) && (mouseY > 142) && (mouseY < 247)) { //1
    roar.play();
    value = 1;
    //flag = 1;
  } else if ((mouseX > 370) && (mouseX < 506) && (mouseY > 142) && (mouseY < 247)) { //2
    roar.play();
    value = 2;
    //crackling.loop();
  } else if ((mouseX > 231) && (mouseX < 364) && (mouseY > 358) && (457)) { //3
    roar.play();
    value = 3;
    //crackling.loop();
    if ((mouseX > 243) && (mouseX < 573) && (mouseY > 420) && (mouseY < 590)) { //video
      createCanvas(0, 0);
      crackling.stop();
      lastDays = createVideo("data/lastdays.mp4");
      lastDays.size(600, 500);
      lastDays.play();
    }
  } else if ((mouseX > 9) && (mouseX < 71) && (mouseY > 548) && (mouseY < 589)) { //back arrow
    value = 0;
    s = 0;
    fire.length = 0;
    crackling.loop();
    smoking.length = 0;
    ypile = 210;
  }
}