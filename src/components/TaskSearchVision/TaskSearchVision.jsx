import React from 'react';
import PropTypes from 'prop-types';
import './TaskSearchVision.css';

// TaskSearchVision Component

function TaskSearchVision(props) {

    let { itemClick, currentlyTaskList, currentlyTaskListDOM, searchInputValue, onChange } = props;

    if (currentlyTaskList) {
        for (let i = 0; i < currentlyTaskList.length; i++) {
            if (currentlyTaskList[i].toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1 && searchInputValue.length !== 0) {
                currentlyTaskListDOM.push(<li className='search__item' key={i} onClick={itemClick}>{currentlyTaskList[i]}</li>)
            }
        }
    }

    let choiceList = () => {
        return (currentlyTaskListDOM.length !== 0) && (
            <div className='search__items'>
                <ul className='search__list'>
                    {currentlyTaskListDOM}
                </ul>
            </div>
        )
    }

    // console.log(currentlyTaskList);
    // console.log(currentlyTaskListDOM);


    return (
        <div className='search'>
            <label className='search__label'>
                <span className='search__span'>Enter a serching task:</span>
                <input className='search__input'
                    type="search"
                    value={searchInputValue}
                    onChange={onChange} />
                {choiceList()}
            </label>
        </div>
    )
}

TaskSearchVision.propTypes = {
    currentlyTaskListDOM: PropTypes.array,
    searchInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
};

TaskSearchVision.defaultProps = {
    currentlyTaskListDOM: [],
    searchInputValue: '',
};

export { TaskSearchVision };