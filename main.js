/* global $: false*/
  var url,
      $stockName,
      $stockQty,
      AJAXresponse,
      $buyStocks=$('buyStocks');

  $('#buyStocks').click(function(){
    'use strict'
    $stockName = $('#stockName').val().toUpperCase();
    $stockQty = $('#stockQty').val();
    console.log($stockName);
    console.log($stockQty);
    url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + $stockName + '&callback=?';

    $.getJSON(url, function(data) {
      AJAXresponse = data;
      console.log(data);
      var $tempRow = $('<tr></tr>');
      $($tempRow).append('<td>' + data.Name + '</td>');
      $($tempRow).append('<td>' + data.LastPrice + '</td>');
      $($tempRow).append('<td>' + $stockQty + '</td>');
      $($tempRow).append('<td>' + data.Change + '</td>');
      $($tempRow).append('<td>' + data.ChangePercent + '</td>');
      $($tempRow).append('<button id="RemoveRow">Remove</button>');
      $('table').append($tempRow);
    });

    });






