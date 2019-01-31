import * as nock from 'nock';
import EtsyRetailAPI from '../src/EtsyRetailAPI';

beforeEach(() => {
    // nock('https://openapi.etsy.com')
    //   .get('/v2/listings/active.js')
    //   .query({params: {
    //         api_key: placeHolderAPIKEY,
    //         limit: "1",
    //         offset: "0",
    //         includes: "MainImage"
    //     }
    //   })
    //   .reply(200, {
    //     results: [{name: 'test'}],
    //   });    
})

it('should return some inventory', () => {
    const etsy = new EtsyRetailAPI();
    let results = etsy.fetchLatestInventory(1,0);
    expect(typeof results.promise).toEqual('object');
  });