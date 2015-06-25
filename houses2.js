var houses = [ [ 'id', 'year', 'city', 'bedrooms' ],
  [ '3148du38', 1992, 'Boulder', 2 ],
  [ '4d9g72lg', 1906, 'Lafayette', 4 ],
  [ '9fgf7e24', 1976, 'Longmont', 3 ] ];

module.exports = {
  realEstate: function(houses) {

    var house1 = {};
    var house2 = {};
    var house3 = {};
    var outerObject = {};

    for (var i = 1; i < houses.length; i++) {
      houses[i][3] = houses[i][3].toString();
    }

    for (var i = 1; i < houses[0].length; i++) {
      house1[houses[0][i]] = houses[1][i];
    }

    for (var i = 1; i < houses[0].length; i++) {
      house2[houses[0][i]] = houses[2][i];
    }

    for (var i = 1; i < houses[0].length; i++) {
      house3[houses[0][i]] = houses[3][i];
    }

    outerObject[houses[1][0]] = house1;
    outerObject[houses[2][0]] = house2;
    outerObject[houses[3][0]] = house3;

    return outerObject;

  }
};
