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

new Item('bag', 'img/bag.jpg');
new Item('banana', 'img/banana.jpg');
new Item('bathroom', 'img/bathroom.jpg');
new Item('boots', 'img/boots.jpg');
new Item('breakfast', 'img/breakfast.jpg');
new Item('bubblegum', 'img/bubblegum.jpg');
new Item('chair', 'img/chair.jpg');
new Item('cthulhu', 'img/cthulhu.jpg');
new Item('dog-duck', 'img/dog-duck.jpg');
new Item('dragon', 'img/dragon.jpg');
new Item('pen', 'img/pen.jpg');
new Item('pet-sweep', 'img/pet-sweep.jpg');
new Item('scissors', 'img/scissors.jpg');
new Item('shark', 'img/shark.jpg');
new Item('sweep', 'img/sweep.png');
new Item('tauntaun', 'img/tauntaun.jpg');
new Item('unicorn', 'img/unicorn.jpg');
new Item('usb', 'img/usb.gif');
new Item('water-can', 'img/water-can.jpg');
new Item('wine-glass', 'img/wine-glass.jpg');

var prevItem = [];
var item1, item2, item3;
// var shownItem = [];

function displayThreeNewItems() {
  // show 3 new pictures to user
  // grab 3 items at random that do not duplicate

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
  prevItem = [firstRandItemIndex, secondRandItemIndex, thirdRandItemIndex];
  // shownItem = [item1.shown, item2.shown, item3.shown];

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

displayThreeNewItems();

var maxClicks = 24;
var numberOfClicks = 0;

// what are we listening for? click
var addItem1Votes = function() {
  // add votes for item1

  if (numberOfClicks === maxClicks) {
    console.log(Item.allItems);
    displayResults();
  } else {
    item1.votes++;
    numberOfClicks++;
    displayThreeNewItems();
  }
};

// add event listener and event handler
img1.addEventListener('click', addItem1Votes);

var addItem2Votes = function() {
  if (numberOfClicks === maxClicks) {
    console.log(Item.allItems);
    displayResults();
  } else {
    item2.votes++;
    numberOfClicks++;
    displayThreeNewItems();
  }
};

img2.addEventListener('click', addItem2Votes);

var addItem3Votes = function() {
  if (numberOfClicks === maxClicks) {
    console.log(Item.allItems);
    displayResults();
    //invoke function to create list
  } else {
    item3.votes++;
    numberOfClicks++;
    displayThreeNewItems();
  }
};

img3.addEventListener('click', addItem3Votes);

// after max clicks, display results in a list
function displayResults() {
  img1.remove();
  img2.remove();
  img3.remove();

  var results = document.querySelector('ul');

  for (var i = 0; i < Item.allItems.length; i++) {
    // create list for number of votes for items shown
    var name = Item.allItems[i].name;
    var votes = Item.allItems[i].votes;
    var shown = Item.allItems[i].shown;

    var itemResult = document.createElement('li');
    results.appendChild(itemResult);
    itemResult.innerText =
      'Item name: ' +
      name +
      ', total votes: ' +
      votes +
      ', total times shown: ' +
      shown;
  }

  var namesArray = [];
  var votesArray = [];

  for (var j = 0; j < Item.allItems.length; j++) {
    namesArray.push(Item.allItems[j].name);
    votesArray.push(Item.allItems[j].votes);
  }

  // add bar chart displaying total votes
  var ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [
        {
          label: '# of Votes',
          data: votesArray, // these numbers seem important
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: 'rgb(0,0,0)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              suggestedMax: 6
            }
          }
        ]
      }
    }
  });
}
