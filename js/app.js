'use strict';

// constructor for items
function Item(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.votes = 0;
  this.numberOfTimesShown= 0;
  Item.allItems.push(this);
}
Item.allItems = [];

new Item('bag','img/bag.jpg');
new Item('banana','img/banana.jpg');
new Item('bathroom','img/bathroom.jpg');
new Item('boots','img/boots.jpg');
new Item('breakfast','img/breakfast.jpg');
new Item('bubblegum','img/bubblegum.jpg');
new Item('chair','img/chair.jpg');
new Item('cthulhu','img/cthulhu.jpg');
new Item('dog-duck','img/dog-duck.jpg');
new Item('dragon','img/dragon.jpg');
new Item('pen','img/pen.jpg');
new Item('pet-sweep','img/pet-sweep.jpg');
new Item('scissors','img/scissors.jpg');
new Item('shark','img/shark.jpg');
new Item('sweep','img/sweep.png');
new Item('tauntaun','img/tauntaun.jpg');
new Item('unicorn','img/unicorn.jpg');
new Item('usb','img/usb.gif');
new Item('water-can','img/water-can.jpg');
new Item('wine-glass','img/wine-glass.jpg');


function displayThreeNewItems() {
  // show 3 new pictures to user
  // grab 3 items at random
  for (randIndex === secondItemIndex || randIndex === thirdItemIndex || secondItemIndex === thirdItemIndex) {
    var randIndex = Math.floor(Math.random() * Item.allItems.length);
    var secondItemIndex = Math.floor(Math.random() * Item.allItems.length);
    var thirdItemIndex = Math.floor(Math.random() * Item.allItems.length);
  } 
  var item1 = Item.allItems[randIndex];
  var item2 = Item.allItems[secondItemIndex];
  var item3 = Item.allItems[thirdItemIndex]; 
  
  // change img src on the page to match the 3 new items
  img1.src = item1.filename;
  item1.votes++;
  img2.src = item2.filename;
  item2.votes++;
  img3.src = item3.filename;
  item3.votes++;
}

// event listeners
// where are we listening? the images
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];
// what are we listening for? click

var numberOfClicks = 0;

img1.addEventListener('click', function() {
  // add to votes for that item
  item1.votes++;

  numberOfClicks++;
  // item1.votes = item1.votes + 1;
  displayThreeNewItems();
});

img2.addEventListener('click', function() {
  // what should we do? 
  // add to votes for that item
  item2.votes++;
  numberOfClicks++;
  displayThreeNewItems();
});

img3.addEventListener('click', function() {
  item3.votes++;
  numberOfClicks++;
  displayThreeNewItems();
});

