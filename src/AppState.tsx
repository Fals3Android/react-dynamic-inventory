import { observable, action, computed, runInAction} from 'mobx';
import etsy from './EtsyRetailAPI';
const Entities = require('html-entities').AllHtmlEntities;
// Describe the object
interface ProductListings {
  listing_id: number,
  name: string,
  description: string,
  image: string,
  price: string,
  num_favorers: string,
  views: string,
  url: string
}

// Extend the array class to describe an array of objects
interface ProductListings extends Array<ProductListings>{}

class AppState {
    @observable EtsyProducts: ProductListings[] = [];

    @action
    getEtsyListings(listingIndex = 0) {
        const e = new etsy();
        const entities = new Entities();
        e.fetchLatestInventory(12, listingIndex).promise.then(
            response => {
              const filteredProducts = response.results.map(key => {
                  return {
                    listing_id: key.listing_id,
                    name: entities.decode(key.title),
                    description: entities.decode(key.description),
                    image: key.MainImage.url_fullxfull,
                    price: key.price,
                    num_favorers: key.num_favorers || 0,
                    views: key.views || 0,
                    url: key.url
                  }
                });
              runInAction(() => {
                  this.EtsyProducts = filteredProducts;
              });
            },
            error => {
                console.log(error);
            }
        )
    }

    getCurrentProducts() {
        return this.EtsyProducts;
    }
  }

  export const appState = new AppState();