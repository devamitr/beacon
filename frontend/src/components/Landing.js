import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import SideBar from './SideBar';

const styles = {
  iconButton: {
    display: 'flex',
    'margin-left': '1rem',
  },
  card: {
    width: '30%',
    margin: '2rem auto',
  },
  grid: {
  },
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarOpen: true,
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }
  toggleSideBar() {
    this.setState((prevState) => ({
      sideBarOpen: !prevState.sideBarOpen,
    }));
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.grid}>
        {!this.props.sideBarOpen &&
          <IconButton
            className={classes.iconButton}
            onClick={this.toggleSideBar}
          >
            <MenuIcon />
          </IconButton>
        }
        <SideBar
          open={this.state.sideBarOpen}
          toggleSideBar={this.toggleSideBar}
        />
        <Card className={classes.card}>
          <p>Get Help</p>
        </Card>
        <Card className={classes.card}>
          <p>Offer Help</p>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(Landing);
