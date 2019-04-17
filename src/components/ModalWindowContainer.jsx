import React from 'react';
import { ModalWindow } from './ModalWindow/index.js';

// ModalWindowContainer Component

function ModalWindowContainer(props) {
    let modalCalendarVision = props.modalCalendarVision,
        currentLocalStorageKey = props.currentLocalStorageKey,
        todaysTasks = props.todaysTasks;

    let addTask = () => {
        let tasksList = todaysTasks ? todaysTasks : [];

        tasksList.push(props.modalTextariaValue);

        localStorage.setItem(currentLocalStorageKey, JSON.stringify(tasksList));
        props.onReset();
    }

    return (
        <>
            {modalCalendarVision &&
                <ModalWindow
                    modalTextariaValue={props.modalTextariaValue}
                    onChange={(e) => props.onChange(e)}
                    addTask={addTask}
                    onDoubleClickCloseModal={(e) => props.onDoubleClickCloseModal(e)} />}
        </>
    );
}

export { ModalWindowContainer };