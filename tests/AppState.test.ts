import { appState } from '../src/AppState';

test('Test that our Product Listings have a default value of none', () => { 
    expect(appState.EtsyProducts.length).toEqual(0);
});
