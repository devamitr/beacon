import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwitchLabels from './toggles';
import Button from '@material-ui/core/Button';


import getBeacons from '../api/getBeacons';

const styles = theme => ({
  root: {
    width: '60%',
    margin: '0 auto',
  },
  detail: {
    display: 'flex',
  },
  detailText: {
    margin: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    'align-self': 'center',
  },
  expansionPanel: {
    'margin-bottom': '1rem',
  },
  expansionPanelSummary: {
    display: 'flex',
    'align-items': 'center',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    'align-self': 'center',
    'margin-right': '1rem',
  },
  typography: {
    'font-size': '3rem',
    'font-family': 'system-ui',
    'font-weight': 300,
    'margin-bottom': '2rem',
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
    beaconList: [],
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  componentDidMount() {
    getBeacons()
      .then(res => {
        this.setState({
          beaconList: res,
        });
      })
      .catch(err => {
        console.log(err);
      })
  }
  toComplete =() => this.props.history.push('./complete');

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;



    return (
      <div className={classes.root}>
        <Typography className={classes.typography}>Current Beacons Near You</Typography>
        {
          this.state.beaconList.length !== 0 && this.state.beaconList.map(b => (
            <ExpansionPanel key={b._id} className={classes.expansionPanel} expanded={expanded === b._id} onChange={this.handleChange(b._id)}>
              <ExpansionPanelSummary className={classes.expansionPanelSummary} expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{b.title}</Typography>
                <Typography className={classes.secondaryHeading}>{b.desc}</Typography>
                <SwitchLabels lifendeath={b.lnd} />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.detail}>
                <Typography className={classes.detailText}>
                  {b.locdesc}
              </Typography>
              <Button 
            onClick = {this.toComplete}
            variant="outlined" className={classes.button}>
        Accept
      </Button>

              </ExpansionPanelDetails>
            </ExpansionPanel>

          ))
        }
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);


