import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import createBeacon from '../api/createBeacon';

const uuidv1 = require('uuid/v1');

const styles = {
  cardContent: {
    display: 'flex',
    'flex-direction': 'column',
  },
  checkbox: {
    margin: '1rem auto 1rem 1rem',
  },
  checkboxContainer: {
    display: 'flex',
    'align-items': 'center',
  },
  checkboxLabel: {
    'margin-left': 'auto',
    'color': 'red',
    'font-weight': 700,
    'font-family': 'system-ui',
  },
  header: {
    'font-size': '3rem',
    'font-weight': 300,
    'font-family': 'system-ui',
  },
  textField: {
    margin: '2% auto',
    width: '20%',
  },
  longTextField: {
    margin: '2% auto',
    width: '40%',
  },
  icon: {
    'margin': '0 auto',
  }
};

class CreateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        description: "",
        emergency: false,
        locationDesp: "",
        lat: "",
        lon: "",
    };
    this.toggleEmergency = this.toggleEmergency.bind(this);
    this.updateField = this.updateField.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.processLocation = this.processLocation.bind(this);
    this.storeLocation = this.storeLocation.bind(this);
    this.setLocationError = this.setLocationError.bind(this);

  }

  componentDidMount() {
    const tasks = [];
    localStorage.setItem('tasks', tasks);
  }

  toggleEmergency() {
    this.setState((prevState) => ({
      emergency: !prevState.emergency,
    }));
  }

  updateField(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value,
      });
    }
  }

  storeLocation(pos) {
    const crd = pos.coords;
    this.setState({
      lon: crd.longitude,
      lat: crd.latitude,
    }, () => {
      this.submitTask();
    });
  }

  setLocationError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);  
  }

  processLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(this.storeLocation, this.setLocationError, options);
  }

  submitTask() {
    const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

    const beacon = Object.assign({
      beaconId: uuidv1()
    }, this.state)

    // tasks.push(beacon);

    // localStorage.setItem('tasks', JSON.stringify(tasks));

    createBeacon(beacon);
  }
  toWait =() => this.props.history.push('./waiting');

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.header}>
            What do you need help for?
          </Typography>
          <TextField
            className={classes.textField}
            placeholder="How can we help you?"
            value={this.state.title}
            onChange={this.updateField('title')}
          />
          <TextField
            className={classes.longTextField}
            placeholder="Briefly describe the emergency"
            value={this.state.description}
            onChange={this.updateField('description')}
          />
          <TextField
            className={classes.longTextField}
            placeholder="Where exactly are you located? Closest landmarks, gates, etc"
            value={this.state.locationDesp}
            onChange={this.updateField('locationDesp')}
          />
          <div className={classes.checkboxContainer}>
            <Typography className={classes.checkboxLabel}>Life-threatening Emergency?</Typography>
            <Checkbox
              className={classes.checkbox}
              checked={this.state.emergency}
              onChange={this.toggleEmergency}
            />
          </div>
        </CardContent>
        <CardActions>
          <IconButton
            className={classes.icon}
            onClick = {this.toWait}
          >
            Submit
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(CreateTask);
