var houses = [ [ 'id', 'year', 'city', 'bedrooms' ],
  [ '3148du38', 1992, 'Boulder', 2 ],
  [ '4d9g72lg', 1906, 'Lafayette', 4 ],
  [ '9fgf7e24', 1976, 'Longmont', 3 ] ];

module.exports = {
  realEstate: function(houses) {

    var outerObject = {};

    for (var i = 1; i < houses.length; i++) {
      houses[i][3] = houses[i][3].toString();
    }

    for (var i = 1; i < houses.length; i++) {
      var house = {};
      for (var j = 1; j < houses[0].length; j++) {
        house[houses[0][j]] = houses[i][j];
      }
      outerObject[houses[i][0]] = house;
    }

    return outerObject;

  }
};
