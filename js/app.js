'use strict';

// constructor for items
function Item(filename) {
  this.filename = filename;
  this.votes = 0;
  Item.allItems.push(this);
}
Item.allItems = [];

var bag = new Item('img/bag.jpg');
var banana = new Item('img/banana.jpg');
var bathroom = new Item('img/bathroom.jpg');
var boots = new Item('img/boots.jpg');
var breakfast = new Item('img/breakfast.jpg');
var bubblegum = new Item('img/bubblefum.jpg');
var chair = new Item('img/chair.jpg');
var cthulhu = new Item('img/cthulhu.jpg');
var dogDuck = new Item('img/dog-duck.jpg');
var dragon = new Item('img/dragon.jpg');
var pen = new Item('img/pen.jpg');
var petSweep = new Item('img/pet-sweep.jpg');
var scissors = new Item('img/scissors.jpg');
var shark = new Item('img/shark.jpg');
var sweep = new Item('img/sweep.png');
var tauntaun = new Item('img/tauntaun.jpg');
var unicorn = new Item('img/unicorn.jpg');
var usb = new Item('img/usb.gif');
var waterCan = new Item('img/water-can.jpg');
var wineGlass = new Item('img/wine-glass.jpg');


function displayThreeNewItems() {
  // show 3 new pictures to user
  // grab 3 items at random
  var randIndex = Math.floor(Math.random() * Item.allItems.length);
  bag = Item.allItems[randIndex];
  do {
    var secondItemIndex = Math.floor(Math.random() * Item.allItems.length);
  } while (randIndex === secondItemIndex);
  item2 = Item.allItems[secondItemIndex];
  // change img src on the page to match the 2 new items
  img1.src = item1.filename;
  img2.src = item2.filename;
}

// event listeners
// where are we listening? the images
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];
// what are we listening for? click
img1.addEventListener('click', function() {
  // add to votes for that item
  item1.votes++;
  // item1.votes = item1.votes + 1;
  displayThreeNewItems();
});

img2.addEventListener('click', function() {
  // what should we do?
  // add to votes for that item
  item2.votes++;
  displayThreeNewItems();

img3.addEventListener('click', function() {
  item3.votes++;
  displayThreeNewItems();

