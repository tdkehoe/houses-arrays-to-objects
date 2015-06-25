var code = require('./../houses3.js');

var houses = [ [ 'id', 'year', 'city', 'bedrooms' ],
  [ '3148du38', 1992, 'Boulder', 2 ],
  [ '4d9g72lg', 1906, 'Lafayette', 4 ],
  [ '9fgf7e24', 1976, 'Longmont', 3 ] ];

describe('Test realEstate', function() {
  it('Converts array of arrays with index to an object of objects with index as keys', function() {
    expect(code.realEstate(houses)).toEqual({ '3148du38': { year: 1992, city: 'Boulder', bedrooms: '2' },
      '4d9g72lg': { year: 1906, city: 'Lafayette', bedrooms: '4' },
      '9fgf7e24': { year: 1976, city: 'Longmont', bedrooms: '3' } });
  });
});
