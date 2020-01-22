import React, { Component } from 'react';

import MainView from './MainView';
import OpenModal from './OpenModal';
import Button from 'react-bootstrap/Button';

//import 'bootstrap/dist/css/bootstrap.min.css';

// const fetchTest = fetch('https://wger.de/api/v2/exercise/?limit=100&status=2&language=2&category=13').then((results) => results.json()).then((result) => console.log(result)).catch((err) => console.log(err.message));

const shuffleArray = (array) => {  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 1/22/2020
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: true
    }
    // this.handleClick = this.handleClick.bind(this);
    // this.state = getInitialState();
  }

  setModelShow() {
    if (this.state.modalShow) setState({modalShow: true});
    else setState({modalShow: false })
  }

  // componentDidMount() {
  //   setModalShow(true);
  // }

    // <Button variant="primary" onClick={() => this.setModelShow }>
    //       Launch vertically centered modal
    //     </Button>

  render() {

    // const [modalShow, setModalShow] = React.useState(false);

    return (
      <div>
        <OpenModal
          show={true //this.state.modalShow
          }
          onHide={() => setModalShow(false)}
        />
      </div>
    );
  }
}

export default App;
