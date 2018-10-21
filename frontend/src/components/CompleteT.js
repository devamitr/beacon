import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './Card';
import Button from '@material-ui/core/Button';
import  compose  from 'recompose/compose';

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

const lat = 42.02;
const lng= -77.01;//grab location from database

class MapContainer extends Component {
  toHome =() => this.props.history.push('./');

    render() {
      const { classes } = this.props;

      return (


    <div className= {classes.MapContainer}>
<MediaCard className={classes.colorcard}/>
<Map google={this.props.google}
    style={{width: '100%', height: '50%', position: 'relative'}}
    className={'map'}
    zoom={15}>

  <Marker
    name={'Dolores park'}
    position={{lat: {lat}, lng: {lng}}} />
  <Marker />

  <Marker
    name={'Dolores park'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker />
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
  