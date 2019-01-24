import React, { Component } from 'react';
import './App.css';
import { fetchWizards } from './service/WizardsService';
import Filter from './components/Filter';
import CharacterList from './components/CharacterList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query:'',
      results: []
    }

  this.getWizards = this.getWizards.bind(this);
  this.getQuery = this.getQuery.bind(this);
  }

  getWizards(){
    fetchWizards()
      .then(data => {
        const newData = data.map((item, index) =>{return {...item,id:index}})

        this.setState({
          results: newData
        })
      })
  }

  getQuery(event){
    const userQuery = event.currentTarget.value;
    this.setState({
      query: userQuery
    })
  }

  getFilter(){
    const filterResults = this.state.results.filter(item =>{
      return (item.name.toUpperCase().includes(this.state.query.toUpperCase())?true :false)
    });
    return filterResults;
  }


  render() {
    return (
      <div className="app">

        <header className="app__header">
          <h1 className="header__title">Harry Potter Characters</h1>
          <Filter action={this.getQuery}/>
        </header>

        <main className="app__main">
          <CharacterList characters={this.getFilter()}/>
        </main>

      </div>
    );
  }

  componentDidMount(){
    this.getWizards()
  }
}

export default App;
