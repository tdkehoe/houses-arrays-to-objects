var houses = [ [ 'id', 'year', 'city', 'bedrooms' ],
  [ '3148du38', 1992, 'Boulder', 2 ],
  [ '4d9g72lg', 1906, 'Lafayette', 4 ],
  [ '9fgf7e24', 1976, 'Longmont', 3 ] ];

var output =
  { '3148du38': { year: 1992, city: 'Boulder', bedrooms: '2' },
    '4d9g72lg': { year: 1906, city: 'Lafayette', bedrooms: '4' },
    '9fgf7e24': { year: 1976, city: 'Longmont', bedrooms: '3' } };

module.exports = {
  realEstate: function(houses) {

    var house1 = {};
    var house2 = {};
    var house3 = {};
    var outerObject = {};

    houses[1][3] = houses[1][3].toString();
    houses[2][3] = houses[2][3].toString();
    houses[3][3] = houses[3][3].toString();

    house1[houses[0][1]] = houses[1][1]; // Object {year: 1992}
    house1[houses[0][2]] = houses[1][2]; // Object {year: 1992, city: "Boulder"}
    house1[houses[0][3]] = houses[1][3]; // Object {year: 1992, city: "Boulder", bedrooms: 2}

    house2[houses[0][1]] = houses[2][1]; // Object {year: 1906}
    house2[houses[0][2]] = houses[2][2]; // Object {year: 1906, city: "Lafayette"}
    house2[houses[0][3]] = houses[2][3]; // Object {year: 1906, city: "Lafayette", bedrooms: 4}

    house3[houses[0][1]] = houses[3][1]; // Object {year: 1976}
    house3[houses[0][2]] = houses[3][2]; // Object {year: 1976, city: "Longmont"}
    house3[houses[0][3]] = houses[3][3]; // Object {year: 1976, city: "Longmont", bedrooms: 3}

    outerObject[houses[1][0]] = house1; // Object {3148du38: Object}
    outerObject[houses[2][0]] = house2; // Object {3148du38: Object, 4d9g72lg: Object}
    outerObject[houses[3][0]] = house3; // Object {3148du38: Object, 4d9g72lg: Object, 9fgf7e24: Object}

    return outerObject;           // Object {3148du38: Object, 4d9g72lg: Object, 9fgf7e24: Object}

  }
};
