import * as React from 'react';
import * as ReactDOM from 'react-dom';
import products from './products';
import { Card, Icon, Image } from 'semantic-ui-react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

class Products {
  @observable p = products;

  @action
  getProduct() {
    const keys = Object.keys(this.p);
    return products[keys[Math.floor((Math.random() * keys.length))]];
  }
}

@observer
class App extends React.Component<{}> {
  data = new Products().getProduct();
  render() {
    return (
      <Card>
        <Image src={this.data.image} />
        <Card.Content>
          <Card.Header>{this.data.name}</Card.Header>
          <Card.Meta>
            <span className='date'></span>
          </Card.Meta>
          <Card.Description>{this.data.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='id badge' />
            {this.data.reviewCount}
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='star' />
            {this.data.rating}
          </a>
        </Card.Content>
        </Card>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

