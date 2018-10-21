import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
      width: '30%',
      margin: '2rem auto',
    },
  };

const Main = (props) => (
    <div>
        <Card className={props.classes.card}>
            <Button
                onClick={() => props.history.push('./tasks')}
            >Get Help</Button>
        </Card>
        <Card className={props.classes.card}>
            <Button
            >Offer Help</Button>
        </Card>
    </div>
);

export default withStyles(styles)(Main);