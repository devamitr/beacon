import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import TitlebarGridList from './Rewards';

const styles = theme => ({
  card: {
    width: '40%',
    'margin-left': '30%',
    'margin-top': '20%',
    'margin-bottom': '30%',

    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: '120%',
  },
  cover: {
    width: 351,
    'margin-left': '100px',

  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

function Profile(props) {
  const { classes, theme } = props;
  const rewards = 20;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          Mac Miller
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            
            {`Reward points: ${rewards}`}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://pmcvariety.files.wordpress.com/2018/09/mac-miller2.jpg?w=1000&h=563&crop=1"
        title="Live from space album cover"
      />
    </Card>
  );
}

export default withStyles(styles, { withTheme: true })(Profile);

