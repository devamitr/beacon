import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      display: 'flex',
      width: '30%',
      margin: '2rem auto',
      height: '120px',
      '&:hover': {
        cursor: 'pointer',
        opacity: 0.8,
      },
    },
    typography: {
      'font-family': 'system-ui',
      'font-weight': 100,
      'font-size': '3rem',
      'margin': 'auto',
    },
  };

const Main = (props) => (
    <div>
        <Card 
            className={props.classes.card}
            onClick={() => props.history.push('./create')}
        >
            <Typography className={props.classes.typography}>Get Help</Typography>
        </Card>
        <Card 
            className={props.classes.card}
            onClick={() => props.history.push('./tasks')}
        >
            <Typography className={props.classes.typography}>Offer Help</Typography>
        </Card>
    </div>
);

export default withStyles(styles)(Main);