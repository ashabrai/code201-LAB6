'use strict';







// var ulEl = document.createElement('thead');
// var h2El = document.createElement('h2');
// h2El.textContent = pike.name;
// ulEl.appendChild(h2El);

// for (var idx in pike.timeOfDay){
//   var liEl= document.createElement('li');
//   liEl.textContent = pike[idx] + ': ' + pike.timeOfDay[idx] + 'cookies';
//   ulEl.appendChild(h2El);

// }

// var liEltwo = document.createElement('li');
// liEltwo.textContent = 'Total:'
// var tr = document.createElement("tr");
// var td = document.createElement("td");


// td.appendChild(txt);
// tr.appendChild(td);
// table.appendChild(tr);

// for (var j =0; j<= values[i].length; i++) {
//   var cellText = document.createTextNode
// }


var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var salmonCookies = [];

function CookieTable(name,minCustomer,maxCustomer,AvgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.AvgCookieSale = AvgCookieSale;
  this.cookiePerHour = [],
  this.cookiesPerStore = 0,
  
  salmonCookies.push(this);
}

var pike = new CookieTable('firAndPike',23, 65,6.3);
var seatac = new CookieTable('seatacAir',3,24,1.2);
var seattleCenter = new CookieTable('seattleCenter',11,38,3.7);
var alki = new CookieTable('alki',2,16,4.6);
var capitolHill = new CookieTable('capitolHill',20,38,2.3);
var locations = [pike, seatac,seattleCenter,capitolHill,alki];
console.log(salmonCookies);



CookieTable.prototype.random =function() {
  return Math.ceil(Math.random() *(this.maxCustomer - this.minCustomer)+ this.minCustomer);
};
//console.log(salmonCookies[0].random());
salmonCookies[0].random();
salmonCookies[1].random();
salmonCookies[2].random();
salmonCookies[3].random();
salmonCookies[4].random();




CookieTable.prototype.cats = function() {
  for(var i = 0; i < timeOfDay.length; i++) {
    var sales = Math.ceil(this.AvgCookieSale * this.random());
    //console.log(fishSales);
    this.cookiePerHour.push(sales);
  }
};
//console.log(salmonCookies[0].cookiePerHour());
salmonCookies[0].cats();
salmonCookies[1].cats();
salmonCookies[2].cats();
salmonCookies[3].cats();
salmonCookies[4].cats();



CookieTable.prototype.finalTotal = function(){
  //console.log(this.cookieTotal,'herreeeee');
  for(var k = 0; k < this.cookiePerHour.length; k++){
    this.cookiesPerStore += this.cookiePerHour[k];
  }
};
//console.log(salmonCookies[0].finalTotal());
salmonCookies[0].finalTotal();
salmonCookies[1].finalTotal();
salmonCookies[2].finalTotal();
salmonCookies[3].finalTotal();
salmonCookies[4].finalTotal();


var trEl = document.createElement('tr');
var tdEl = document.createElement('td');
tdEl.textContent = '';
trEl.appendChild(tdEl);

for (var a = 0; a < timeOfDay.length; a++){
  tdEl = document.createElement('td');
  tdEl.textContent = timeOfDay[a];
  trEl.appendChild(tdEl);
}

var semiEl = document.getElementById('salmon-table');
semiEl.appendChild(trEl);

for (var c = 0; c < 5; c++){
  var trEl2 = document.createElement('tr');
  var tdEl2 =document.createElement('td');
  
  trEl2.textContent = locations[c].name;
  for(var d = 0; d < timeOfDay.length; d++){
    tdEl2 = document.createElement ('td');
    tdEl2.textContent = locations[c].cookiePerHour[d];
    trEl2.appendChild(tdEl2);

  }
  var tdEl3 = document.createElement('td');
  tdEl3.textContent = locations[c].cookiesPerStore;
  trEl2.appendChild(tdEl3);
  
  var semiEl2 = document.getElementById('salmon-table');
  semiEl2.appendChild(trEl2);

}












//function finalTotal() {
//   for(var k = 0; k < firAndPike.cookiePerHour.length; k++){
//     firAndPike.cookieTotal += firAndPike.cookiePerHour[k];
//   }
//   console.log('Total cookies' + firAndPike.cookieTotal);
  





