import React, { Component } from 'react';
import './App.css';
import { fetchWizards } from './service/WizardsService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query:'',
      results: []
    }
    this.getWizards()

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
  };

  getQuery(event){
    const userQuery = event.currentTarget.value;
    this.setState({
      query: userQuery
    })
  }

  getFilter(){
    const filterResults = this.state.results.filter(item =>{
    
    return (item.name.includes(this.state.query)?true :false)
    });
    return filterResults;
  }


  render() {
    const filterResults = this.getFilter();
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header__title">Harry Potter Characters</h1>
          <input className="header__filter" onKeyUp={this.getQuery}></input>
        </header>
        <main className="app__main">
          <ul className="wizards__list">
            {filterResults.map(item =>{
              return(
                <li className="wizard__item" key={item.id}>
                  <div className="">
                    <h2 className="wizard__name">{item.name}</h2>
                    <img className="wizard__image" src={item.image} alt={item.name}></img>
                    <p className="wizard__house">{item.house}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
