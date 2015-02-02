(function(){
'use strict'

var url,
    $stockName,
    $stockQty,
    data,
    $buyStocks=$('buyStocks');

$buyStocks.change(function(){
  $stockName = $('#stockName').val();
  $stockQty = $('stockQty').val();
  url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + stockName + "&callback=?";

  $.getJSON(url, function() {
  data = this.response;
  stockName = response.Name;
    });

  });
});





})();
