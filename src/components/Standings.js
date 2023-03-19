import React,{useState, useEffect} from 'react'
import { FidgetSpinner } from 'react-loader-spinner'
const Standings = () => {

const [data,setData] = useState([]);
const[selectedLeague,setSelectedLeague] = useState('eng.1');
const [selectedYear,setSelectedYear] = useState("2021");



  return (
    <div className='standings-container'>
      <div className='select-container'>
        <select
          name="select-league"
          id="select-league"
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
          >
            <option value="eng.1">English Premier League</option>
            <option value="fra.1">French Ligue 1</option>
            <option value="ger.1">German Bundesliga</option>
            <option value="ita.1">Italian Seria A</option>
        </select>
        <select

                name="select-year"
                id="select-year"
                defaultValue={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
        </select>




      </div>
      <div className='standing-results'></div>
    </div>
  )
}

export default Standings