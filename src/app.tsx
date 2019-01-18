import * as React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { appState } from './AppState';
import { observer } from 'mobx-react';
const Styles = require('./styles.scss');

@observer
class App extends React.Component<{}> {
  componentWillMount() {
    appState.getEtsyListings(); 
  }

  render() {
    return (
      <div className="ui container centered cards">
        {
          appState.EtsyProducts.map(product => {
            return <Card className="EtsyCard" key={product.listing_id}>
            <Image src={product.image} />
            <Card.Content>
              <Card.Header>{product.name}</Card.Header>
              <Card.Meta> <span className='date'></span></Card.Meta>
              <Card.Description className="description">{product.description}</Card.Description>
            </Card.Content>
            <Card.Content extra><Icon name='dollar' />{product.price}</Card.Content>
            <Card.Content extra><Icon name='id badge' />{product.views}</Card.Content>
            <Card.Content extra><Icon name='star' />{product.num_favorers}</Card.Content>
          </Card>
          })
        }
      </div>
    );
  }
}

export default App;

