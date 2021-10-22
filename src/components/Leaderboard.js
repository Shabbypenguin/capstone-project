import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import { ButtonGroup, Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';




function Leaderboard(props) {
	const styling = {
		backgroundColor: 'rgba(255, 255, 255, .15)',
		backdropFilter: 'blur(5px)',
		color: 'navy',
		flexDirection: 'row',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'left',
		opacity: '.85',
		border: '2px solid black',
		width: 'auto',
		height: 'auto',
		padding: '10px',
		minWidth: '325px'
	}
	const [firstPlace, setfirstPlace] = useState([])
	const [secondPlace, setsecondPlace] = useState([])
	const [thirdPlace, setthirdPlace] = useState([])
	
	
	useEffect(() => { getLeaderboard() }, [])
	const getLeaderboard = (props) => {
		fetch('https://quiz-wiz-server.glitch.me/api/highscore')
			.then(response => response.json())
			.then(result => {
				console.log(result)
				setfirstPlace(result[0])
				setsecondPlace(result[1])
				setthirdPlace(result[2])
			}
			)
	}

	return (


		<div id="leaderboard-body">
			<NavBar />
			<div id="leaderboard-title">LeaderBoard</div>
			<Row className="HomeBlurb" style={styling}>
				<Carousel fade>
					<Carousel.Item>
					<div style={{ textAlign: "center" }}>
					<img src="leaderboardslider1.png" fluid alt="First slide"	/>
						<Carousel.Caption id="carousel-caption">
							<h3>First Place QuizWiz</h3>
							<p>&#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; You are the Gandalf of all the quiz wizards, a true Quizard!</p>
							{firstPlace.username} : {firstPlace.score}
						</Carousel.Caption>
						</div>
					</Carousel.Item>
					<Carousel.Item>
					<div style={{ textAlign: "center" }}>
					<img src="leaderboardslider1.png" fluid alt="First slide"	/>
						<Carousel.Caption id="carousel-caption">
							<h3>Second Place QuizWiz</h3>
							<p>You are so close to that top spot!</p>
							{secondPlace.username} : {secondPlace.score}
						</Carousel.Caption>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="leaderboardslider1.png" fluid
							alt="Third slide"
						/>
						<Carousel.Caption id="carousel-caption">
							<h3>Third Place QuizWiz</h3>
							<p>Not bad, but you could do better.</p>
							{thirdPlace.username} : {thirdPlace.score}
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Row>
		</div>
	)
}
export default Leaderboard