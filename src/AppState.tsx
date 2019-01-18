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
  rating: string,
  reviewCount: string
}
//TODO: need to clean up this whole appstate class
class AppState {
    @observable p = {
      listing_id: null,
      name: "",
      description: "",
      image: "",
      price: "",
      rating: "",
      reviewCount: ""
    };
  
    @observable currentProduct: ProductListings = {
      listing_id: null,
      name: "",
      description: "",
      image: "",
      price: "",
      rating: "",
      reviewCount: ""
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
                rating: "",
                reviewCount: ""
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
  
    @action
    setProduct(product) {
      this.currentProduct = product;
    }

    @action
    resetProduct() {
      this.currentProduct = {
        listing_id: null,
        name: "",
        description: "",
        image: "",
        price: "",
        rating: "",
        reviewCount: ""
      }; 
    }
  
    @computed
    get hasFiveStarRating() {
      return this.currentProduct.rating === "5";
    }
  }

  export const appState = new AppState();