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
    return (
      <FormGroup row>
        
        <FormControlLabel 
          
          disabled control={
            <Switch className={classes.toggleStyle}
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
            />
          }
          label="Emergency"
        />
        {/* <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Primary"
        /> */}
        {/* <FormControlLabel control={<Switch value="checkedC" />} label="Uncontrolled" /> */}
        {/* <FormControlLabel disabled control={<Switch value="checkedD" />} label="Disabled" /> */}
        {/* <FormControlLabel disabled control={<Switch checked value="checkedE" />} label="Disabled" /> */}
      </FormGroup>
    );
  }
}

export default withStyles(styles)(SwitchLabels);
