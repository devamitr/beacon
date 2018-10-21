import { API, getHeaders, request } from "./config";

const getBeacons = () => request(`${API}/activebeacons`, getHeaders());

export default getBeacons;