import React, { Component } from 'react';
import { coucher, lever, dureeJour, conversionDecJourHeure } from '../Modules/mecaniqueCeleste';
import { mois } from '../Data';

class Tableau extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            today: new Date(),
        }
    }

    // Créer la liste de jours correspondante pour le mois en question afin de remplir le tableau
    getListeJours() {
        const listeJours = [];
        if(this.props.mois != null) {
            for(var i = 1 ; i <= this.props.mois.nbJours; i++) {
                listeJours.push(i);
            }
        }

        return listeJours;
    }

    // Calculer l'indice (numéro) du mois correspondant
    getIndiceMois() {
        return mois.indexOf(this.props.mois) + 1;
    }

    // Calculer le lever du jour correspondant
    getLever(jour) {
        return conversionDecJourHeure(lever(this.props.ville.latitude, this.props.ville.longitude,
            this.props.ville.decalageHoraire, jour, this.getIndiceMois(), this.state.today.getFullYear()));
    }

    // Calculer le coucher du jour correspondant
    getCoucher(jour) {
        return conversionDecJourHeure(coucher(this.props.ville.latitude, this.props.ville.longitude,
            this.props.ville.decalageHoraire, jour, this.getIndiceMois(), this.state.today.getFullYear()));
    }

    // Calculer la durée du jour correspondant
    getDuree(jour) {
        return dureeJour(this.props.ville.latitude, this.props.ville.longitude,
            this.props.ville.decalageHoraire, jour, this.getIndiceMois(), this.state.today.getFullYear());
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Jours</th>
                        <th>Lever</th>
                        <th>Coucher</th>
                        <th>Durée</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.getListeJours().map( (jour, index) => {
                        if (this.state.today.getDate() === jour &&
                            this.state.today.getMonth() + 1 === this.getIndiceMois() ) { // getMonth() is zero based
                            return (
                                <tr key={index} className="today">
                                    <td>{jour}</td>
                                    <td>{this.getLever(jour)}</td>
                                    <td>{this.getCoucher(jour)}</td>
                                    <td>{this.getDuree(jour)}</td>
                                </tr>
                            )
                        }
                        
                        return (
                            <tr key={index}>
                                <td>{jour}</td>
                                <td>{this.getLever(jour)}</td>
                                <td>{this.getCoucher(jour)}</td>
                                <td>{this.getCoucher(jour)}</td>
                            </tr>
                        )
                    })
                } 
                </tbody>
            </table>
        )
    }
}

export default Tableau;