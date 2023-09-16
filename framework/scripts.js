// Managing selected categories and showing relevant assets
var headerA = document.getElementById("headerA");
var headerB = document.getElementById("headerB");
var headerC = document.getElementById("headerC");
var headerD = document.getElementById("headerD");
var contentA = document.getElementById("contentA");
var contentB = document.getElementById("contentB");
var contentC = document.getElementById("contentC");
var contentD = document.getElementById("contentD");

function showCharacters() {
	contentA.style.display = "grid";
	contentB.style.display = "none";
	contentC.style.display = "none";
	contentD.style.display = "none";
	headerA.classList.add("headingActive");
	headerB.classList.remove("headingActive");
	headerC.classList.remove("headingActive");
	headerD.classList.remove("headingActive");
}

function showEnvironments() {
	contentA.style.display = "none";
	contentB.style.display = "grid";
	contentC.style.display = "none";
	contentD.style.display = "none";
	headerA.classList.remove("headingActive");
	headerB.classList.add("headingActive");
	headerC.classList.remove("headingActive");
	headerD.classList.remove("headingActive");
}

function showProps() {
	contentA.style.display = "none";
	contentB.style.display = "none";
	contentC.style.display = "grid";
	contentD.style.display = "none";
	headerA.classList.remove("headingActive");
	headerB.classList.remove("headingActive");
	headerC.classList.add("headingActive");
	headerD.classList.remove("headingActive");
}

function showExtras() {
	contentA.style.display = "none";
	contentB.style.display = "none";
	contentC.style.display = "none";
	contentD.style.display = "grid";
	headerA.classList.remove("headingActive");
	headerB.classList.remove("headingActive");
	headerC.classList.remove("headingActive");
	headerD.classList.add("headingActive");
}




// Managing specific version and edition of asset to download
var asset;
var version;
var edition;

function christineV1() {
	var christineV1 = document.getElementById("christineV1");
	var christineTEST = document.getElementById("christineTEST");
	var christineDownload = document.getElementById("christineDownload");
	christineV1.classList.add("modal-entryActive");
	christineTEST.classList.remove("modal-entryActive");
	christineDownload.classList.remove("disabled");
	version = "v1";
}

function christineTEST() {
	var christineV1 = document.getElementById("christineV1");
	var christineTEST = document.getElementById("christineTEST");
	christineV1.classList.remove("modal-entryActive");
	christineTEST.classList.add("modal-entryActive");
	christineDownload.classList.remove("disabled");
	version = "TEST";
}

function christineMaya() {
	asset = 'characters/christine';
	edition = 'maya'
	window.location.href = 'files/' + asset + '-' + version + '-' + edition + '.zip';
}

function christineGeneric() {
	asset = 'characters/christine';
	edition = 'generic'
	window.location.href = 'files/' + asset + '-' + version + '-' + edition + '.zip';
}
