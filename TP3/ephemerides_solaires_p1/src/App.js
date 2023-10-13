import React, { Component } from 'react';
import { villes, mois } from './Data';
import DropDownList from './Composants/DropDownList';
import Tableau from './Composants/Tableau';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titre : "Lever et coucher du soleil",
      today : new Intl.DateTimeFormat('fr-CA', { dateStyle: 'full', timeZone: 'Canada/Eastern' }).format(new Date()),
      ville : villes[0],
      mois: null,
    }
  }

  handleVilleChange(nomVille) {
    var villeChoisie = villes.find(v => v.nom === nomVille);
    // console.log(villeChoisie);
    this.setState({
      ville: villeChoisie,
      mois: null
    });
    document.getElementById("mois").value = '';
  }

  handleMoisChange(nomMois) {
    var moisChoisi = mois.find(m => m.nom === nomMois);
    // console.log(moisChoisi);
    this.setState({
      mois: moisChoisi
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.titre}</h1>
        <DropDownList options={villes} onOptionChange={this.handleVilleChange.bind(this)} />
        <DropDownList options={mois} onOptionChange={this.handleMoisChange.bind(this)} id="" /> {/* id is a placeholder to render the element (voir DropDownList)*/}
        <h3>Calendrier <span>{this.state.ville.nom}</span> - le {this.state.today}</h3>
        <Tableau ville={this.state.ville} mois={this.state.mois} />
      </div>
    );
  }
}

export default App;