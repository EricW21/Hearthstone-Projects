import axios from 'axios';
import * as React from 'react';

import { TableHeader } from './Components/Table/TableHeader';
import { DataTable } from './Components/Table/DataTable';
import { LineGraph } from './Components/LineGraph';
import {Dropdown} from './Components/dropdown';
import { useState, useEffect } from 'react';


function App() {
  const [fetchResult, setFetchResult] = useState(null);
  const [selectedOption, setSelectedOption] = useState('EBFRLH11');
  function timeDisplay(time) {
    const dateObject = new Date(time);
    const formattedTime = dateObject.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    const formattedYear = dateObject
              .toLocaleDateString('en-US', { year: 'numeric' })
              .substring(2);
    const formattedDate = dateObject.toLocaleDateString('en-US', {
      
      month: 'numeric',
      day: 'numeric'
    });
    return `${formattedDate}/${formattedYear}, ${formattedTime}`;
  }

  useEffect(() => {
   axios.get(
    "https://leaderboard-tracking-express.vercel.app/").then(
      result => setFetchResult(result.data));
  }, []);
  if (!fetchResult){
    return (
      <div>
        Loading
      </div>
    )
  }
  
  let results = fetchResult[selectedOption];
  if (!results){
    results = fetchResult['EBFRLH11']
  }
  
  return (
    <div>
      <LineGraph results={results} />
      <Dropdown
        fetchResult = {fetchResult}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      
      <TableHeader results={results} />
      <DataTable results={results} timeDisplay={timeDisplay} />
      
      
    </div>
  );
}

export default App;