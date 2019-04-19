import React from 'react';
import { TaskSearchVision } from './TaskSearchVision/index.js';

// TaskSearchContainer Component

function TaskSearchContainer(props) {
    let currentlyTaskList = [];
    let currentlyTaskListDOM = [];

    let itemClick = (e) => {
        let event = e.target.innerHTML;
        for (let key in localStorage) {
            if (localStorage.getItem(key)) {
                if (JSON.parse(localStorage.getItem(key)).some(item => item === event)) {
                    let dataArray = key.split(' ');
                    let dataString = `${dataArray[0]}, ${+dataArray[1] + 1}, ${dataArray[2]}`;
                    props.handleDateSearchInput(dataString);
                }
            }
        }
    }

    for (let i = 0; i < localStorage.length; i++) {
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        currentlyTaskList = currentlyTaskList.concat(item).sort();
    }

    return <TaskSearchVision
        itemClick={itemClick}
        currentlyTaskList={currentlyTaskList}
        currentlyTaskListDOM={currentlyTaskListDOM}
        searchInputValue={props.searchInputValue}
        onChange={props.onChange} />
}

export { TaskSearchContainer };