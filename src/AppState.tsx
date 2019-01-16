import products from './products';
import { observable, action, computed, runInAction } from 'mobx';
import etsy from './EtsyRetailAPI';

interface ProductListings {
  listing_id: number,
  name: string,
  description: string,
  image: string,
  price: string,
  rating: string,
  reviewCount: string
}

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
        e.fetchLatestInventory().promise.then(
            response => {
              let filteredObj = {
                listing_id: response.results[0].listing_id,
                name: response.results[0].title,
                description: response.results[0].description,
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