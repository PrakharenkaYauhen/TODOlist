import React from 'react';
// import { shallow } from '../enzyme';
import { shallow } from './../../enzyme';
import { mount } from './../../enzyme';
import renderer from 'react-test-renderer';

import {TaskSearchVision} from './../TaskSearchVision/index.js';

describe('TaskSearchVision tests', () => {
    it('Our list of tasks should apper when we write something in our field', () => {
        const currentlyTaskList = ['a', 'aa', 'aaa'];
        const searchInputValue = 'a';
        const currentlyTaskListDOM = [];

        const itemClick = jest.fn();
        const onChange = jest.fn();

        const wrapper = shallow(<TaskSearchVision 
                itemClick={itemClick}
                currentlyTaskList={currentlyTaskList}
                currentlyTaskListDOM={currentlyTaskListDOM}
                searchInputValue={searchInputValue}
                onChange={onChange}/>);

        console.log(wrapper.debug());
        
        expect(JSON.stringify(currentlyTaskListDOM)).toEqual(JSON.stringify([
        <li className='search__item' key={0} onClick={undefined}>a</li>, 
        <li className='search__item' key={1} onClick={undefined}>aa</li>, 
        <li className='search__item' key={2} onClick={undefined}>aaa</li>]));
        expect(wrapper.find('.search__list')).toBeDefined();
        // expect(wrapper.find('.search__input')).toBe('a');
        expect(wrapper.find('.search__item')).toHaveLength(currentlyTaskList.length);
        expect(wrapper.find('.search__item')).toHaveLength(currentlyTaskListDOM.length);
        expect(wrapper.contains(<li className="search__item" onClick={itemClick}>a</li >)).toBeTruthy();

        wrapper.find('.search__item').at(1).simulate('click');
        expect(itemClick).toHaveBeenCalled();

        wrapper.unmount();
    });
});

// describe('TaskSearchVision tests', () => {
//     it("Our list of tasks shouldn't apper when we don't have anything in a input", () => {
//         const currentlyTaskList = ['a', 'aa', 'aaa'];
//         const searchInputValue = '';
//         const currentlyTaskListDOM = [];
//         const wrapper = shallow(<TaskSearchVision 
//                 currentlyTaskList={currentlyTaskList}
//                 currentlyTaskListDOM={currentlyTaskListDOM}
//                 searchInputValue={searchInputValue}/>);

//         console.log(wrapper.debug());

//         // expect(wrapper.find('.search__items')).not.anything();
//         // expect(wrapper.find('.search__list')).toBeUndefined();
//         expect(wrapper.find('.search__item')).toHaveLength(0);
//         expect(wrapper.contains(<li className="search__item" key={0}>a</li >)).not.toBeTruthy();
//     });
// });

// describe('TaskSearchVision tests', () => {
//     it('Our list of tasks should apper when we write something in our field and now not every strind will contain a string which we are looking for', () => {
//         const currentlyTaskList = ['b', 'aa', 'bbb'];
//         const searchInputValue = 'a';
//         const currentlyTaskListDOM = [];
//         const wrapper = shallow(<TaskSearchVision 
//                 currentlyTaskList={currentlyTaskList}
//                 currentlyTaskListDOM={currentlyTaskListDOM}
//                 searchInputValue={searchInputValue}/>);

//         console.log(wrapper.debug());

//         expect(wrapper.find('.search__list')).toBeDefined();
//         expect(wrapper.find('.search__item')).not.toHaveLength(currentlyTaskList.length);
//         expect(wrapper.find('.search__item')).toHaveLength(currentlyTaskListDOM.length);
//         expect(wrapper.contains(<li className="search__item" key={0}>aa</li >)).toBeTruthy();
//     });
// });

describe('TaskSearchVision tests', () => {
    it('Our input shoud work when it is changed', () => {
        const currentlyTaskList = ['a', 'aa', 'aaa'];
        const searchInputValue = 'a';
        const currentlyTaskListDOM = [];

        const onChange = jest.fn();

        const wrapper = shallow(<TaskSearchVision 
                currentlyTaskList={currentlyTaskList}
                currentlyTaskListDOM={currentlyTaskListDOM}
                searchInputValue={searchInputValue}
                onChange={onChange}/>);

        console.log(wrapper.debug());

        const el = wrapper.find('.search__input');
        el.simulate('change', 'aa');

        expect(onChange).toHaveBeenCalledWith('aa');
        expect(onChange).toHaveBeenCalled();
    });
});

// describe('TaskSearchVision tests', () => {
//     it('Our input shoud work when it is changed', () => {
//         const currentlyTaskList = ['a', 'aa', 'aaa'];
//         const searchInputValue = 'a';
//         const currentlyTaskListDOM = [];

//         const rendered =  renderer.create(<TaskSearchVision 
//                 currentlyTaskList={currentlyTaskList}
//                 currentlyTaskListDOM={currentlyTaskListDOM}
//                 searchInputValue={searchInputValue}/>);

//         expect(rendered.toJSON()).toMatchSnapshot();
//     });
// });