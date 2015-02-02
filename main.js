/* global $: false*/
  var url,
      $stockName,
      $stockQty,
      AJAXresponse,
      total = 0,
      $buyStocks=$('buyStocks');

  $('#buyStocks').click(function(){
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
      $($tempRow).append('<td>' + data.Change.toFixed(2) + '</td>');
      $($tempRow).append('<td>' + data.ChangePercent.toFixed(2) + '</td>');
      $($tempRow).append('<button id="RemoveRow">Remove</button>');
      $('table').append($tempRow);
      $('#tempTotal').remove();
      total += (data.LastPrice * $stockQty);
      $('table').append('<p id="tempTotal">$' + total + '</p>');
    });

    });






