import React, { Component } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component { 

    componentDidMount() { 
        window.addEventListener('keydown',this.handleKeyDown);
    };

    componentWillUnmount() { 
        window.removeEventListener('keydown',this.handleKeyDown);
    };

    handleKeyDown = e => { 
        console.log(e.code);
        if (e.code === 'Escape') { 
            this.props.onClose();
        };
    };

    handleBackDropClick = e => { 
        console.log('backDrop click');
        if (e.currentTarget === e.target) { 
            this.props.onClose();
        };
        console.log(e.currentTarget);
        console.log(e.target);
    };

    render() { 
        console.log(this.props.largeImage);
        return createPortal(
            <div className="Overlay" onClick={this.handleBackDropClick}>
                <div className="Modal">
                    <img src={this.props.largeImage } alt='#' />
                </div>
            </div>,
            modalRoot
        )
    };
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImage:PropTypes.string.isRequired,
};