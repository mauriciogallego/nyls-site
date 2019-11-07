//dependences
import React,{Component} from 'react';
import propTypes from 'prop-types';

//componentes
import Header from './global/header';
import Content from './global/content';
import Footer from './global/footer';

class App extends Component{
  static propTypes ={
     children : propTypes.object.isRequired
  }
  render(){ 
    const {children} = this.props;
    return (
      <div className="App">
        <Header />
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;
