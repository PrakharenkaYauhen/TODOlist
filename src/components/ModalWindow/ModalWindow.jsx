import React from 'react';
import './ModalWindow.css';

// ModalWindow Component

function ModalWindow(props) {

    return (<div className='modal__cover'>
        <div className='modal'>
            <h2 className='modal__header'>Please, add a new task</h2>
            <label className='modal__textarea_label'>Your new task:
            <textarea className='modal__textarea'
                    ref={input => input && input.focus()}
                    value={props.modalTextariaValue}
                    onChange={props.onChange} >
                </textarea>
            </label>
            <button className='modal__button_enter'
                onClick={props.addTask}>
                add a new task
        </button>
            <button className='modal__button_exit'
                onClick={props.onClickCloseModal}>
                x
        </button>
        </div>
    </div>);
}

export { ModalWindow };