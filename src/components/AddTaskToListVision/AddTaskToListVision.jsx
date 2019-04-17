import React from 'react';
import { ModalWindowContainer } from './../ModalWindowContainer.jsx';
import './AddTaskToListVision.css';

// AddTaskToListVision Component

function AddTaskToListVision(props) {
    let modalCalendarVision = props.modalCalendarVision,
        modalTextariaValue = props.modalTextariaValue,
        currentLocalStorageKey = props.currentLocalStorageKey,
        todaysTasks = props.todaysTasks;

    return (
        <div className='todo__tasks'>
            <div className='modal-button'>
                <button className='modal-button__button' onClick={props.onDoubleClickOpenModal} >add a new task</button>
            </div>

            <ModalWindowContainer modalCalendarVision={modalCalendarVision}
                modalTextariaValue={modalTextariaValue}
                currentLocalStorageKey={currentLocalStorageKey}
                todaysTasks={todaysTasks}
                onDoubleClickCloseModal={(e) => props.onDoubleClickCloseModal(e)}
                onChange={(e) => props.onChange(e)}
                onReset={(e) => props.onReset(e)} />
        </div>
    );
}

export { AddTaskToListVision };