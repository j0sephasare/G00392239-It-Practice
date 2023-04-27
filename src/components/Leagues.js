import React,{useState,useEffect} from 'react'
import '../App.css';
import axios from 'axios';
const Leagues = () => {
    const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '1078899fe4mshd46dc715175878dp1a3a95jsna40193cb83aa',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        const filteredLeagues = response.data.response.filter((league) =>
          [39, 78, 135, 61,140].includes(league.league.id)
        );
        setLeagues(filteredLeagues);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLeagues();
  }, []);

  return (
    <div>
      {leagues.map((league) => (
        <img src={league.league.logo} alt={league.league.name} key={league.league.id} />
      ))}
    </div>
  );
};
export default Leagues;