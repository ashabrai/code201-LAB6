'use strict';

// Our goal is to calculate the sum of cookies sold per hour.
var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firAndPike = {
  minCustomer: 23,
  maxCustomer: 65,
  AvgCookieSale: 6.3,
  cookiePerHour : [], //store the cookies
  cookieTotal: 0,
  getCustomerPerHour: function getCustomerPerHour(min,max){
    return Math.random() *(max-min) + min;
  },

};


for(var j = 0; j < timeOfDay.length; j++) {
  var cusPerHour = firAndPike.getCustomerPerHour(firAndPike.maxCustomer,firAndPike.minCustomer);
  var cookiePerHour = Math.ceil(firAndPike.AvgCookieSale * cusPerHour);

  firAndPike.cookiePerHour.push(cookiePerHour);

}
console.log(j);


var ulEl = document.createElement('ul');

for(var i = 0; i < timeOfDay.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = timeOfDay[i] + ' ' + ' ' + firAndPike.cookiePerHour[i];
  ulEl.appendChild(liEl);
}

console.log(firAndPike);

var timeOfDay = document.getElementById('firAndPike');
timeOfDay.appendChild(ulEl);


function finalTotal() {
  for(var k = 0; k < firAndPike.cookiePerHour.length; k++){
    firAndPike.cookieTotal += firAndPike.cookiePerHour[k];
  }
  console.log('Total cookies' + firAndPike.cookieTotal);

  var liEl = document.createElement('li');
  liEl.textContent = 'Total cookie sales: ' + firAndPike.cookieTotal;
  ulEl.appendChild(liEl);
}
finalTotal();





//Start new list for Seatac


var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seatacAir = {
  minCustomer: 3,
  maxCustomer: 24,
  AvgCookieSale: 1.2,
  cookiePerHour : [], //store the cookies
  cookieTotal: 0,
  getCustomerPerHour: function getCustomerPerHour(min,max){
    return Math.random() *(max-min) + min;
  },

};


for(var j = 0; j < timeOfDay.length; j ++) {
  var cusPerHour = seatacAir.getCustomerPerHour(seatacAir.maxCustomer,seatacAir.minCustomer);
  var cookiePerHour = Math.ceil(seatacAir.AvgCookieSale * cusPerHour);

  seatacAir.cookiePerHour.push(cookiePerHour);

}
console.log(j);


var ulEl = document.createElement('ul');

for(var i = 0; i < timeOfDay.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = timeOfDay[i] + ' ' + ' ' + seatacAir.cookiePerHour[i];
  ulEl.appendChild(liEl);
}

console.log(seatacAir);

var timeSelect = document.getElementById('seatacAir');
timeSelect.appendChild(ulEl);

function finalTotalTwo() {
  for(var k = 0; k < seatacAir.cookiePerHour.length; k++){
    seatacAir.cookieTotal += seatacAir.cookiePerHour[k];
  }
  console.log('Total cookies' + seatacAir.cookieTotal);

  var liEl = document.createElement('li');
  liEl.textContent = 'Total cookie sales: ' + seatacAir.cookieTotal;
  ulEl.appendChild(liEl);
}
finalTotalTwo();






//Seattle Center 

var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  AvgCookieSale: 3.7,
  cookiePerHour : [], //store the cookies
  cookieTotal: 0,
  getCustomerPerHour: function getCustomerPerHour(min,max){
    return Math.random() *(max-min) + min;
  },

};


for(var j = 0; j < timeOfDay.length; j ++) {
  var cusPerHour = seattleCenter.getCustomerPerHour(seattleCenter.maxCustomer,seattleCenter.minCustomer);
  var cookiePerHour = Math.ceil(seattleCenter.AvgCookieSale * cusPerHour);

  seattleCenter.cookiePerHour.push(cookiePerHour);

}
console.log(j);


var ulEl = document.createElement('ul');

for(var i = 0; i < timeOfDay.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = timeOfDay[i] + ' ' + ' ' + seattleCenter.cookiePerHour[i];
  ulEl.appendChild(liEl);
}

console.log(seattleCenter);

// don't delete yet, may need????? -Patricia
var timeSelectseattleCenter = document.getElementById('seattleCenter');

timeSelectseattleCenter.appendChild(ulEl);

function finalTotalThree() {
  for(var k = 0; k < seattleCenter.cookiePerHour.length; k++){
    seattleCenter.cookieTotal += seattleCenter.cookiePerHour[k];
  }
  console.log('Total cookies' + seattleCenter.cookieTotal);

  var liEl = document.createElement('li');
  liEl.textContent = 'Total cookie sales: ' + seattleCenter.cookieTotal;
  ulEl.appendChild(liEl);
}
finalTotalThree();



//Capitol Hill


var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var capitolHill = {
  minCustomer: 20,
  maxCustomer: 38,
  AvgCookieSale: 2.3,
  cookiePerHour : [], //store the cookies
  cookieTotal: 0,
  getCustomerPerHour: function getCustomerPerHour(min,max){
    return Math.random() *(max-min) + min;
  },

};


for(var j = 0; j < timeOfDay.length; j ++) {
  var cusPerHour = capitolHill.getCustomerPerHour(capitolHill.maxCustomer,capitolHill.minCustomer);
  var cookiePerHour = Math.ceil(capitolHill.AvgCookieSale * cusPerHour);

  capitolHill.cookiePerHour.push(cookiePerHour);

}
console.log(j);


var ulEl = document.createElement('ul');

for(var i = 0; i < timeOfDay.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = timeOfDay[i] + ' ' + ' ' + capitolHill.cookiePerHour[i];
  ulEl.appendChild(liEl);
}

console.log(capitolHill);

var timeSelectCapitolHill = document.getElementById('capitolHill');
timeSelectCapitolHill.appendChild(ulEl);

function finalTotalFour() {
  for(var k = 0; k < capitolHill.cookiePerHour.length; k++){
    capitolHill.cookieTotal += capitolHill.cookiePerHour[k];
  }
  console.log('Total cookies' + capitolHill.cookieTotal);

  var liEl = document.createElement('li');
  liEl.textContent = 'Total cookie sales: ' + capitolHill.cookieTotal;
  ulEl.appendChild(liEl);
}
finalTotalFour();

//Alki

var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var alki = {
  minCustomer: 2,
  maxCustomer: 16,
  AvgCookieSale: 4.6,
  cookiePerHour : [], //store the cookies
  cookieTotal: 0,
  getCustomerPerHour: function getCustomerPerHour(min,max){
    return Math.random() *(max-min) + min;
  },

};


for(var j = 0; j < timeOfDay.length; j ++) {
  var cusPerHour = alki.getCustomerPerHour(alki.maxCustomer,capitolHill.minCustomer);
  var cookiePerHour = Math.ceil(alki.AvgCookieSale * cusPerHour);

  alki.cookiePerHour.push(cookiePerHour);

}
console.log(j);


var ulEl = document.createElement('ul');

for(var i = 0; i < timeOfDay.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = timeOfDay[i] + ' ' + ' ' + alki.cookiePerHour[i];
  ulEl.appendChild(liEl);
}

console.log(alki);

var timeSelectalki = document.getElementById('alki');
timeSelectCapitolHill.appendChild(ulEl);

function finalTotalFive() {
  for(var k = 0; k < alki.cookiePerHour.length; k++){
    alki.cookieTotal += alki.cookiePerHour[k];
  }
  console.log('Total cookies' + alki.cookieTotal);

  var liEl = document.createElement('li');
  liEl.textContent = 'Total cookie sales: ' + alki.cookieTotal;
  ulEl.appendChild(liEl);
}
finalTotalFive();




