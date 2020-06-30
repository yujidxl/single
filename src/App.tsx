import React from 'react';
import 'swiper/swiper.scss'
import './App.scss';
import Card from './components/card/card';
import List from './components/list/list';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card />
        </header>
        <section>
          <List />
        </section>
      </div>
    );
  }
}

export default App;
