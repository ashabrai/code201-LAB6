'use strict';

// Our goal is to calculate the sum of cookies sold per hour.
var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firAndPike = {
  minCustomer: 23,
  maxCustomer: 65,
  AvgCookieSale: 6.3,
  cookiePerHour : [], //store the cookies
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





//Start new list for Seatac


var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seatacAir = {
  minCustomer: 3,
  maxCustomer: 24,
  AvgCookieSale: 1.2,
  cookiePerHour : [], //store the cookies
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

