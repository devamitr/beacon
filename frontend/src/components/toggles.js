import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    toggleStyle: {
        color:'red',
    },
    row: {
      'margin-left': 'auto',
    },
}

class SwitchLabels extends React.Component {
  constructor(props) {
    super(props);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
      const { classes, lifendeath } = this.props;
      const switched = lifendeath 
        ? <FormControlLabel disabled control={<Switch value="checkedD" />} label="non life and death" />
        :  <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="life and death" />
    return (
      <FormGroup row className={classes.row}>
        {switched}
      </FormGroup>
    );
  }
}

export default withStyles(styles)(SwitchLabels);
