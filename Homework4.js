"use strict";

function $( id ) {

  return document.getElementById( id );
};

var processEntries = function() {

  var count1 = parseInt($("count1").value);
  var count2 = parseInt($("count2").value);
  var count3 = parseInt($("count3").value);

  if (isNaN(count1) || isNaN(count2) || isNaN(count3)) {
      alert("Entries must be numeric");
  } else if (count1 < 0 || count2 < 0 || count3 < 0) {
    alert("Entries cannot be negative");
  } else {
      doCalc();
}
};

function doCalc() {
  showTotalCount();
  calcItem1();
  calcItem2();
  calcItem3();
  showTotalTax();
  showTotalBill();
};

function showTotalCount(){
// showTotalCount
var totalCount = parseInt($("count1").value) +
                 parseInt($("count2").value) +
                 parseInt($("count3").value);
$("showTotalCount").innerHTML = totalCount;
}
// Grabs innerHTML to find the total tax
function showTotalTax() {

  var showTa1 = document.getElementById("showTax1").innerHTML;
  var showTa2 = document.getElementById("showTax2").innerHTML;
  var showTa3 = document.getElementById("showTax3").innerHTML;
  var finalPrice = parseFloat(showTa1) + parseFloat(showTa2) + parseFloat(showTa3);
  document.getElementById("showTotalTax").innerHTML = finalPrice.toFixed(2);
}
// Grabs innerHTML to find the total bill
function showTotalBill() {

  var showTo1 = document.getElementById("showTotal1").innerHTML;
  var showTo2 = document.getElementById("showTotal2").innerHTML;
  var showTo3 = document.getElementById("showTotal3").innerHTML;
  var theTotalPrice = parseFloat(showTo1) + parseFloat(showTo2) + parseFloat(showTo3);
  document.getElementById("showTotalBill").innerHTML = theTotalPrice.toFixed(2);
}

// Math for item number 1 (item price, tax, and total price)
function calcItem1() {
var hammer = document.getElementById('item1')[0].text;
var screwdriver = document.getElementById('item1')[1].text;
var wrench = document.getElementById('item1')[2].text;
var yourPick = item1.options[item1.selectedIndex].text;

if (yourPick === hammer) {
  var itemPriceHam = 10.99;
  var taxHam = 0.7693;
  var showTotalTaxHam = taxHam * parseInt($("count1").value);
  var totalPriceHam = (itemPriceHam + taxHam) * parseInt($("count1").value);

  $("showPrice1").innerHTML = itemPriceHam;
  $("showTax1").innerHTML = showTotalTaxHam.toFixed(2);
  $("showTotal1").innerHTML = totalPriceHam.toFixed(2);


}
if (yourPick === screwdriver) {
    var itemPriceSrw = 5.99;
    var taxSrw = 0.4193;
    var showTotalTaxSrw = taxSrw * parseInt($("count1").value);
    var totalPriceSrw = (itemPriceSrw + taxSrw) * parseInt($("count1").value);

    $("showPrice1").innerHTML = itemPriceSrw;
    $("showTax1").innerHTML = showTotalTaxSrw.toFixed(2);
    $("showTotal1").innerHTML = totalPriceSrw.toFixed(2);
}
if (yourPick === wrench) {
  var itemPriceWrc = 6.99;
  var taxWrc = 0.4893;
  var showTotalTaxSrw = taxSrw * parseInt($("count1").value);
  var totalPriceWrc = (itemPriceWrc + taxWrc) * parseInt($("count1").value);

  $("showPrice1").innerHTML = itemPriceWrc;
  $("showTax1").innerHTML = showTotalTaxWrc.toFixed(2);
  $("showTotal1").innerHTML = totalPriceWrc.toFixed(2);
}
};

  // Math for item number 2 (item price, tax, and total price)
  function calcItem2() {

    var hammer = document.getElementById('item2')[0].text;
    var screwdriver = document.getElementById('item2')[1].text;
    var wrench = document.getElementById('item2')[2].text;
    var yourPick = item2.options[item2.selectedIndex].text;

    if (yourPick === hammer) {
      var itemPriceHam = 10.99;
      var taxHam = 0.7693;
      var showTotalTaxHam = taxHam * parseInt($("count2").value);
      var totalPriceHam = (itemPriceHam + taxHam) * parseInt($("count2").value);

      $("showPrice2").innerHTML = itemPriceHam;
      $("showTax2").innerHTML = showTotalTaxHam.toFixed(2);
      $("showTotal2").innerHTML = totalPriceHam.toFixed(2);


    }
    if (yourPick === screwdriver) {
        var itemPriceSrw = 5.99;
        var taxSrw = 0.4193;
        var showTotalTaxSrw = taxSrw * parseInt($("count2").value);
        var totalPriceSrw = (itemPriceSrw + taxSrw) * parseInt($("count2").value);


        $("showPrice2").innerHTML = itemPriceSrw;
        $("showTax2").innerHTML = showTotalTaxSrw.toFixed(2);
        $("showTotal2").innerHTML = totalPriceSrw.toFixed(2);
    }
    if (yourPick === wrench) {
      var itemPriceWrc = 6.99;
      var taxWrc = 0.4893;
      var showTotalTaxwrc = taxWrc * parseInt($("count2").value);
      var totalPriceWrc = (itemPriceWrc + taxWrc) * parseInt($("count2").value);

      $("showPrice2").innerHTML = itemPriceWrc;
      $("showTax2").innerHTML = showTotalTaxWrc.toFixed(2);
      $("showTotal2").innerHTML = totalPriceWrc.toFixed(2);
    }
  };

  // Math for item number 3 (item price, tax, and total price)
  function calcItem3() {

    var hammer = document.getElementById('item3')[0].text;
    var screwdriver = document.getElementById('item3')[1].text;
    var wrench = document.getElementById('item3')[2].text;
    var yourPick = item3.options[item3.selectedIndex].text;

    if (yourPick === hammer) {
      var itemPriceHam = 10.99;
      var taxHam = 0.7693;
      var showTotalTaxHam = taxHam * parseInt($("count3").value);
      var totalPriceHam = (itemPriceHam + taxHam) * parseInt($("count3").value);

      $("showPrice3").innerHTML = itemPriceHam;
      $("showTax3").innerHTML = showTotalTaxHam.toFixed(2);
      $("showTotal3").innerHTML = totalPriceHam.toFixed(2);

    }
    if (yourPick === screwdriver) {
        var itemPriceSrw = 5.99;
        var taxSrw = 0.4193;
        var showTotalTaxSrw = taxSrw * parseInt($("count3").value);
        var totalPriceSrw = (itemPriceSrw + taxSrw) * parseInt($("count3").value);

        $("showPrice3").innerHTML = itemPriceSrw;
        $("showTax3").innerHTML = showTotalTaxSrw.toFixed(2);
        $("showTotal3").innerHTML = totalPriceSrw.toFixed(2);
    }
    if (yourPick === wrench) {
      var itemPriceWrc = 6.99;
      var taxWrc = 0.4893;
      var showTotalTaxWrc = taxWrc * parseInt($("count3").value);
      var totalPriceWrc = (itemPriceWrc + taxWrc) * parseInt($("count3").value);

      $("showPrice3").innerHTML = itemPriceWrc;
      $("showTax3").innerHTML = showTotalTaxWrc.toFixed(2);
      $("showTotal3").innerHTML = totalPriceWrc.toFixed(2);
    }
  };

// On load of the page, first do this...
window.onload = function() {
    $("calculate").onclick = processEntries;
 };
