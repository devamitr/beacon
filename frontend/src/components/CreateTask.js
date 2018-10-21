import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Add from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const uuidv1 = require('uuid/v1');

const styles = {
  cardContent: {
    display: 'flex',
    'flex-direction': 'column',
  },
  checkbox: {
    margin: '2% auto',
  },
  textField: {
    margin: '2% auto',
    width: '20%',
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
        locationDesp: "NW",
    };
    this.toggleEmergency = this.toggleEmergency.bind(this);
    this.updateField = this.updateField.bind(this);
    this.submitTask = this.submitTask.bind(this);
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

  submitTask(e) {
    const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    const beacon = Object.assign({
      beaconId: uuidv1()
    }, this.state)
    tasks.push(beacon);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardContent className={classes.cardContent}>
          <TextField
            className={classes.textField}
            placeholder="What do you need help for?"
            value={this.state.title}
            onChange={this.updateField('title')}
          />
          <TextField
            className={classes.textField}
            placeholder="Description"
            value={this.state.description}
            onChange={this.updateField('description')}
          />
          <TextField
            className={classes.textField}
            placeholder="Where exactly are you located? Closest landmarks, etc"
            value={this.state.locationDesp}
            onChange={this.updateField('locationDesp')}
          />
          <Typography>Emergency?</Typography>
          <Checkbox
            className={classes.checkbox}
            checked={this.state.emergency}
            onChange={this.toggleEmergency}
          />
        </CardContent>
        <CardActions>
          <IconButton
            className={classes.icon}
            onClick={this.submitTask}
          >
            <Add />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(CreateTask);
