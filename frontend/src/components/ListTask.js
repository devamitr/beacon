import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SwitchLabels from './toggles';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;
    const  taskDes= "Fell of the stairs";//gonna be changed through database
    const  Dist= "240m";//gonna be changed through database
    //Typography gonna be changed through database

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{taskDes}</Typography>
   
            <Typography className={classes.secondaryHeading}>{Dist}</Typography>
            <SwitchLabels />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Near Mc Donalds, with three bags to carry

            </Typography>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{taskDes}</Typography>
   
            <Typography className={classes.secondaryHeading}>{Dist}</Typography>
            <SwitchLabels/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Near Mc Donalds, with three bags to carry

            </Typography>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{taskDes}</Typography>
   
            <Typography className={classes.secondaryHeading}>{Dist}</Typography>
            <SwitchLabels/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Near Mc Donalds, with three bags to carry

            </Typography>

          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{taskDes}</Typography>
   
            <Typography className={classes.secondaryHeading}>{Dist}</Typography>
            <SwitchLabels/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Near Mc Donalds, with three bags to carry

            </Typography>

          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);


