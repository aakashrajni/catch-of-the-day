import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Samplefishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {

  constructor() {
    super()

    this.addFish = this.addFish.bind(this);
    this.loadSample = this.loadSample.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    this.state = {
      fishes : {},
      order  : {}
    }
  }

  addFish(fish){
    //update fish
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish ;
    //set state
    this.setState({ fishes });
  }
  loadSample(){
    this.setState({
      fishes : Samplefishes,
    })
  }
  addToOrder(key){
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
              {
                Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} addToOrder={this.addToOrder} details={this.state.fishes[key]}/>)
              }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSample={this.loadSample}/>
      </div>
    )
  }
}

export default App;
