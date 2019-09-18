import Axios from 'axios';
import React from 'react';
import Welcome from './Welcome.jsx';
import Start from './Start.jsx';
import Courtroom from './Courtroom.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // start model
      startVisible: true,
      defendentName: '',
      defendentAge: 0,
      defendentSex: '',
      defendentCrime: '',
      defendentPlea: '',
      disclaimerAgreement: false,
      jurorId: 1,
      jurorName: '',
      jurorAge: 0,
      jurorSex: '',
      jurorOccupation: '',
      jurorImg: ''
    };

    this.handleFormInput = this.handleFormInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const name = event.target.name;
    const juror = this.state.jurorId;

    if (name === 'next' && juror < 20) {
      this.setState({ jurorId: this.state.jurorId + 1 });
    } else if (name === 'next' && juror === 20) {
      this.setState({ jurorId: 1 });
    }

    if (name === 'prev' && juror > 1) {
      this.setState({ jurorId: this.state.jurorId - 1 });
    } else if (name === 'prev' && juror === 1) {
      this.setState({ jurorId: 20 });
    }

    Axios.post('/juror', { jurorId: this.state.jurorId })
      // .then(res => this.setState({ jurorImg: res.data.results[0].picture.large}))
      .then(res =>
        this.setState({
          jurorName: res.data.name,
          jurorAge: res.data.age,
          jurorSex: res.data.sex,
          jurorOccupation: res.data.occupation
        })
      )
      .catch(err => console.log(err));
  }

  handleFormInput(e) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        {/* <Welcome /> */}
        <Start
          handleFormInput={this.handleFormInput}
          handleClick={this.handleClick}
          img={this.state.jurorImg}
        />
        {/* <Courtroom /> */}
      </div>
    );
  }
}

export default App;
