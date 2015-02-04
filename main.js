/* global $: false*/
(function(){
  'use strict'
  var url,
      $stockName,
      $stockQty,
      AJAXresponse,
      total = 0,
      $buyStocks=$('buyStocks');

  $('.input_wrapper').on('click', '#buyStocks', function(){

    $stockName = $('#stockName').val().toUpperCase();
    $stockQty = $('#stockQty').val();
    url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + $stockName + '&callback=?';


    $.getJSON(url, function(data) {
      AJAXresponse = data;
      var $tempRow = $('<tr></tr>');
      $($tempRow).attr("data-symb", data.Symbol);
      $($tempRow).attr("data-name", data.Name);
      $($tempRow).attr("data-purchPrice", data.LastPrice);
      $($tempRow).attr("data-qty", $stockQty);
      $($tempRow).attr("data-change", data.Change.toFixed(2));
      $($tempRow).attr("data-currPrice", data.LastPrice);
      $($tempRow).append('<td>' + data.Name + '</td>');
      $($tempRow).append('<td>' + data.LastPrice + '</td>');
      var $currPrice = $('<td>' + data.LastPrice + '</td>');
      $currPrice.attr("data-updateMe", data.Symbol);
      $($tempRow).append($currPrice);
      $($tempRow).append('<td>' + $stockQty + '</td>');
      $($tempRow).append('<td>' + data.Change.toFixed(2) + '</td>');
      $($tempRow).append('<td>' + data.ChangePercent.toFixed(2) + '</td>');
      $($tempRow).append('<button class="RemoveRow">Remove</button>');
      $('table').append($tempRow);
      $('#tempTotal').remove();
      total += (data.LastPrice * $stockQty);
      $('#portfolioTotal').append('<p id="tempTotal">$' + total.toFixed(2) + '</p>');
    });

  });
   $('.table').on('click', '.RemoveRow', function(){
    var rowPrice = $(this).closest('tr').attr('data-purchPrice');
    var rowQty = $(this).closest('tr').attr('data-qty');
    var rowTotal = (rowPrice * rowQty);
    total -= rowTotal;
    $('#tempTotal').remove();
    $('#portfolioTotal').append('<p id="tempTotal">$' + total.toFixed(2) + '</p>');
    $(this).closest('tr').remove();
    });

    $('.table').on('click', '#refreshPortfolio', function(){
      var tableContents = $('tr');
      tableContents.each(function(tr){
      var stockToUpdate = $(this).attr("data-symb");
      var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + stockToUpdate + '&callback=?';
      $.getJSON(url, function(data){
        var newPrice = data.LastPrice;
        var rtrnSymb = data.Symbol;
        var currPriceList = $('td:nth-of-type(3)');
        _.forEach(currPriceList, function(price){
          console.log("current attribute: ", $(price).attr("data-updateme"));
          console.log(rtrnSymb);
          if ($(price).attr("data-updateme") === rtrnSymb){
          price.innerHTML = newPrice;
          }
        })
      })
    });
    });
})();

// var selector = 'tr[data-symb="' + data.Symbol + '"]';
//        $(selector).each()


