import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Team from '../Team/Team';

const Home = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {

        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json())
            .then(data => setTeams(data.teams))

    }, [])

    return (

        <div className="home-wrapper">
            <div className="banner">
                <h1>clubs d'Espanya</h1>
            </div>
            <Container className="home-container">
                {
                    teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                }
            </Container>

        </div>
    );
};

export default Home;