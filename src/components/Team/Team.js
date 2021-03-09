import React from 'react';
import './Team.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const {idTeam,strTeam,strSport,strTeamBadge} = props.team;
    return (
        <div style={{textAlign:'center', margin: '20px', background:'#ccc', width:'28%',padding:'10px'}}>
            <div className="club-logo">
                <img style={{width:'30%'}} src={strTeamBadge} alt="logo"/>
            </div>
            <div className="club-info">
                <p><strong>{strTeam}</strong></p>
                <p><small>Sports Type : {strSport}</small></p>
                <Link to={`/teams/${idTeam}`}><Button>Explore &nbsp; <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                <br></br>              
            </div>
        </div>
    );
};

export default Team;