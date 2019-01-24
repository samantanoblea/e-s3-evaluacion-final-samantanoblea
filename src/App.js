import React, { Component } from 'react';
import './App.css';
import { fetchWizards } from './service/WizardsService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.getWizards()

  this.getWizards = this.getWizards.bind(this);
  }

  getWizards(){
    fetchWizards()
      .then(data => {
        this.setState({
          results: data
        })
      })
  };



  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="header__title">Harry Potter Characters</h1>
        </header>
        <main className="app__main">
          <ul className="wizards__list">
            {this.state.results.map(item =>{
              return(
                <li className="wizard__item">
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
