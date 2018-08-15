'use strict';

//constructor for items
function Item(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.votes = 0;
  this.shown = 0;
  Item.allItems.push(this);
}
//place all instances of items in array
Item.allItems = [];
Item.totalVotes = 0;

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

var prevItem = [];
var item1, item2, item3;

function displayThreeNewItems() {
  // show 3 new pictures to user
  // grab 3 items at random

  do {
    var firstRandItemIndex = Math.floor(Math.random() * Item.allItems.length);
    var secondRandItemIndex = Math.floor(Math.random() * Item.allItems.length);
    var thirdRandItemIndex = Math.floor(Math.random() * Item.allItems.length);
  } while (
    firstRandItemIndex === secondRandItemIndex ||
    firstRandItemIndex === thirdRandItemIndex ||
    secondRandItemIndex === thirdRandItemIndex ||
    prevItem.includes(firstRandItemIndex) ||
    prevItem.includes(secondRandItemIndex) ||
    prevItem.includes(thirdRandItemIndex)
  );

  item1 = Item.allItems[firstRandItemIndex];
  item2 = Item.allItems[secondRandItemIndex];
  item3 = Item.allItems[thirdRandItemIndex];
  prevItem = [firstRandItemIndex,secondRandItemIndex,thirdRandItemIndex];

  // change img src on the page to match the 3 new items
  img1.src = item1.filePath;
  item1.shown++;
  img2.src = item2.filePath;
  item2.shown++;
  img3.src = item3.filePath;
  item3.shown++;

  console.log(img1.src, img2.src, img3.src);
}

// event listeners
// where are we listening? the images
// select the img nodes from the document
var img1 = document.getElementsByTagName('img')[0];
var img2 = document.getElementsByTagName('img')[1];
var img3 = document.getElementsByTagName('img')[2];
// what are we listening for? click

displayThreeNewItems();

var maxClicks = 25;
var numberOfClicks = 0;

var addVotestoItem1 = function() {
  // add to votes for that item
  // item1.votes = item1.votes + 1;

  if (numberOfClicks === maxClicks) {
    console.log(Item.allItems);

    //document.getElementsByTagName('img')[0].removeEventListener('click', addVotestoItem1);
    displayResults();
  } else {
    item3.votes++;
    numberOfClicks++;
    displayThreeNewItems();
  }
};

img1.addEventListener('click', addVotestoItem1);

var addVotestoItem2 = function() {
  item2.votes++;
  numberOfClicks++;
  // item1.votes = item1.votes + 1;

  if (numberOfClicks === maxClicks) {
    console.log(Item.allItems);

    //document.getElementsByTagName('img')[1].removeEventListener('click', addVotestoItem2);
    displayResults();
  } else {
    item3.votes++;
    numberOfClicks++;
    displayThreeNewItems();
  }
};

img2.addEventListener('click', addVotestoItem2);

var addVotestoItem3 = function() {

  if (numberOfClicks === maxClicks) {
    console.log(Item.allItems);
    //document.getElementsByTagName('img')[2].removeEventListener('click', addVotestoItem3);
    displayResults();
    //invoke function to create list
  } else {
    item3.votes++;
    numberOfClicks++;
    displayThreeNewItems();
  }
};

img3.addEventListener('click', addVotestoItem3);



//function return


function displayResults() {
  img1.remove();
  img2.remove();
  img3.remove();
}

//   for (var i = 0; i < Item.allItems.length; i++){
//     namesArray.push(Item.allItems[i].name);
//   }
//   var ctx = document.getElementById('myChart').msGetInputContext('2d');
//   var myChart = new myChart(ctx, {
//     type: 'bar'
//   })
// }


