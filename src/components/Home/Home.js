import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Team from '../Team/Team';
import banner from '../../bannerImagess/banner88.png';



const Home = () => {


    const [teams, setTeams] = useState([]);
    
    useEffect(()=> {

    
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
        .then(res => res.json())
        .then(data=> setTeams(data.teams))

    },[])

  


    const bannerStyle = {

            width: '100%',
            height: '362px',
            textAlign: 'center',
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition : 'center center',
            color : '#FFFFFF',
            display: 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            fontFamily: 'Montserrat',
            fontWeight: '700',
            fontSize: '52px',
            position:'relative'
           


    }
    return (
        <div className="home-body">
            <div style={bannerStyle}>
                <h1 style={{width: '100%',background: 'rgba(0,0,0,.6)',position:'absolute',zIndex:'2',fontSize:'68px',boxShadow:'10px 10px -20px #fff'}}>clubs d'Espanya</h1>
            </div>
            <Container style={{display:'flex',flexWrap:'wrap'}}>
                {
                    teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                }
            </Container>
            
        </div>
    );
};

export default Home;