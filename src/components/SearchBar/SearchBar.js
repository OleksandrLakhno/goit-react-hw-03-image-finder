import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class SearchBar extends Component { 
    state = {
        imgName:'',
    };

    hndleNameChange = event => { 
        this.setState({ imgName: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => { 
        event.preventDefault();
        if (this.state.imgName.trim() === '') { 
            alert('Введіть назву картинки котру хочете знайти');
            return;
        };
        this.props.onSubmit(this.state.imgName);
        this.setState({imgName:''});
    };

    render() { 
        return (
            <header className="Searchbar">
                <form className='SearchForm' onSubmit={this.handleSubmit}>
                    <button type="submit" className='SearchForm_button'>
                        <span className='SearchForm_button--label'>Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="imgName"
                        value={this.state.imgName}
                        onChange={this.hndleNameChange}
                    />
                </form>
            </header>
        );
    }
};

SearchBar.propTypes = {
    onSubmit:PropTypes.func.isRequired,
};