// CookieTable.prototype.getCustomerPerHour = function(){
//   for(var j = 0; j < timeOfDay.length; j++) {
//     var cusPerHour = this.getCustomerPerHour(this.maxCustomer,this.minCustomer);
//     return getCustomerPerHour;
//   }
// };

// var cookiePerHour = Math.ceil(this.AvgCookieSale * cusPerHour);
// this.cookiePerHour.push(cookiePerHour);
// console.log('Total cookies' + this.cookieTotal);

// var firAndPike = {
//   minCustomer: 23,
//   maxCustomer: 65,
//   AvgCookieSale: 6.3,
//   cookiePerHour : [], //store the cookies
//   cookieTotal: 0,
//   getCustomerPerHour: function getCustomerPerHour(min,max){
//     return Math.random() *(max-min) + min;
//   },

// };


// // for(var j = 0; j < timeOfDay.length; j++) {
// //   var cusPerHour = this.getCustomerPerHour(firAndPike.maxCustomer,firAndPike.minCustomer);


// var cookiePerHour = Math.ceil(firAndPike.AvgCookieSale * cusPerHour);
//  firAndPike.cookiePerHour.push(cookiePerHour);




//var ulEl = document.createElement('ul');

//for(var i = 0; i < timeOfDay.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = timeOfDay[i] + ' ' + ' ' + firAndPike.cookiePerHour[i];
//     ulEl.appendChild(liEl);
//   }
// }
// console.log(j);


// console.log(firAndPike);

// var timeOfDay = document.getElementById('firAndPike');
// timeOfDay.appendChild(ulEl);


// function finalTotal() {
//   for(var k = 0; k < firAndPike.cookiePerHour.length; k++){
//     firAndPike.cookieTotal += firAndPike.cookiePerHour[k];
//   }
//   console.log('Total cookies' + firAndPike.cookieTotal);

//   var liEl = document.createElement('li');
//   liEl.textContent = 'Total cookie sales: ' + firAndPike.cookieTotal;
//   ulEl.appendChild(liEl);
// }
// finalTotal();





// //Start new list for Seatac


// var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var seatacAir = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   AvgCookieSale: 1.2,
//   cookiePerHour : [], //store the cookies
//   cookieTotal: 0,
//   getCustomerPerHour: function getCustomerPerHour(min,max){
//     return Math.random() *(max-min) + min;
//   },

// };


// for(var j = 0; j < timeOfDay.length; j ++) {
//   var cusPerHour = seatacAir.getCustomerPerHour(seatacAir.maxCustomer,seatacAir.minCustomer);
//   var cookiePerHour = Math.ceil(seatacAir.AvgCookieSale * cusPerHour);

//   seatacAir.cookiePerHour.push(cookiePerHour);

// }
// console.log(j);


// var ulEl = document.createElement('ul');

// for(var i = 0; i < timeOfDay.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = timeOfDay[i] + ' ' + ' ' + seatacAir.cookiePerHour[i];
//   ulEl.appendChild(liEl);
// }

// console.log(seatacAir);

// var timeSelect = document.getElementById('seatacAir');
// timeSelect.appendChild(ulEl);

// function finalTotalTwo() {
//   for(var k = 0; k < seatacAir.cookiePerHour.length; k++){
//     seatacAir.cookieTotal += seatacAir.cookiePerHour[k];
//   }
//   console.log('Total cookies' + seatacAir.cookieTotal);

//   var liEl = document.createElement('li');
//   liEl.textContent = 'Total cookie sales: ' + seatacAir.cookieTotal;
//   ulEl.appendChild(liEl);
// }
// finalTotalTwo();


// //Seattle Center

// var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var seattleCenter = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   AvgCookieSale: 3.7,
//   cookiePerHour : [], //store the cookies
//   cookieTotal: 0,
//   getCustomerPerHour: function getCustomerPerHour(min,max){
//     return Math.random() *(max-min) + min;
//   },

// };


// for(var j = 0; j < timeOfDay.length; j ++) {
//   var cusPerHour = seattleCenter.getCustomerPerHour(seattleCenter.maxCustomer,seattleCenter.minCustomer);
//   var cookiePerHour = Math.ceil(seattleCenter.AvgCookieSale * cusPerHour);

