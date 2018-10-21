import { API, getHeaders, request } from "./config";

const getBeacons = () => request(`${API}/tasks`, getHeaders());

export default getBeacons;