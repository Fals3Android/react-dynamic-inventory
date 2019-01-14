import * as React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { appState } from './AppState';
import { observer } from 'mobx-react';

@observer
class App extends React.Component<{}> {
  render() {
    const product = appState.getProduct();
    appState.setProduct(product);

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
            appState.hasFiveStarRating 
            && <p>Preferred product !!!</p>
          }
        </Card.Content>
        </Card>
    );
  }
}

export default App;

