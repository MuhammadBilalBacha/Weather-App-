import { Component } from '@angular/core';
import { WeatherAppService } from './app/weather-app.service';
interface loginForm {
  email: string;
 
}
interface location {
  
  temp : number,
  min : number,
  max : number,
  wind : number,
  humidity: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  email : string = ''
  textinput : string = ''
  weatherdata : any = ''
  weatherInformation : location = {
    temp: 0,
    min: 0,
    max:0,
    wind: 0,
    humidity: 0
  }
  constructor(private weather : WeatherAppService) {}
  weatherCentigrade : number = 14;
  form: loginForm = {
    email: '',
    
  };
  onKey(event: any) { this.textinput = event.target.value;}
  onSubmit() {
  
    this.weather.getWeather(this.textinput)
    this.weatherdata = this.weather.forcastLocation
  console.log(this.weatherdata)
  }
}
