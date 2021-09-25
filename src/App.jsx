import React, { Component } from 'react'
import Navigation from './components/navigation';
import Form from './components/form';
import JsonData from './data/data.json';


export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Form data={this.state.landingPageData.Form} />
      </div>
    )
  }ы
}

export default App;
