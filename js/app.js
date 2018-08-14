'use strict';

// constructor for items
function Item(filename) {
  this.filename = filename;
  this.votes = 0;
  Item.allItems.push(this);
}
Item.allItems = [];

new Item('img/bag.jpg');
new Item('img/banana.jpg');
new Item('img/bathroom.jpg');
new Item('img/boots.jpg');
new Item('img/breakfast.jpg');
new Item('img/bubblefum.jpg');
new Item('img/chair.jpg');
new Item('img/cthulhu.jpg');
new Item('img/dog-duck.jpg');
new Item('img/dragon.jpg');
new Item('img/pen.jpg');
new Item('img/pet-sweep.jpg');
new Item('img/scissors.jpg');
new Item('img/shark.jpg');
new Item('img/sweep.png');
new Item('img/tauntaun.jpg');
new Item('img/unicorn.jpg');
new Item('img/usb.gif');
new Item('img/water-can.jpg');
new Item('img/wine-glass.jpg');


function displayThreeNewItems() {
  // show 3 new pictures to user
  // grab 3 items at random
  do {
    var randIndex = Math.floor(Math.random() * Item.allItems.length);
    var secondItemIndex = Math.floor(Math.random() * Item.allItems.length);
    var thirdItemIndex = Math.floor(Math.random() * Item.allItems.length);
  } while (randIndex === secondItemIndex || randIndex === thirdItemIndex || secondItemIndex === thirdItemIndex);
  var item1 = Item.allItems[randIndex];
  var item2 = Item.allItems[secondItemIndex];
  var item3 = Item.allItems[thirdItemIndex]; 
  
  
  // change img src on the page to match the 3 new items
  img1.src = item1.filename;
  item1.votes++;
  img2.src = item2.filename;
  item2.vote++;
  img3.src = item3.filename;
  item3.vote++;
}

// event listeners
// where are we listening? the images
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];
// what are we listening for? click
img1.addEventListener('click', function() {
  // add to votes for that item
  // item1.votes++;
  // item1.votes = item1.votes + 1;
  displayThreeNewItems();
});

img2.addEventListener('click', function() {
  // what should we do? 
  // add to votes for that item
  item2.votes++;
  displayThreeNewItems();
});

img3.addEventListener('click', function() {
  item3.votes++;
  displayThreeNewItems();
});

