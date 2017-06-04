import React, { Component } from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSearch: null,
      currentData: null,
      pastSearches: []
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(query) {
    this.setState({
      currentSearch: query
    });

    fetch(`/api/symbol/${query}`)
      .then(res => res.json())
      .then(res => {
        const pastSearches = this.state.pastSearches;
        pastSearches.unshift(res);

        this.setState({
          currentData: res,
          pastSearches: pastSearches
        })
      });
  }

  render() {
    return (
      <div className="app">
        <Header query={this.state.currentSearch} onSearch={this.onSearch} />

        <div className="app__wrapper">
          <Sidebar history={this.state.pastSearches} onClickItem={this.onSearch} />
          <Content data={this.state.currentData} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
