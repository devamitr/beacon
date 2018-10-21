import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const styles={
    toggleStyle:{
        color:'red',
    }
}

class SwitchLabels extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
      const {classes} = this.props;
      const lifendeath = true; //gonna be changed through database
      const switched = lifendeath 
        ? <FormControlLabel disabled control={<Switch value="checkedD" />} label="non life and death" />
        :  <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="life and death" />
    return (
      <FormGroup row>
        {switched}
      </FormGroup>
    );
  }
}

export default withStyles(styles)(SwitchLabels);
