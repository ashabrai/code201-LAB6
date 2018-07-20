'use strict';
//object today is to create a form that allows the user to input data and it to update on the table and create a new table line.


var timeOfDay = ['6am', '7am','8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var salmonCookies = [];
var tblEl = document.getElementById('table');

function CookieTable(name,minCustomer,maxCustomer,AvgCookieSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.AvgCookieSale = AvgCookieSale;
  this.cookiePerHour = [];
  this.cookiesPerStore = 0;
  this.customersPerHour = [];

  salmonCookies.push(this);
  //createTable();
  bombTotalRow();
  this.render();
  createEndTotal();

}

//---------Generates random number
CookieTable.prototype.generateRandom = function() {
  return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
};
//----------Calculate Customerss
CookieTable.prototype.calculateCustomers = function() {
  for (var k of timeOfDay) {
    var rando = this.generateRandom();
    this.customersPerHour.push(rando);
  }
};
//------------ CALCULATE SALES
CookieTable.prototype.calculateSales = function() {
  this.calculateCustomers();
  for (var numCustomers of this.customersPerHour) {
    var cookies = Math.ceil(this.AvgCookieSale * numCustomers);
    //console.log(cookies);
    this.cookiePerHour.push(cookies);
    this.cookiesPerStore += cookies;
  }

};



//--------RENDER FUNCTION Row others


CookieTable.prototype.render = function(){
  this.calculateSales();

  //var tblEl = document.getElementById('table');
  var trStoreEl = document.createElement('tr');
  var tdNameEl = document.createElement('td');
  tdNameEl.textContent = this.name;
  trStoreEl.appendChild(tdNameEl);

  for (var i = 0; i < timeOfDay.length; i++){
    var tdDataEl = document.createElement('td');
    tdDataEl.textContent =this.cookiePerHour[i];

    trStoreEl.appendChild(tdDataEl);
  }

  var tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = this.cookiesPerStore;
  trStoreEl.appendChild(tdTotalEl);

  tblEl.appendChild(trStoreEl);

};
function createTable() { //rowfirst
  //-----------------HEADER row
  //this.calculateSales();

  // var tblEl = document.getElementById('table');
  //var trHeaderEl = document.createElement('hour-row');
  var trEl =document.createElement('tr');

  var thBlankEl = document.createElement ('td');
  thBlankEl.textContent = 'Stores';
  trEl.appendChild(thBlankEl);


  for (var idx = 0; idx < timeOfDay.length; idx++) {
    var thEl = document.createElement('th');
    thEl.textContent = timeOfDay[idx];
    trEl.appendChild(thEl);
    //trEl.appendChild(trEl);
  }

  var thTotalEl = document.createElement('td');
  thTotalEl.textContent = 'Total';
  trEl.appendChild(thTotalEl);
  tblEl.appendChild(trEl);

}
createTable();

//this actually creates the table

//finally run RENDER--------------
for (var store of salmonCookies) {
  store.render();
}

//----------create FOOTER total

function createEndTotal(){
  var trTotalEl = document.createElement('tr');
  trTotalEl.id = 'total-row';
  var tdFirstEle = document.createElement('td');
  tdFirstEle.textContent = 'Totals';
  trTotalEl.appendChild(tdFirstEle);

  var grandTotal = 0;

  for(var k = 0; k < timeOfDay.length; k++) {
    var total = 0;

    for (var j = 0; j < salmonCookies.length; j++){
      console.log(salmonCookies[j].cookiePerHour[k]);
      total += salmonCookies[j].cookiePerHour[k];
    }
    console.log(total);
    var tdDataEle = document.createElement('td');
    tdDataEle.textContent = total;
    trTotalEl.appendChild(tdDataEle);
    grandTotal += total;
  }

  var tdGrandtotalEle = document.createElement('td');
  tdGrandtotalEle.textContent = grandTotal;
  trTotalEl.appendChild(tdGrandtotalEle);

  tblEl.appendChild(trTotalEl);
}

function bombTotalRow(){
  var totalRow = document.getElementById('total-row');
  if (totalRow){
    totalRow.remove();
  }
}

//---------- This is the click button that refreshes the page
// var pClickEl = document.getElementById('p-click');

// function clicked() {
//   console.log('Clicked');
// }

// clicked(formEl);
// pClickEl.addEventListener('click',clicked);

//----------FORM DATA that takes user input

var formEl = document.getElementById('main-form');
formEl.addEventListener('submit', function(event){
  event.preventDefault();

  var name = event.target.Store.value;
  var minCustomer = event.target.Min.value;
  var maxCustomer = event.target.Max.value;
  var AvgCookieSale = event.target.AvgCookieSale.value;
  new CookieTable(name,minCustomer,maxCustomer,AvgCookieSale);
});
new CookieTable('First and Pike',23, 65,6.3);
new CookieTable('Seatac Airport',3,24,1.2);
new CookieTable('Seattle Center',11,38,3.7);
new CookieTable('Alki',2,16,4.6);
new CookieTable('Capitol Hill',20,38,2.3);

