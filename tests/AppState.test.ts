import { appState } from '../src/AppState';
import EtsyRetailAPI from '../src/EtsyRetailAPI';
const jsonp = require('jsonp-promise');

jest.mock('jsonp-promise', () => {
    return jest.fn(() => {
        return {
            promise: new Promise(resolve => {
                    const RetailFixture = require('./fixtures/EtsyResponse.fixture.json');  
                    resolve(RetailFixture);
                })
            }
    });
});

test('Test that our Product Listings have a default value of none', () => { 
    expect(appState.EtsyProducts.length).toEqual(0);
});

describe('Populate the store', () => {
    beforeEach(() => {
        appState.getEtsyListings();
    });
    test('Test that we can populate product listings', () => { 
        let stub = [ 
            { 
                listing_id: 665703638,
                name: '50s Dress With Pockets Navy Blue Rockabilly Dress Striped 1950s Dress Vintage Pinstripe Floral Lace House Day Cocktail Party Midi Maxi Dress',
                description: 'Vintage 50s day house cocktail party midi dress.\nBlousy button front bodice with lace trimmed collar.\nGathered and fitted waist with slim, draped skirt.\nNavy pinstriped cotton blend material.\n\nsize estimate: M/L\nshoulders: 15.5"\nbust: 43"\nwaist: 33"\nhips: -\ntotal length: 46”\n\n\n\nModel is 5\'9" and measures 32" bust, 24" waist, 35" hips\nBelts and other accessories are not included.',
                image: 'https://i.etsystatic.com/5827550/r/il/9fbcc0/1812697015/il_fullxfull.1812697015_idju.jpg',
                price: '64.00',
                num_favorers: 0,
                views: 0,
                url: 'https://www.etsy.com/listing/665703638/50s-dress-with-pockets-navy-blue?utm_source=dynamicinventoryapp&utm_medium=api&utm_campaign=api' 
            },
            { 
                listing_id: 679543357,
                name: 'New baby, Congratulations, New little bundle, Beautiful bassinet, Baby card, Blessings, Precious, Little child, Infant, Copic colored, Pink',
                description: 'I had this large stamp of this baby in this beautiful bassinet.',
                image: 'https://i.etsystatic.com/12155707/r/il/4a16f7/1765232018/il_fullxfull.1765232018_jby6.jpg',
                price: '3.75',
                num_favorers: 0,
                views: 0,
                url: 'https://www.etsy.com/listing/679543357/new-baby-congratulations-new-little?utm_source=dynamicinventoryapp&utm_medium=api&utm_campaign=api' 
            } 
        ];
        expect(appState.getCurrentProducts()[0]).toEqual(stub[0]);
        expect(appState.getCurrentProducts()[1]).toEqual(stub[1]);
    });
});
