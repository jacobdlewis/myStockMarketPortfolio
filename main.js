/* global $: false*/
(function(){
  'use strict'
  var url,
      $stockName,
      $stockQty,
      AJAXresponse,
      total = 0,
      $buyStocks=$('buyStocks');

  $('#buyStocks').on('click', function(){

    $stockName = $('#stockName').val().toUpperCase();
    $stockQty = $('#stockQty').val();
    url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + $stockName + '&callback=?';

    $.getJSON(url, function(data) {
      AJAXresponse = data;
      console.log(data);
      var $tempRow = $('<tr></tr>');
      $($tempRow).attr("data-name", data.Name);
      $($tempRow).attr("data-price", data.LastPrice);
      $($tempRow).attr("data-qty", $stockQty);
      $($tempRow).attr("data-change", data.Change.toFixed(2));
      $($tempRow).append('<td>' + data.Name + '</td>');
      $($tempRow).append('<td class = "price">' + data.LastPrice + '</td>');
      $($tempRow).append('<td class = "qty">' + $stockQty + '</td>');
      $($tempRow).append('<td>' + data.Change.toFixed(2) + '</td>');
      $($tempRow).append('<td>' + data.ChangePercent.toFixed(2) + '</td>');
      $($tempRow).append('<button class="RemoveRow">Remove</button>');
      $('table').append($tempRow);
      $('#tempTotal').remove();
      total += (data.LastPrice * $stockQty);
      $('#portfolioTotal').append('<p id="tempTotal">$' + total + '</p>');
    });

   $('.table').on('click', '.RemoveRow', function(){
    var tempPrice = $(this).closest('tr').attr('data-price');
    console.log($(this).closest('tr').attr('data-price'));
    var tempQty = $(this).closest('tr').attr('data-qty');
    console.log($(this).closest('tr').attr('data-qty'));
    var tempTotal = (tempPrice * tempQty);
    console.log($('#tempTotal').val());
    total -= tempTotal;
    tempTotal = 0;
    $('#tempTotal').remove();
    $('#portfolioTotal').append('<p id="tempTotal">$' + total + '</p>');
    $(this).closest('tr').remove();
  });


  });


})();



