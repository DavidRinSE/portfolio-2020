import React from "react"
import Section from "./Section"
import { makeStyles } from '@material-ui/styles';
import Project from "./Project";
import miniFinanceForeground from '#img/mini-finance/foreground.jpg'
import miniFinanceBackground from '#img/mini-finance/background.jpg'
import miniFinanceBackendForeground from "#img/mini-finance-backend/foreground.jpg"
import readitForeground from '#img/readit/foreground.jpg'
import readitBackground from '#img/readit/background.jpg'

const useStyles = makeStyles(() => ({
    wrapper: {
        // height: '80vh',
        paddingTop: '15px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}));

const Projects = () => {
    const classes = useStyles()
    const projectItems = [
        {
            name: "Mini-Finance",
            foreground: miniFinanceForeground,
            background: miniFinanceBackground,
            description: 'Mini-Finance is a finance pattern charting app made with react. I built this app because I liked the pattern charting built into my banking apps but they weren\'t quite what I wanted them to be. This project ended up being a lot bigger than I expected but I was able to gain real experience with many tools I had been wanting to try.',
            repo: 'https://github.com/DavidRinSE/Mini-Finance',
            live: 'https://mini-finance.davidr.in'
        },
        {
            name: 'Mini-Finance Backend',
            foreground: miniFinanceBackendForeground,
            description: 'I built the entire stack for my Mini-Finance app, and for the backend I decided to try GraphQL for the first time. I had previously built a few fully featured REST APIs and wanted to branch out for this project. I also used Docker for the first time here, and it made working on the project with multiple computers way easier. I learned a lot making this with GraphQL, it was a good chance to exercise my abilities to learn as I progress through a project.',
            repo: 'https://github.com/DavidRinSE/Mini-Finance-API',
            live: 'https://mini-finance.davidr.in'
        },
        {
            name: 'Django Reddit Clone',
            foreground: readitForeground,
            background: readitBackground,
            description: 'As my final capstone project for Kenzie Academy my group made Readit, a Reddit clone made with Django. We only had two weeks to complete the project, and the majority of the focus was on the back end of the application so the front end is very basic. This was a difficult challenge, because the three of us in the group were much more comfortable with Javascript for web applications at the beginning of this project. This was a great opportunity to put the Agile practices we had learned to use in a time-crunch group project and we were very proud of the result. ',
            repo: 'https://github.com/DavidRinSE/Readit-capstone'
        }
    ]
    const projects = projectItems.map(project => <Project data={project}/>)
    return (
        <Section title="Projects">
            <div className={classes.wrapper}>
                {projects}
            </div>
        </Section>
    );
}

export default Projects;