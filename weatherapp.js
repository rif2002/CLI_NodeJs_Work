import readline from 'readline';
import dotenv from 'dotenv';
dotenv.config();

// Base URL for OpenWeather API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Get your API key from .env
const API_KEY = process.env.API_KEY;

// Function to fetch weather data
const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found. Please check the city name.');
    }

    const weatherData = await response.json();

    console.log('\nWeather Information:');
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);

  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Ask user for city
rl.question('Enter city name: ', async (city) => {
  await getWeather(city);
  rl.close();
});
