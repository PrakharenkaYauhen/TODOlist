import React from 'react';
import { shallow } from './../../enzyme';

import {WeatherContainer} from './../WeatherContainer.jsx';

let data = {x: 50, y: 30};
let coordinates;
let adress;
let weatherObjectJSON;
let weatherObject;

// jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

let promisData = (data) => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

let fetchData = (data) => {
    return fetch(data)
}

let fetchDataParsing = (data) => {
    return new Promise((resolve, reject) => {
      resolve(data);
    })
}

// const mockSuccessResponse = {};
// const mockJsonPromise = Promise.resolve(mockSuccessResponse);
// const mockFetchPromise = Promise.resolve({ 
//     json: () => mockJsonPromise,
//   });
//   jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

describe('Tests for our fetch and promises requests', () => {
    it('Tests for our promise request to get coordinates from geolocation', () => {

        promisData(data).then(data => {
            coordinates = data;
            let city ='lat=' + coordinates.x + '&lon=' +coordinates.y;
            adress ='http://api.openweathermap.org/data/2.5/weather?' + city + '&units=metric&lang=ru&APPID=2d009bc907c3f547b59f7129beb7c9ee';
            expect(data).toEqual({x: 50, y: 30});
            expect(adress).toBe('http://api.openweathermap.org/data/2.5/weather?lat=50&lon=30&units=metric&lang=ru&APPID=2d009bc907c3f547b59f7129beb7c9ee');
          });
    })

  });

    it('Tests for our fetch request', () => {

        fetchData(adress).then(data => {
          weatherObjectJSON = data;
            // expect(global.fetch).toHaveBeenCalledTimes(1);
            // expect(global.fetch).toHaveBeenCalledWith('http://api.openweathermap.org/data/2.5/weather?lat=50&lon=30&units=metric&lang=ru&APPID=2d009bc907c3f547b59f7129beb7c9ee');
            expect(adress).toBe('http://api.openweathermap.org/data/2.5/weather?lat=50&lon=30&units=metric&lang=ru&APPID=2d009bc907c3f547b59f7129beb7c9ee');
            expect.objectContaining(JSON.parse(weatherObjectJSON));
          });

    });

    it('Tests for convertimg of our fetch request from JSON to object', () => {

      fetchDataParsing(weatherObject).then(data => {
        weatherObject = data;
        expect.objectContaining(weatherObject);
      });

  });