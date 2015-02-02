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
    });

    });






