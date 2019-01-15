import products from './products';
import { observable, action, computed } from 'mobx';

interface ProductListings {
  name: string,
  description: string,
  image: string,
  price: string,
  rating: string,
  reviewCount: string
}

class AppState {
    @observable p = products;
  
    @observable currentProduct: ProductListings = {
      name: "",
      description: "",
      image: "",
      price: "",
      rating: "",
      reviewCount: ""
    };
  
    @action
    getProduct() {
      const keys = Object.keys(this.p);
      return this.p[keys[Math.floor((Math.random() * keys.length))]];
    }
  
    @action
    setProduct(product) {
      this.currentProduct = product;
    }

    @action
    resetProduct() {
      this.currentProduct = {
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