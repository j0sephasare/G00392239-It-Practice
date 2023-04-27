import React,{useState, useEffect} from 'react'
import axios from 'axios';

const Standings = () => {

  const [data, setData] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState('39');
  const [selectedYear, setSelectedYear] = useState('2022');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/teams', {
          params: {
            league: selectedLeague,
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
  }, [selectedLeague, selectedYear]);

  return (
    <div className='standings-container'>
      <div className='select-container'>
        <select
          name='select-league'
          id='select-league'
          defaultValue={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          <option value='39'>English Premier League</option>
          <option value='61'>French Ligue 1</option>
          <option value='78'>German Bundesliga</option>
          <option value='135'>Italian Seria A</option>
          <option value='140'>La Liga</option>
        </select>
        <select
          name='select-year'
          id='select-year'
          defaultValue={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          
          <option value='2022'>2022</option>
        </select>
      </div>
      <div className='standing-results'>
        <ul>
          {data.map((team, index) => (
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

export default Standings;