import React, { Component } from 'react';

export class DropDownList extends Component {
    handleChange(ev) {
        this.props.onOptionChange(ev.target.value);
    }

    render() {
        if(this.props.id == null) {
            return (
                <select aria-label="choixVille" name="choixVille" onChange={this.handleChange.bind(this)}>
                    {
                        this.props.options.map((option, index) => {
                            return (
                                <option key={index} value={option.nom}>{option.nom}</option>
                            )
                        })
                    }
                </select>
            )
        }

        return (
            <select aria-label="choixMois" id="mois" onChange={this.handleChange.bind(this)}>
                <option value="">Choix</option>
                {
                    this.props.options.map((option, index) => {
                        return (
                            <option key={index} value={option.nom}>{option.nom}</option>
                        )
                    })
                }
            </select>
        )
    }
}

export default DropDownList;