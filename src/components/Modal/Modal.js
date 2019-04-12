import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

import "./modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export class Modal extends Component {
    static propTypes = {
		title: PropTypes.string,
		children: PropTypes.array
    };

    render() {
		const { title, children, onClose } = this.props;

        // creación de portal del modal
        return ReactDOM.createPortal(
            <div className="c-modal">
                <div className="c-modal__container">
                    <div className="c-modal__header">
                        <h2 className="c-modal__title">{title}</h2>
                        <FontAwesomeIcon
                            icon="times"
                            className="c-modal__close" 
							onClick={onClose}/>
                    </div>
                    <div className="c-modal__content">{children}</div>
                </div>
			</div>,
			document.getElementById('modal')
        );
    }
}
