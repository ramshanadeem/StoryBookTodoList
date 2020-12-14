import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
function Button1({ type, text }) {
    const classes = useStyles();
    return (
        <div className="App">
            <div style={{ marginTop: '2%' }}>

                <Button type={type} variant="contained" color="secondary">
                    {text}
                </Button>

            </div>
        </div>
    );
}

export default Button1;