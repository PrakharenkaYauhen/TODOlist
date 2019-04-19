import React, { Component } from 'react';
// import natureImage from './natures-temples.jpg';
import './App.css';

// Links to my Components
import { TodoCalendar } from './components/TodoCalendar.jsx';
import { TaskListVision } from './components/TaskListVision.jsx';
import { AddTaskToListVision } from './components/AddTaskToListVision/index.js';
import { WeatherContainer } from './components/WeatherContainer.jsx';
import { TaskSearchContainer } from './components/TaskSearchContainer.jsx';


// TodoList component

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: new Date(),
            currentDate: new Date().getDate(),
            cells: [],

            modalCalendarVision: false,
            modalTextariaValue: '',

            searchInputValue: '',
        }
    }

    handleDateSearchInput(data) {
        console.log(data);
        this.setState({
            currentDay: new Date(data),
            currentDate: new Date(data).getDate(),
            searchInputValue: '',
        });
    }

    handleChangeSearchInput(e) {
        this.setState({
            searchInputValue: e.target.value
        });
        // addEventListener !!!!!!!!!!!!!!!!!!!!!!!!!!          CompDiDMount
        document.onmousedown = (e) => {
            if (!e.target.classList.contains("search__item")) {
                this.setState({
                    searchInputValue: ''
                });
            }
        };
    }

    modalCalendarOpenClick() {
        this.setState({ modalCalendarVision: true });
    }

    modalCalendarCloseClick() {
        this.setState({ modalCalendarVision: false });
    }

    handleChangeTextariaValue(e) {
        if(e) {
            this.setState({
                modalTextariaValue: e.target.value
            });
        } else {
            this.setState({
                modalTextariaValue: ''
            });
        }
       
    }

    handleResetTextariaValue(e) {
        this.setState({
            modalTextariaValue: ''
        });
    }

    handleChangeYearMonthClick(e) {
        let currentDay = this.state.currentDay;

        if (e.target.innerHTML === 'left') {
            this.setState({
                currentDay: new Date(currentDay.getFullYear() - 1, currentDay.getMonth())
            });
        } else if (e.target.innerHTML === 'right') {
            this.setState({
                currentDay: new Date(currentDay.getFullYear() + 1, currentDay.getMonth())
            });
        } else if (e.target.innerHTML === 'l') {
            this.setState({
                currentDay: new Date(currentDay.getFullYear(), currentDay.getMonth() - 1)
            });
        } else if (e.target.innerHTML === 'r') {
            this.setState({
                currentDay: new Date(currentDay.getFullYear(), currentDay.getMonth() + 1)
            });
        }
        this.setState({
            currentDate: 1,
        });
    }

    onClickCell(e) {
        this.setState({
            currentDate: +e.target.innerHTML,
        });
    }

    render() {
        let currentDay = this.state.currentDay,
            currentYear = currentDay.getFullYear(),
            currentMonth = currentDay.getMonth();
        const currentDate = this.state.currentDate;
        const cells = this.state.cells;
        const modalCalendarVision = this.state.modalCalendarVision;
        const modalTextariaValue = this.state.modalTextariaValue;

        let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDate;
        // let currentDonesLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDate + ' done';
        let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));
        let donesTasks = JSON.parse(localStorage.getItem(`${currentLocalStorageKey} done`));
        let searchInputValue = this.state.searchInputValue;


        return (
            <>
                <h1 className='todo__header1'>To-do list</h1>
                <div className='todo'>
                    <TodoCalendar
                        currentDay={currentDay}
                        currentDate={currentDate}
                        cells={cells}
                        modalCalendarVision={modalCalendarVision}
                        modalTextariaValue={modalTextariaValue}
                        currentLocalStorageKey={currentLocalStorageKey}
                        todaysTasks={todaysTasks}
                        onClick={(e) => this.handleChangeYearMonthClick(e)}
                        onClickCell={(e) => this.onClickCell(e)}
                        onDoubleClickOpenModal={(e) => this.modalCalendarOpenClick(e)}
                        onDoubleClickCloseModal={(e) => this.modalCalendarCloseClick(e)}
                        onChange={(e) => this.handleChangeTextariaValue(e)}
                        onReset={(e) => this.handleResetTextariaValue(e)} />
                    <WeatherContainer />
                    <TaskSearchContainer
                        searchInputValue={searchInputValue}
                        onChange={(e) => this.handleChangeSearchInput(e)}
                        handleDateSearchInput={(data, e) => this.handleDateSearchInput(data, e)} />
                    {(todaysTasks || donesTasks) ?
                        (
                            <TaskListVision
                                currentLocalStorageKey={currentLocalStorageKey}
                                todaysTasks={todaysTasks}
                                donesTasks={donesTasks}
                                onReset={(e) => this.handleChangeTextariaValue(e)} /> // !!!!!!!
                        ) : (
                            <AddTaskToListVision
                                modalCalendarVision={modalCalendarVision}
                                modalTextariaValue={modalTextariaValue}
                                currentLocalStorageKey={currentLocalStorageKey}
                                todaysTasks={todaysTasks}
                                onDoubleClickOpenModal={(e) => this.modalCalendarOpenClick(e)}
                                onDoubleClickCloseModal={(e) => this.modalCalendarCloseClick(e)}
                                onChange={(e) => this.handleChangeTextariaValue(e)}
                                onReset={(e) => this.handleResetTextariaValue(e)} />
                        )}
                </div>
            </>
        )
    }
}

export default TodoList ;

