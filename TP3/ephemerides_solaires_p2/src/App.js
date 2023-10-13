import React, { Component } from 'react';
import { villes } from './Data';
import DropDownList from './Composants/DropDownList';
import Carte from './Composants/Carte';
import { jourAnnee } from './Modules/mecaniqueCeleste';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      titre : "Éphémérides",
      today : new Date(),
      ville : villes[0], // ville actuelle dans le dropdown
      villes: [] // villes présentes dans le conteneur
    }
  }
  
  // Calculer le numéro du jour de l'année (wrapper function)
  getNumeroJour() {
    return jourAnnee(
      this.state.today.getDate(),
      this.state.today.getMonth() + 1, // getMonth() is zero based
      this.state.today.getFullYear()
    );
  }

  // Changer la ville
  handleVilleChange(nomVille) {
    var villeChoisie = villes.find(v => v.nom === nomVille);
    this.setState({
      ville: villeChoisie
    });
  }
  
  // Traitement du bouton d'ajout
  handleButtonClick() {
    let villes = this.state.villes;
    let villeActuel = this.state.ville;

    if(villes.indexOf(villeActuel) === -1) {
      villes.push(villeActuel);
      this.setState({
        villes: villes
      });
    } else {
        alert("La ville de " + this.state.ville.nom + " est déjà ajoutée")
    }
  }

  // Supprimer une carte
  handleSupprimerCarte(carte) {
    this.setState({
      villes : this.state.villes.filter(
        v => v.nom !== carte.firstElementChild.firstChild.innerText )
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.titre}</h1>
        <h3>Jour {this.getNumeroJour()} de l'année {this.state.today.getFullYear()}</h3>
        <DropDownList options={villes} onOptionChange={this.handleVilleChange.bind(this)} />
        <button type="button" onClick={this.handleButtonClick.bind(this)}>Ajouter</button>
        <div id="conteneur">
          {
            this.state.villes.map((ville, index) => {
                return (
                    <Carte key={index} ville={ville} onBtnDelete={this.handleSupprimerCarte.bind(this)} />
                )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;