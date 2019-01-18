import products from './products';
import { observable, action, computed, runInAction } from 'mobx';
import etsy from './EtsyRetailAPI';
const Entities = require('html-entities').AllHtmlEntities;

interface ProductListings {
  listing_id: number,
  name: string,
  description: string,
  image: string,
  price: string,
  num_favorers: string,
  views: string
}
//TODO: need to clean up this whole appstate class
class AppState {
    @observable p: ProductListings = {
      listing_id: null,
      name: "",
      description: "",
      image: "",
      price: "",
      num_favorers: "",
      views: ""
    };

    @action
    getEtsyListings() {
        const e = new etsy();
        const entities = new Entities();
        e.fetchLatestInventory().promise.then(
            response => {
              const listing_id_e = response.results[0].listing_id;
              const title_e =  entities.decode(response.results[0].title);
              const description_e = entities.decode(response.results[0].description);
              let filteredObj = {
                listing_id: listing_id_e,
                name: title_e,
                description: description_e,
                image: "",
                price: response.results[0].price,
                num_favorers: response.results[0].num_favorers || 0,
                views: response.results[0].views || 0
              }
              runInAction(() => {
                  this.p = filteredObj
              })
            },
            error => {
                // the alternative ending of this process:...
                console.log(error);
                // runInAction(() => {
                //     this.state = "error"
                // })
            }
        )
    }

    @action
    getListingImage(id) {
      if(id) {
        const e = new etsy();
        e.fetchInventoryImage(id).promise.then(
            response => {
              runInAction(() => {
                  this.p.image = response.results[0].url_fullxfull;
              })
            },
            error => {
                // the alternative ending of this process:...
                console.log(error);
                // runInAction(() => {
                //     this.state = "error"
                // })
            }
        )
      }
    }
  
    // @computed
    // get hasFiveStarRating() {
    //   return this.currentProduct.num_favorers === "5";
    // }
  }

  export const appState = new AppState();