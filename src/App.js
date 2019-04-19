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
        // TODO: date / day? (dayOfMonth)
        this.state = {
            currentDate: new Date(),
            currentDayInTheCalendar: new Date().getDate(),
            cells: [],

            modalCalendarVision: false,
            modalTextariaValue: '',

            searchInputValue: '',
        }
    }

    componentDidMount() {

        this.handleChangeSearchInput = (e) => {
            this.setState({
                searchInputValue: e.target.value
            });
            // addEventListener !!!!!!!!!!!!!!!!!!!!!!!!!!          CompDiDMount
            let clickOutsideSearchInput = e => {
                if (!e.target.classList.contains("search__item")) {
                    this.setState({
                        searchInputValue: ''
                    });
                }
                document.removeEventListener('mousedown', clickOutsideSearchInput);
            }
            document.addEventListener('mousedown', clickOutsideSearchInput);
        }

    }

    handleDateSearchInput(data) {
        this.setState({
            currentDate: new Date(data),
            currentDayInTheCalendar: new Date(data).getDate(),
            searchInputValue: '',
        });
    }

    modalCalendarOpenCloseClick() {
        this.setState({ modalCalendarVision: this.state.modalCalendarVision ? false : true });
    }

    handleChangeTextariaValue(e) {
        this.setState({ modalTextariaValue: e ? e.target.value : '' });
    }

    handleResetTextariaValue(e) {
        this.setState({ modalTextariaValue: '' });
    }

    handleChangeYearMonthClick(data) {
        let currentDate = this.state.currentDate;

        switch (data) {
            case 'left':
                this.setState({
                    currentDate: new Date(currentDate.getFullYear() - 1, currentDate.getMonth())
                });
                break;
            case 'right':
                this.setState({
                    currentDate: new Date(currentDate.getFullYear() + 1, currentDate.getMonth())
                });
                break;
            case 'l':
                this.setState({
                    currentDate: new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
                });
                break;
            default:
                this.setState({
                    currentDate: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
                });
                break;
        }

        this.setState({
            currentDayInTheCalendar: 1,
        });
    }

    onClickCell(e) {
        this.setState({
            currentDayInTheCalendar: +e.target.currentDate,
        });
    }

    render() {
        let currentDate = this.state.currentDate,
            currentYear = currentDate.getFullYear(),
            currentMonth = currentDate.getMonth();
        const currentDayInTheCalendar = this.state.currentDayInTheCalendar;
        const cells = this.state.cells;
        const modalCalendarVision = this.state.modalCalendarVision;
        const modalTextariaValue = this.state.modalTextariaValue;

        let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;
        // let currentDonesLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDate + ' done';
        let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));
        let donesTasks = JSON.parse(localStorage.getItem(`${currentLocalStorageKey} done`));
        let searchInputValue = this.state.searchInputValue;


        return (
            <>
                <h1 className='todo__header1'>To-do list</h1>
                <div className='todo'>
                    <TodoCalendar
                        currentDate={currentDate}
                        currentDayInTheCalendar={currentDayInTheCalendar}
                        cells={cells}
                        modalCalendarVision={modalCalendarVision}
                        modalTextariaValue={modalTextariaValue}
                        currentLocalStorageKey={currentLocalStorageKey}
                        todaysTasks={todaysTasks}
                        onClick={(buttonChangeYearMonth, data) => this.handleChangeYearMonthClick(buttonChangeYearMonth, data)}
                        onClickCell={(e) => this.onClickCell(e)}
                        modalCalendarOpenCloseClick={(e) => this.modalCalendarOpenCloseClick(e)}
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
                                modalCalendarOpenCloseClick={(e) => this.modalCalendarOpenCloseClick(e)}
                                onChange={(e) => this.handleChangeTextariaValue(e)}
                                onReset={(e) => this.handleResetTextariaValue(e)} />
                        )}
                </div>
            </>
        )
    }
}

export default TodoList;

