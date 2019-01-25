import React, { Component, Fragment } from 'react';
import { fetchWizards } from './service/WizardsService';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import { Switch, Route } from 'react-router-dom';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    }

    this.getWizards = this.getWizards.bind(this);
    this.getQuery = this.getQuery.bind(this);
  }

  componentDidMount() {
    this.getWizards()
  }

  getWizards() {
    fetchWizards()
      .then(data => {
        const newData = data.map((item, index) => { return { ...item, id: index } })

        this.setState({
          results: newData
        })
      })
  }

  getQuery(event) {
    const userQuery = event.currentTarget.value;
    this.setState({
      query: userQuery
    })
  }

  getFilter() {
    const filterResults = this.state.results.filter(item => {
      return (item.name.toUpperCase().includes(this.state.query.toUpperCase()) ? true : false)
    });
    return filterResults;
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() =>
            <Fragment>
              <header className="app__header">
                <h1 className="header__title">Harry Potter Characters</h1>
                <Filter action={this.getQuery} />
              </header>

              <main className="app__main">
                <CharacterList characters={this.getFilter()} />
              </main>
            </Fragment>
          } />

          <Route path="/characters/:id" render={props =>
            <CharacterDetail match={props.match} characters={this.state.results} />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
