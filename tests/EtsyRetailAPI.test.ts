import EtsyRetailAPI from '../src/EtsyRetailAPI';
const jsonp = require('jsonp-promise');
const RetailFixture = require('./fixtures/EtsyResponse.fixture.json');

jest.mock('jsonp-promise');

it('should return some inventory', () => {
    const resp = RetailFixture;
    jsonp.mockResolvedValue(resp);
    const etsy = new EtsyRetailAPI();
    return etsy.fetchLatestInventory(1,0).then(
        response => {
            expect(response.results.length).toEqual(2);
    });
  });