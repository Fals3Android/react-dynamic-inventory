import * as React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { appState } from './AppState';
import { observer } from 'mobx-react';

// Placeholder styles till I get sass working
const Styles = {
  wordWrap: 'break-word'
}

@observer
class App extends React.Component<{}> {
  componentWillMount() {
    appState.getEtsyListings(); 
  }

  render() {
    const product = appState.p;
    appState.setProduct(appState);
    appState.getListingImage(appState.p.listing_id);
    return (
      <div className="ui container centered card">
      <Card>
        <Image src={product.image} />
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>
            <span className='date'></span>
          </Card.Meta>
          <Card.Description style={Styles}>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='id badge' />
            {product.reviewCount}
          </a>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='dollar' />
            {product.price}
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
        </div>
    );
  }
}

export default App;

