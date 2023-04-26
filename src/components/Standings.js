import React,{useState, useEffect} from 'react'
import axios from 'axios';
const Standings = () => {

  const [data, setData] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState('eng.1');
  const [selectedYear, setSelectedYear] = useState('2022');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/teams', {
          params: {
            league: '39',
            season: selectedYear,
          },
          headers: {
            'X-RapidAPI-Key': '1078899fe4mshd46dc715175878dp1a3a95jsna40193cb83aa',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
          },
        });
        setData(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeams();
  }, [selectedYear]);

  const teamsOrder = [
    'Man City',
    'Liverpool',
    'Chelsea',
    'Tottenham',
    'Arsenal',
    'Man United',
    'West Ham',
    'Leicester City',
    'Brighton',
    'Wolves',
    'Newcastle',
    'Crystal Palace',
    'Brentford',
    'Aston Villa',
    'Southampton',
    'Everton',
    'Leeds United',
    'Burnley',
    'Watford',
    'Norwich City',
  ];

  const sortedData = data.sort((a, b) => {
    return teamsOrder.indexOf(a.team.name) - teamsOrder.indexOf(b.team.name);
  });

  return (
    <div className='standings-container'>
      <div className='select-container'>
        <select
          name='select-league'
          id='select-league'
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value='eng.1'>English Premier League</option>
          <option value='fra.1'>French Ligue 1</option>
          <option value='ger.1'>German Bundesliga</option>
          <option value='ita.1'>Italian Seria A</option>
        </select>
        <select
          name='select-year'
          id='select-year'
          defaultValue={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </select>
      </div>
      <div className='standing-results'>
        <ul>
          {sortedData.map((team, index) => (
            <li key={team.team.id}>
              <span>{index + 1}. </span>
              <img src={team.team.logo} alt={team.team.name} />
              {team.team.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Standings