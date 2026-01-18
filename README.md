# A6_Weather-App

A responsive weather application that fetches real-time weather data using the OpenWeatherMap API. This project demonstrates API integration, asynchronous JavaScript programming, and dynamic DOM manipulation.

## Overview

This weather app allows users to search for weather information by city name. It retrieves current weather data from the OpenWeatherMap API and dynamically displays it with an adaptive user interface that changes based on temperature conditions.

## API Integration

### OpenWeatherMap API

The app uses the OpenWeatherMap Weather API to fetch real-time weather data:

- **API Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Method**: GET request with query parameters
- **API Key**: Included in the request URL
- **Response Format**: JSON

### API Implementation Details

```javascript
// API URL construction
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=YOUR_API_KEY`;

// Async function using fetch API
let data = await fetch(apiURL).then(res => res.json());
```

### Data Retrieved from API

The app extracts and displays the following weather data from the API response:

- **City Name** (`data.name`)
- **Country Code** (`data.sys.country`)
- **Temperature** (`data.main.temp`) - Converted from Kelvin to Celsius
- **Weather Description** (`data.weather[0].main`)
- **Visibility** (`data.visibility`) - in meters
- **Wind Speed** (`data.wind.speed`) - in m/s
- **Humidity** (`data.main.humidity`) - in percentage
- **Local Time** - Calculated from `data.dt` and `data.timezone`

### Temperature Conversion

The API returns temperature in Kelvin. The app converts it to Celsius:

```javascript
let temp = (data.main.temp - 273.15).toFixed(0);
```

### Error Handling

The app handles API errors by checking the response code:

```javascript
if(data.cod == 200) {
    // Display weather data
} else {
    // Hide content for invalid city searches
    content.classList.add('hide')
}
```

## Features

- **City Search**: Enter any city name and press Enter to get weather information
- **Dynamic Backgrounds**: Background images change based on temperature:
  - **Hot**: > 25°C
  - **Cool**: 15-25°C
  - **Warm**: 15-20°C
  - **Cold**: ≤ 15°C
- **Real-time Weather Data**: Current conditions, temperature, wind speed, humidity, and visibility
- **Local Time Display**: Calculates and displays local time based on the city's timezone
- **Responsive Design**: Clean, modern UI with smooth transitions

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling, transitions, and responsive design
- **Vanilla JavaScript**: 
  - `fetch()` API for HTTP requests
  - `async/await` for asynchronous operations
  - DOM manipulation for dynamic content updates
- **OpenWeatherMap API**: Weather data source
- **Font Awesome**: Icons for visual elements

## Usage

1. Open `index.html` in a web browser
2. Enter a city name in the search input
3. Press Enter to fetch weather data
4. The app will display current weather conditions with an appropriate background image

## Files Structure

- `index.html` - Main HTML structure
- `app.js` - JavaScript logic including API calls and DOM manipulation
- `styles.css` - CSS styling and animations
- Background images: `hot.jpg`, `cool.jpeg`, `warm.jpg`, `cold.jpg`

## Key Learning Outcomes

This assignment demonstrates:

1. **API Integration**: Making HTTP requests to external REST APIs
2. **Asynchronous Programming**: Using async/await and Promises with the Fetch API
3. **JSON Data Handling**: Parsing and extracting data from API responses
4. **Error Handling**: Managing API errors and invalid responses
5. **Dynamic UI Updates**: Updating DOM elements based on API data
6. **Data Transformation**: Converting units (Kelvin to Celsius) and calculating timezones