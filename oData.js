var dataSource = (function() {
  'use strict';
  var options = {
    table: '83452NED',
    regio: 'GM0770'
  };
  o().config({
    endpoint: 'http://opendata.cbs.nl/ODataApi/odata/'
  });

  function substitute(original) {
    switch (original) {
      case "A025461":
        return "pmd";
      case "A025454":
        return "gft";
      case "A025450":
        return "rest";
      default:
        return null;
    }
  }

  return function(callback) {
    o(options.table + '/TypedDataSet')
      .filter("(RegioS eq '" + options.regio + "') and ((Afvalsoort eq 'A025450') or (Afvalsoort eq 'A025454') or (Afvalsoort eq 'A025461')) "// +
        //"and ((Perioden eq '2012JJ00') or (Perioden eq '2013JJ00') or (Perioden eq '2014JJ00'))"
      )
      .get().then(function(oHandler) {
        var data = [];
        oHandler.data.forEach(function(o) {
          var oTemp = data.filter(function(a) {
            return a.year == o.Perioden.substr(0, 4);
          })[0];
          if (oTemp) {
            oTemp.numbers[substitute(o.Afvalsoort)] = o.HoeveelheidHuishoudelijkAfval_1;
          } else {
            if (o.HoeveelheidHuishoudelijkAfval_1) {
              oTemp = {
                year: o.Perioden.substr(0, 4),
                numbers: {}
              };
              oTemp.numbers[substitute(o.Afvalsoort)] = o.HoeveelheidHuishoudelijkAfval_1;
              data.push(oTemp);
            }
          }

        });
        console.log(JSON.stringify(data));
        callback(data);
      }).fail(function(ex) {
        console.log(ex);
        callback(null);
      });
  };
}());
