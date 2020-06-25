var visibilitya = "visible";
var visibilityb = "hidden";
var displaya = "block";
var displayb = "none";

function blockph() {
document.getElementById("blockph").style.visibility= visibilitya;
document.getElementById("blockg").style.visibility= visibilityb;
document.getElementById("blockpc").style.visibility= visibilityb;
document.getElementById("blocks").style.visibility= visibilityb;
}
function blockg() {
document.getElementById("blockg").style.visibility= visibilitya;
document.getElementById("blockph").style.visibility= visibilityb;
document.getElementById("blockpc").style.visibility= visibilityb;
document.getElementById("blocks").style.visibility=visibilityb;
}
function blockpc() {
document.getElementById("blockpc").style.visibility= visibilitya;
document.getElementById("blockph").style.visibility= visibilityb;
document.getElementById("blockg").style.visibility= visibilityb;
document.getElementById("blocks").style.visibility=visibilityb;
}
function blocks() {
document.getElementById("blockpc").style.visibility= visibilityb;
document.getElementById("blockph").style.visibility= visibilityb;
document.getElementById("blockg").style.visibility= visibilityb;
document.getElementById("blocks").style.visibility=visibilitya;
}

function consoles() {
document.getElementById("gamingConsoles").style.display= displaya;
document.getElementById("gamingCP").style.display= displayb;
document.getElementById("phonesSmartp").style.display= displayb;
document.getElementById("mostbought").style.display= displayb;
}
function cp() {
document.getElementById("gamingCP").style.display= displaya;
document.getElementById("gamingConsoles").style.display= displayb;
document.getElementById("phonesSmartp").style.display= displayb;
document.getElementById("mostbought").style.display= displayb;
}
function smartphones() {
document.getElementById("gamingConsoles").style.display= displayb;
document.getElementById("gamingCP").style.display= displayb;
document.getElementById("phonesSmartp").style.display= displaya;
document.getElementById("mostbought").style.display= displayb;
}

var cartItems = [];
var ps4sfnbr = "ps4sfnbr";
var ps4p1t = "ps4p1t";
var xboxo1t = "xboxo1t";
var xboxox1t = "xboxox1t";
var nswitch = "nswitch";
var psn5efr = "psn5efr";
var psn10efr = "psn10efr";
var psn20efr = "psn20efr";
var psn50efr = "psn50efr";
var psn75efr = "psn75efr";
var psn100efr = "psn100efr";
var smgs20 = "smgs20";
var iphone11pm = "iphone11pm";
var smgzf = "smgzf";
var ipadp20 = "ipadp20";
var hpi5 = "hpi5";
var mbp13p = "mbp13p";
var clavierg = "clavierg";
var kit20kg = "kit20kg";
var beatss3 = "beatss3";
var smc50p = "smc50p";

function addToCart(item) {
document.getElementById("itemCounter").style.display= displaya;
cartItems.push(item);
document.getElementById("itemCounter").innerHTML= cartItems.length;
document.getElementById(item).style.display= displaya;
}
function removeFromCart(item) {
document.getElementById(item).style.display= displayb;
}

function opencart() {
document.getElementById("cart").style.display = displaya;
}
function hidec() {
document.getElementById("cart").style.display = displayb;
}

function signin() {
document.getElementById("login").style.display = displayb;
document.getElementById("create").style.display = displaya;
}
function login() {
document.getElementById("login").style.display = displaya;
document.getElementById("create").style.display = displayb;
}