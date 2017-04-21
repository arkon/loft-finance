import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this._onKeyPress = this._onKeyPress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.input.value !== nextProps.query) {
      this.input.value = nextProps.query;
    }
  }

  _onKeyPress(e) {
    if (e.charCode == 13) {
      this.props.onSearch(this.input.value);
    }
  }

  render() {
    return (
      <header className="app__header">
        <div className="app__header__logo">
          ( $ ͜ʖ $)
        </div>
        <div className="app__header__search">
          <input
            type="text"
            placeholder="Look up symbol (e.g. GOOG)"
            onKeyPress={this._onKeyPress}
            ref={(input) => this.input = input} />
        </div>
      </header>
    );
  }
}

export default Header;
