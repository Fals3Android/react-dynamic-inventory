import { appState } from '../src/AppState';

beforeEach(() => {
    appState.resetProduct();
});
// TODO: need to mock the etsy api calls
test('Test that setting a product does not result in blank meta data', () => { 
    appState.getEtsyListings();
    appState.setProduct(appState.p);
    const listing_id = appState.currentProduct.listing_id;
    const name = appState.currentProduct.name;
    const description = appState.currentProduct.description;
    const image = appState.currentProduct.image;
    const price = appState.currentProduct.price;
    const rating = appState.currentProduct.rating;
    const reviewCount = appState.currentProduct.reviewCount;
    // expect('').toEqual(expect.not.stringMatching(listing_id));
    // expect('').toEqual(expect.not.stringMatching(name));
    // expect('').toEqual(expect.not.stringMatching(description));
    // expect('').toEqual(expect.not.stringMatching(image));
    // expect('').toEqual(expect.not.stringMatching(price));
    // expect('').toEqual(expect.not.stringMatching(rating));
    // expect('').toEqual(expect.not.stringMatching(reviewCount));
});
