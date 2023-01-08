import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface location {
  name : string,
  temp : number,
  min : number,
  max : number,
  wind : number,
  humidity: number,
  error: string
}
@Injectable({
  providedIn: 'root'
})

export class WeatherAppService {

  constructor(private http : HttpClient) { }
  forcastLocation : location = {
    name : '',
    temp: 0,
    min: 0,
    max:0,
    wind: 0,
    humidity: 0,
    error: ''
  }
  async  getWeather(city : string) {
        this.http.get('')
        const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5f4b59a426msha8c1bfa151c7ceap16324djsn49bf87cee9d3',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};


 await fetch(`https://forecast9.p.rapidapi.com/rapidapi/forecast/${city}/summary/`, options)
	.then(response => response.json())
	.then(response => {
    this.forcastLocation.name = response.location.name;
    let tepm = response.forecast.items[0].temperature.max + response.forecast.items[0].temperature.min 
    this.forcastLocation.temp = tepm / 2;
    this.forcastLocation.max = response.forecast.items[0].temperature.max;
    this.forcastLocation.min = response.forecast.items[0].temperature.min;
    this.forcastLocation.wind =  response.forecast.items[0].wind.max;
    this.forcastLocation.humidity =  response.forecast.items[0].windchill.min;

    
  })
	.catch(err => {
     console.error(err)
     this.forcastLocation.error = err.message
  });
    }
}
