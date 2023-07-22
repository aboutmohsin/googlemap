import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  Autocomplete,
} from "@react-google-maps/api";
import "./Form.css";

const Form = () => {
  const [location, setLocation] = useState(null);
  const [inputLocation, setInputLocation] = useState(null);

  // const inputHandler = (e) => {
  //   setInputLocation(e.target.value);
  //   console.log("input location", inputLocation);
  // };

  const handlePlaceSelect = (place) => {
    setLocation(place);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDdWcQ65ef4ZvC-gBq41mP9kjnpy0Pnufc"
      libraries={["places"]}
    >
      <div>
        <Autocomplete
          value={inputLocation}
          // onPlacesChanged={() => handlePlaceSelect(searchBox.getPlaces())}
        >
          <div className="input_section">
            <input
              type="text"
              placeholder="Enter a location"
              // value={inputHandler}
              // onChange={inputHandler}
            />
          </div>
        </Autocomplete>
        {location && (
          <div>
            <div>Entered Location: {location.formatted_address}</div>
            <div>
              Selected Location: {location.geometry.location.lat()},{" "}
              {location.geometry.location.lng()}
            </div>
          </div>
        )}
        <div className="google_map">
          <GoogleMap
            mapContainerStyle={{
              height: "400px",
              width: "70rem",
            }}
            center={
              location
                ? location.geometry.location
                : { lat: 33.684422, lng: 73.047882 }
            }
            zoom={15}
          >
            {location && (
              <Marker
                position={location.geometry.location}
                draggable
                onDragEnd={(e) =>
                  setLocation({
                    ...location,
                    geometry: {
                      ...location.geometry,
                      location: {
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                      },
                    },
                  })
                }
              />
            )}
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
};

export default Form;
