import React from 'react';
import { TaskVision } from './TaskVision/index.js';

// TaskListVision Component

function TaskListVision(props) {
    let currentLocalStorageKey = props.currentLocalStorageKey,
        todaysTasks = props.todaysTasks,
        donesTasks = props.donesTasks;

    let todaysTasksList = () => {
        let tasks = [];
        for (let i = 0; i < todaysTasks.length; i++) {
            tasks.push(<TaskVision currentLocalStorageKey={currentLocalStorageKey} task={todaysTasks[i]} onReset={(e) => props.onReset(e)} key={i} />);
        }
        return <ul className='todo__tasks__list'>{tasks}</ul>;
    }

    let donesTasksList = () => {
        let tasks = [];
        for (let i = 0; i < donesTasks.length; i++) {
            tasks.push(<TaskVision currentLocalStorageKey={currentLocalStorageKey} task={donesTasks[i]} onReset={(e) => props.onReset(e)} key={i} />); // !!!!!!!!!! wrong currentLocalStorageKey
        }
        return <ul className='todo__tasks__list'>{tasks}</ul>;
    }

    return (
        <div className='todo__tasks'>
            {todaysTasks && <><h2 className='todo__header2'>Today's tasks</h2>
                {todaysTasksList()}</>}
            {donesTasks && <><h2 className='todo__header2'>Today's done's tasks</h2>
                {donesTasksList()}</>}
        </div>
    )
}

export { TaskListVision };