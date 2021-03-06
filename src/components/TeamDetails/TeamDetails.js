import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import male from '../../images/male.png';
import female from '../../images/female.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFutbol, faFlag, faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const TeamDetails = () => {

    const id = useParams();
    const teamId = id.id;

    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams))

    }, [teamId])

    //Declared & set variables for props destructuring

    let idTeam, strLeague, strTeamBanner, strAlternate, intFormedYear, strSport, strCountry, strFacebook, strTwitter, strDescriptionEN, strGender, strYoutube, strTeamBadge;
    teamDetails.map(td => {

        return { idTeam, strTeamBanner, intFormedYear, strAlternate, strSport, strLeague, strCountry, strFacebook, strTwitter, strDescriptionEN, strGender, strYoutube, strTeamBadge } = td;

    })

    //declare social links variable
    let youtubeLink, twitterLink, facebookLink;

    //set up social links values
    if (strYoutube || strFacebook || strTwitter) {
        youtubeLink = 'https://' + strYoutube;
        twitterLink = 'https://' + strTwitter;
        facebookLink = 'https://' + strFacebook;

    } else {
        youtubeLink = 'https://www.boostability.com/content/wp-content/uploads/sites/2/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg';
        twitterLink = 'https://www.boostability.com/content/wp-content/uploads/sites/2/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg';
        facebookLink = 'https://www.boostability.com/content/wp-content/uploads/sites/2/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg';

    }

    //set dynamic banners style
    const teamBannerStyle = {

        width: '100%',
        height: '362px',
        textAlign: 'center',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage: `url('${strTeamBanner}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',



    }


    // Conditional Rendering part starts here
    //set variable for conditional Rendering
    let teamPhoto, gender, teamInfoStyle;



    if (strGender === "Male") {

        teamInfoStyle = { backgroundColor: '#048654' }
        teamPhoto = <img style={{ width: '100%', borderRadius: '20px' }} src={male} />
        gender = <FontAwesomeIcon icon={faMars}></FontAwesomeIcon>

    }
    else if (strGender === "Female") {

        teamInfoStyle = { backgroundColor: '#FC4D57' }
        gender = <FontAwesomeIcon icon={faVenus}></FontAwesomeIcon>
        teamPhoto = <img style={{ width: '100%', borderRadius: '20px' }} src={female} />
    }


    return (


        <div className="team-details-wrapper">
            {/* Banner */}
            <div style={teamBannerStyle}>
                <div className="banner-content">
                    <div className="banner-content-logo">
                        <Link to="/home">
                            <img src={strTeamBadge} alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>

            <Container className="details-container">

                {/* Team Brief info */}
                <Container className="team-brief-info" style={teamInfoStyle}>
                    <div className="team-data">
                        <h3>{strAlternate}</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;  Founded : {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> &nbsp;  Country : {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> &nbsp;  Sport Type : {strSport}</p>
                        <p>{gender} &nbsp;  Gender : {strGender}</p>
                    </div>

                    <div className="team-photo">
                        {
                            teamPhoto
                        }
                    </div>
                </Container>

                {/* Team Description */}
                <Container className="team-history">
                    <p>{strDescriptionEN}</p>
                </Container>

                {/* Social Info */}
                <Container className="social-info" style={{ marginTop: '25px' }}>

                    <div className="social-icon-wrapper">

                        <div className="social-icon">
                            <a target="_blank" href={twitterLink}><span className="twitter-icon"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span></a>
                        </div>

                        <div className="social-icon">
                            <a target="_blank" href={facebookLink}><span className="facebook-icon"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></span></a>
                        </div>

                        <div className="social-icon">
                            <a target="_blank" href={youtubeLink}><span className="youtube-icon"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></span></a>
                        </div>

                    </div>
                    <br></br><br></br>
                </Container>

            </Container>

        </div>
    );
};

export default TeamDetails;