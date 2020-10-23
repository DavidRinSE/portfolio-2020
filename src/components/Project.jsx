import React from "react"
import { makeStyles } from '@material-ui/styles';
import "./ProjectAnimations.css"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '29vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px',
        [theme.breakpoints.down('sm')]: {
            width: '90vw'
        }
    },
    title: {
        fontSize: '1.25em',
        fontFamily: "'Sora', sans-serif",
        fontWeight: '400',
        textAlign: 'center',
        margin: '12px 0px'
    },
    singleImageWrap: {
        width: '80%',
        '& img': {
            width: '100%'
        }
    },
    text: {
        width: '85%',
        fontSize: '0.90em',
        fontFamily: 'Montserrat',
        lineHeight: '1.15em'
    },
    links: {
        margin: '12px 0px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        '& a': {
            textDecoration: 'none',
            color: 'black',
            textTransform: 'uppercase',
            fontSize: '0.85em',
            fontFamily: 'Montserrat',
            fontWeight: '500',
            padding: '4px 7px',
            border: '1px solid black',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
        },
    },
    link1: {
        '&:hover': {
            backgroundColor: '#c64349',
            borderColor: '#c64349',
            color: 'white'
        }
    },
    link2: {
        '&:hover': {
            backgroundColor: '#c64349',
            borderColor: '#c64349',
            color: 'white'
        }
    },
    link3: {
        '&:hover': {
            backgroundColor: '#c64349',
            borderColor: '#c64349',
            color: 'white'
        }
    }
}));

const Project = (props) => {
    const classes = useStyles()
    return (
        <div className={`${classes.wrapper}`}>
            <div className={(props.data.background) ? 'imageWrap' : classes.singleImageWrap}>  {/* Image animation solution found here: https://stackoverflow.com/a/13034571/13558496 */}
                <img src={props.data.foreground} />
                {props.data.background && <img src={props.data.background} />}
            </div>
    <h3 className={classes.title}>{props.data.name}</h3>
            <p className={classes.text}>{props.data.description}</p>
            <div className={classes.links}>
                {props.data.repo && <a className={classes.link1} href={props.data.repo}>See The Code</a>}
                {props.data.live && <a className={classes.link2} href={props.data.live}>Live App</a>}
                {props.data.video && <a className={classes.link3} href={props.data.video}>Video Demo</a>}
            </div>
        </div>
    );
}

export default Project;