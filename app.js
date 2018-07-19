'use strict';
//object today is to create a form that allows the user to input data and it to update on the table and create a new table line.

//event listeners when you refer to this
//var cookiesPerStore = 0;
//salmonCookies.push(this);

//this is the breaking point of where lab from yesterday started. This is where we created the table itself
var tblEl;
var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var salmonCookies = [];
var total = ['Totals'];


//var dailyTotal= timeOfDay

function CookieTable(name,minCustomer,maxCustomer,AvgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.AvgCookieSale = AvgCookieSale;
  this.cookiePerHour = [],
  this.cookiesPerStore = 0,
  this.customersPerHour = [];
  salmonCookies.push(this);
}

new CookieTable('First and Pike',23, 65,6.3);
new CookieTable('Seatac Airport',3,24,1.2);
new CookieTable('Seattle Center',11,38,3.7);
new CookieTable('Alki',2,16,4.6);
new CookieTable('Capitol Hill',20,38,2.3);

CookieTable.prototype.generateRandom = function() {
  return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
};

CookieTable.prototype.calculateCustomers = function() {
  for (var cats of timeOfDay) {
    var rando = this.generateRandom();
    this.customersPerHour.push(rando);
  }
};
CookieTable.prototype.calculateSales = function() {
  this.calculateCustomers();
  for (var numCustomers of this.customersPerHour) {
    var cookies = Math.ceil(this.AvgCookieSale * numCustomers);
    //console.log(cookies);
    this.cookiePerHour.push(cookies);
    this.cookiesPerStore += cookies;
  }

};


function createTable() {
  //header row
  var tblEl = document.getElementById('table');
  var trHeaderEl = document.createElement('tr');
  var thBlankEl = document.createElement ('th');
  thBlankEl.textContent = 'Store name';
  trHeaderEl.appendChild(thBlankEl);


  for (var idx = 0; idx < timeOfDay.length; idx++) {
    var thEl = document.createElement('th');
    thEl.textContent = timeOfDay[idx];
    trHeaderEl.appendChild(thEl);
  }
  var thTotalEl = document.createElement('th');
  thTotalEl.textContent = 'Daily Total';
  trHeaderEl.appendChild(thTotalEl);

  tblEl.appendChild(trHeaderEl);
  
}
function createEndTotal(){
 
  
  
  
  //document.getElementById('').appendChild(tblEl);
}

CookieTable.prototype.render = function(){
  // console.log(this.cookiePerHour);
  this.calculateSales();
  tblEl = document.getElementById('table');
  var trStoreEl = document.createElement('tr');

  var tdNameEl = document.createElement('td');
  tdNameEl.textContent = this.name;
  trStoreEl.appendChild(tdNameEl);

  for (var i = 0; i < timeOfDay.length; i ++){
    var tdDataEl = document.createElement('td');
    tdDataEl.textContent =this.cookiePerHour[i];

    trStoreEl.appendChild(tdDataEl);
  }

  var tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = this.cookiesPerStore;
  trStoreEl.appendChild(tdTotalEl);

  tblEl.appendChild(trStoreEl);

};
//for (var y = 0; y < cookiePerHour.length 

createTable(); // this actually creates the table

//finally run render
for (var store of salmonCookies) {
  store.render();
}


var pClickEl = document.getElementById('p-click');

function clicked() {
    
  console.log('Clicked');
}

pClickEl.addEventListener('click',clicked);

//form data

var formEl = document.getElementById('main-form');

formEl.addEventListener('submit', dataEntry);
function dataEntry(event) {
  event.preventDefault();
  console.log(event.target);
  var name = event.target.Store.value;
  var minCustomer = event.target.Min.value;
  var maxCustomer = event.target.Max.value;
  var AvgCookieSale = event.target.AvgCookieSale.value;

  console.log(name);
  
  var tableAdd = new CookieTable (name, minCustomer,maxCustomer,AvgCookieSale);
  tableAdd.render();
}
clicked(formEl);


// function totalperHour(){
//   var number = 0;
//   //console.log(timeOfDay);
//   //console.log(salmonCookies);
//   for(var store of salmonCookies){
//     number += salmonCookies[store].cookiePerHour[hour];
//     console.log(total);
//   }

//   // for(var store in salmonCookies){
//   //   console.log(cookiePerHour);
//   //   console.log(salmonCookies[store].cookiePerHour[0]);
//     for(var hour in timeofDay){
//       number += timeofDay[store].cookiePerHour[hour];

//   totalperHour();

