import React from 'react';
import Project from '../components/Project';
import { Container, CardGroup, Row } from 'react-bootstrap';
import musicNotes from '../images/MusicNotes.png'
import ttah from '../images/TTAH.png'
import stockNews from '../images/StockNews.png'
import fitnessTracker from '../images/FitnessTracker.png';
import techBlog from '../images/TechBlog.png';
import noteTaker from '../images/NoteTaker.png'

const projects = [
    {
        name: 'Music Notes',
        image: musicNotes,
        deployed: 'https://uncbootcampmusicnotes.herokuapp.com/',
        repo: 'https://github.com/ntjohns1/Music-Notes',
        description: 'Music Notes is an application to help music teachers easily manage their students.',
        tech: 'Written Using Handlebars, RESTful API, Node.js, Express, MySQL'
    },
    {
        name: 'Tabletop Auction House',
        image: ttah,
        deployed: 'https://tabletop-auction-house-2.herokuapp.com/',
        repo: 'https://github.com/smakela13/tabletop-auction-house-react-edition',
        description: 'An auction house interface for roleplaying game masters and players to buy, sell, and trade in-game items for fun and profit.',
        tech: 'Written using JavaScript, React.js, Node.js, Express.js, MongoDB, Mongoose ODM, GraphQL, JSON Web Tokens, Apollo GraphQL, Faker.js, EmailJS, CSS-in-JS, React-Bootstrap, and Heroku with installable PWA functionality.'
    },
    {
        name: 'Stock News',
        image: stockNews,
        deployed: 'https://ntjohns1.github.io/-tock-News/',
        repo: 'https://github.com/ntjohns1/-tock-News',
        description: '$tock News provides the user with a simplistic way to check for current stock market prices and view recent news articles from various outlets relating to that stock.',
        tech: 'Written using Node.js, Express, MySQL, Sequelize'
    },
    {
        name: 'Fitness Tracker',
        image: fitnessTracker,
        deployed: 'https://github.com/ntjohns1/Fitness-Tracker',
        repo: 'https://github.com/ntjohns1/Fitness-Tracker',
        description: 'Fitness Tracker is an app that allows users to view create and track daily workouts.',
        tech: 'Written using Node.js, Express, Mongo.DB, and Mongoose'    
    },
    {
        name: 'Tech Blog',
        image: techBlog,
        deployed: 'https://infinite-atoll-74792.herokuapp.com/',
        repo: 'https://github.com/ntjohns1/tech-blog',
        description: 'CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well',
        tech: 'Written with Handlebars, MySQL, Sequelize, dotenv, bcrypt, Heroku'    
    },
    {
        name: 'Note Taker',
        image: noteTaker,
        deployed: 'https://evening-savannah-32907.herokuapp.com/',
        repo: 'https://github.com/ntjohns1/Note_Taker',
        description: 'An application that can be used to write and save notes built with a simple Express backend.',
        tech: 'Written using HTML, CSS, Node.JS and Express.'    
    },
];

const renderProjects = () => {
    return (
        projects.map((project, i) => {
            return (
                <Project project={project} key={i + Date.now()} />
            );
        })
    );
};

export default function Work() {
    return (
        <Container className='mb-3' fluid>
            <CardGroup id="work">
                <Row xs={1} md={2}>
                    {renderProjects()}
                </Row>
            </CardGroup>
        </Container>
    );
};
