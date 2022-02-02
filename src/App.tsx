import React from 'react';
import './App.css';
import {QuoteResponse} from './QuoteResponse';
import { WeatherResponse } from './WeatherResponse';

function App() {
  return (
    <div className="App">
      <QuoteResponse></QuoteResponse>
      <WeatherResponse></WeatherResponse>
    </div>
  );
}

export default App;
