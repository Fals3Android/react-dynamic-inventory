import * as React from 'react';
import products from './products';
import { Card, Icon, Image } from 'semantic-ui-react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

class Products {
  @observable p = products;

  @observable currentProduct = {
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

  @computed
  get hasFiveStarRating() {
    return parseInt(this.currentProduct.rating) === 5;
  }
}

@observer
class App extends React.Component<{}> {
  data = new Products();
  render() {
    const product = this.data.getProduct();
    this.data.setProduct(product);

    return (
      <Card>
        <Image src={product.image} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>
            <span className='date'></span>
          </Card.Meta>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='id badge' />
            {product.reviewCount}
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='star' />
            {product.rating}
          </a>
          { 
            this.data.hasFiveStarRating 
            && <p>Preferred product !!!</p>
          }
        </Card.Content>
        </Card>
    );
  }
}

export default App;

