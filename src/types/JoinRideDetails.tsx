import LatLng from "./LatLng";

interface JoinRideDetails {
  userId: string;
  rideId: string;
  pickup: LatLng;
  drop: LatLng;
  pickupInput: string;
  dropInput: string;
  amount: number;
  paymentMode: string; 
}

export default JoinRideDetails;
