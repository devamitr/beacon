import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './Card';
import Button from '@material-ui/core/Button';

const style = {
    width: '50%',
    height: '50%'
  }
const lat = 42.02;
const lng= -77.01;//grab location from database

class MapContainer extends Component {
    render() {
      return (


    <div className="MapContainer">
    <Map google={this.props.google}
    style={{width: '100%', height: '60%', position: 'relative'}}
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
<MediaCard/>
<Button
              type="submit"
              variant="contained"
              color="primary"
              // onClick={() => props.history.push('./')}

            >
              Confirm
            </Button>

        </div>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyA6d-b1oLwH9632Q91P_WNOUbHPXxGzBEk')
  })(MapContainer)
  