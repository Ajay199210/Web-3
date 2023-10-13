import React, { Component } from 'react';
import { coucher, lever, dureeJour, conversionDecJourHeure } from '../Modules/mecaniqueCeleste';
import logoLever from '../Ressources/Lever.png';
import logoCoucher from '../Ressources/Coucher.png';

class Carte extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      today : new Date(),
    }
  }

  // Calculer le lever d'aujourd'hui
  getLever() {
    return conversionDecJourHeure(lever(this.props.ville.latitude, this.props.ville.longitude,
      this.props.ville.decalageHoraire, this.state.today.getDate(),
      this.state.today.getMonth(), this.state.today.getFullYear()));
    }
    
  // Calculer le coucher d'aujourd'hui
  getCoucher() {
    return conversionDecJourHeure(coucher(this.props.ville.latitude, this.props.ville.longitude,
      this.props.ville.decalageHoraire, this.state.today.getDate(),
      this.state.today.getMonth(), this.state.today.getFullYear()));
    }
    
  // Calculer la durée d'aujourd'hui
  getDuree() {
    return dureeJour(this.props.ville.latitude, this.props.ville.longitude,
      this.props.ville.decalageHoraire, this.state.today.getDate(),
      this.state.today.getMonth(), this.state.today.getFullYear());
    }
    
  // Supprimer une carte
  handleSupprimer(ev) {
    // La carte contenant le bouton de suppression est 2 niveaux au dessus
    this.props.onBtnDelete(ev.target.parentElement.parentElement);
  }

  render() {
    return (
      <div className="carte">
        <div className="carteHeader">
          <h2 className="nomVille">{this.props.ville.nom}</h2>
          <button type="button" onClick={this.handleSupprimer.bind(this)}>X</button>
        </div>
        
        <hr />

        <table>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className="icon"><img src={logoLever} alt="Lever" /></td>
              <td></td>
              <td className="lever value">{this.getLever()}</td>
            </tr>
            <tr>
              <td className="icon"><img src={logoCoucher} alt="Coucher" /></td>
              <td></td>
              <td className="coucher value">{this.getCoucher()}</td>
            </tr>
            <tr>
              <td className="icon">Durée : </td>
              <td></td>
              <td className="duree value">{this.getDuree()}</td>
            </tr>
          </tbody>
        </table>
      </div> 
    )
  }
}

export default Carte;