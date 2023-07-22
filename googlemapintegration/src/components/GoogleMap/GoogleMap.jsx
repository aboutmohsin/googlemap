import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import React, { useRef } from "react";

const GoogleMap = () => {
  const inputLocation = useRef();
  const handlePlaceChange=()=>{
    const [place]=inputLocation.current.getPlaces();
    if(place){
        console.log(place.formattd_address)
        console.log(place.geometry.location.lat());
        console.log(place.geometry.location.lng());



    }
  }
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAfYtpZkK_qPO-XfN8I3TqhnkQZKbC5szU"
      libraries={"places"}
    >
      <StandaloneSearchBox onLoad={(ref) => (inputLocation.current=ref)}
    onPlacesChanged={handlePlaceChange}
    ></StandaloneSearchBox>
    </LoadScript>
  );
};

export default GoogleMap;
