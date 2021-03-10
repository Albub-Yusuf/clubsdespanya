import React from 'react';
import './Team.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Team = (props) => {

    const { idTeam, strTeam, strSport, strTeamBadge } = props.team;

    return (
        <div className="team-card">
            <div className="team-card-content">
                <div className="club-logo">
                    <img src={strTeamBadge} alt="logo" />
                </div>
                <div className="club-info">
                    <h5><strong>{strTeam}</strong></h5>
                    <p><small>Sports Type : {strSport}</small></p>
                    <Link to={`/teams/${idTeam}`}><Button className="team-card-btn">Explore &nbsp; <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Team;