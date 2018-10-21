import { API, postHeaders, postRequest } from "./config";

const createBeacon = (beacon) => {
    const payload = {
        title: beacon.title,
        desc: beacon.description,
        locdesc: beacon.locationDesp,
        lat: beacon.lat,
        lon: beacon.lon,
        uname: beacon.beaconId,
        lnd: beacon.emergency,
    };
    console.log(payload);
  return postRequest(`${API}/createbeacon`, postHeaders(payload))
};

export default createBeacon;