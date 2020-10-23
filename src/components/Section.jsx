import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    wrapper: {
        width: '100%'
    },
    title: {
        fontSize: '2.75em',
        fontFamily: "'Sora', sans-serif",
        fontWeight: '600',
        textAlign: 'center'
    }
}))

const Section = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>{props.title}</h1>
            {props.children}
        </div>
    );
}

export default Section;