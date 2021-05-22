import React from 'react';
import 'swiper/swiper.scss'
import './App.scss';
import Card from './components/card/card';
import List from './components/list/list';

interface Props {

}

interface Istate {

}

class App extends React.Component<Props, Istate> {
  constructor(props: Props) {
    super(props);
  }
  render(): JSX.Element {
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