//   seattleCenter.cookiePerHour.push(cookiePerHour);

// }
// console.log(j);


// var ulEl = document.createElement('ul');

// for(var i = 0; i < timeOfDay.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = timeOfDay[i] + ' ' + ' ' + seattleCenter.cookiePerHour[i];
//   ulEl.appendChild(liEl);
// }

// console.log(seattleCenter);

// // don't delete yet, may need????? -Patricia
// var timeSelectseattleCenter = document.getElementById('seattleCenter');

// timeSelectseattleCenter.appendChild(ulEl);

// function finalTotalThree() {
//   for(var k = 0; k < seattleCenter.cookiePerHour.length; k++){
//     seattleCenter.cookieTotal += seattleCenter.cookiePerHour[k];
//   }
//   console.log('Total cookies' + seattleCenter.cookieTotal);

//   var liEl = document.createElement('li');
//   liEl.textContent = 'Total cookie sales: ' + seattleCenter.cookieTotal;
//   ulEl.appendChild(liEl);
// }
// finalTotalThree();



// //Capitol Hill


// var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var capitolHill = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   AvgCookieSale: 2.3,
//   cookiePerHour : [], //store the cookies
//   cookieTotal: 0,
//   getCustomerPerHour: function getCustomerPerHour(min,max){
//     return Math.random() *(max-min) + min;
//   },

// };


// for(var j = 0; j < timeOfDay.length; j ++) {
//   var cusPerHour = capitolHill.getCustomerPerHour(capitolHill.maxCustomer,capitolHill.minCustomer);
//   var cookiePerHour = Math.ceil(capitolHill.AvgCookieSale * cusPerHour);

//   capitolHill.cookiePerHour.push(cookiePerHour);

// }
// console.log(j);


// var ulEl = document.createElement('ul');

// for(var i = 0; i < timeOfDay.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = timeOfDay[i] + ' ' + ' ' + capitolHill.cookiePerHour[i];
//   ulEl.appendChild(liEl);
// }

// console.log(capitolHill);

// var timeSelectCapitolHill = document.getElementById('capitolHill');
// timeSelectCapitolHill.appendChild(ulEl);

// function finalTotalFour() {
//   for(var k = 0; k < capitolHill.cookiePerHour.length; k++){
//     capitolHill.cookieTotal += capitolHill.cookiePerHour[k];
//   }
//   console.log('Total cookies' + capitolHill.cookieTotal);

//   var liEl = document.createElement('li');
//   liEl.textContent = 'Total cookie sales: ' + capitolHill.cookieTotal;
//   ulEl.appendChild(liEl);
// }
// finalTotalFour();

// //Alki

// var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var alki = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   AvgCookieSale: 4.6,
//   cookiePerHour : [], //store the cookies
//   cookieTotal: 0,
//   getCustomerPerHour: function getCustomerPerHour(min,max){
//     return Math.random() *(max-min) + min;
//   },

// };


// for(var j = 0; j < timeOfDay.length; j ++) {
//   var cusPerHour = alki.getCustomerPerHour(alki.maxCustomer,capitolHill.minCustomer);
//   var cookiePerHour = Math.ceil(alki.AvgCookieSale * cusPerHour);

//   alki.cookiePerHour.push(cookiePerHour);

// }
// console.log(j);


// var ulEl = document.createElement('ul');

// for(var i = 0; i < timeOfDay.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = timeOfDay[i] + ' ' + ' ' + alki.cookiePerHour[i];
//   ulEl.appendChild(liEl);
// }

// console.log(alki);

// var timeSelectalki = document.getElementById('alki');
// timeSelectCapitolHill.appendChild(ulEl);

// function finalTotalFive() {
//   for(var k = 0; k < alki.cookiePerHour.length; k++){
//     alki.cookieTotal += alki.cookiePerHour[k];
//   }
//   console.log('Total cookies' + alki.cookieTotal);

//   var liEl = document.createElement('li');
//   liEl.textContent = 'Total cookie sales: ' + alki.cookieTotal;
//   ulEl.appendChild(liEl);
// }
// finalTotalFive();
//};