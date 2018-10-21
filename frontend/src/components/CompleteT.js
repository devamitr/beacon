import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './Card';
import Button from '@material-ui/core/Button';
import  compose  from 'recompose/compose';
import getBeacons from '../api/getBeacons';

const styles = {
  colorcard:{
    width: '100%',
    height: '70%',

  },

  MapContainer:{
    display: 'flex',
    'flex-direction':'column',
  }
  }

// const lat = 42.02;
// const lng= -77.01;//grab location from database

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beaconList: [],
    };
  }
    toHome =() => this.props.history.push('./');

    render() {
      const { classes } = this.props;

      return (


    <div className= {classes.MapContainer}>
<MediaCard className={classes.colorcard}/>
<Map google={this.props.google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}
    initialCenter={{
      lat: 23.973875,
      lng: 120.982024
    }}
>

  <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 23.973875, lng: 120.982024}} />
</Map>

<Button
              type="submit"
              variant="contained"
              color="primary"
              onClick = {this.toHome}

            >
              Confirm
            </Button>

        </div>
      );
    }
  }

  export default compose (
    withStyles (styles, {name:'MapContainer'}),
    GoogleApiWrapper({
    apiKey: ('AIzaSyA6d-b1oLwH9632Q91P_WNOUbHPXxGzBEk')
  }))(MapContainer)
  