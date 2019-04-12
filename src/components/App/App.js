// Recursos
import React, { Component } from "react";

// Styles
import "./app.scss";

// Components
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

export default class App extends Component {
    state = { showModal: null }
    _openModal = modal => this.setState({ showModal: modal })
    _closeModal = () => this.setState({ showModal: null })    

    render() {   
        const isModal = this.state.showModal;    
        return (
            <div className='l-container'>
                <span className='app__icon' role='img' aria-label='rocket'>🚀🌌</span>
                <h1 className='app__title'>Portal modals</h1>
                <p className='margin-top-10' >Abre los diferentes modales y teletransportate a sus respectivos portales.</p>



                <div className='app__buttons'>
                    <Button      
                        text='Open modal'
                        onClick={() => this._openModal('modal-one')} /> 
                    <Button  
                        extraClass='margin-top-10'      
                        text='Another open modal'
                        onClick={() => this._openModal('modal-two')} />
                </div>



                {isModal === 'modal-one' &&
                    <Modal title='Modal portal 1' onClose={this._closeModal} > 
                        <p>Se ha abierto un modal, cosa de brujería. Me pregunto qué pasará si le doy al icono de la x o al botón chillón de abajo. *ironic mode*</p>
                        <Button                 
                            extraClass='margin-top-20'
                            text='Go modal 2'
                            onClick={() => this._openModal('modal-two')} />
                    </Modal>
                }  



                {isModal === 'modal-two' &&
                    <Modal title='Modal portal 2' onClose={this._closeModal} > 
                        <p>Se ha abierto un segundo modal. Qué inesperado comportamiento de React. Pero, ¿qué veré si inspecciono el DOM? ¿Dónde se renderizará el modal? ¿Cuántos modales a la vez aparecerán?</p>
                        <Button                 
                            extraClass='margin-top-20'
                            text='Go modal 1'
                            onClick={() => this._openModal('modal-one')} />
                    </Modal>
                }                             
            </div>
        );
    }
}