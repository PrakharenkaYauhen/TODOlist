import React from 'react';
import './TaskSearchVision.css';

// TaskSearchVision Component

function TaskSearchVision(props) {

    let choiceList = () => {
        return (props.currentlyTaskListDOM.length !== 0) && (
            <div className='search__items'>
                <ul className='search__list'>
                    {props.currentlyTaskListDOM}
                </ul>
            </div>
        )
    }

    return (
        <div className='search'>
            <label className='search__label'>
                <span className='search__span'>Enter a serching task:</span>
                <input className='search__input'
                    type="search"
                    value={props.searchInputValue}
                    onChange={props.onChange} />
                {choiceList()}
            </label>
        </div>
    )
}

export { TaskSearchVision };