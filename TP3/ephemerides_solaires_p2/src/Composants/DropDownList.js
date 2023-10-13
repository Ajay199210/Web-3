import React, { Component } from 'react';

export class DropDownList extends Component {
    handleChange(ev) {
        this.props.onOptionChange(ev.target.value);
    }

    render() {
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
}

export default DropDownList;