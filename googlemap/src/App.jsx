import { useRef, useState } from "react";
import "./App.css";
import {
  Autocomplete,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
const App = () => {
  const [enterLocation, setEnterLocation] = useState(null);
  const searchLocation = useRef(null);
  const enterLocationHandler = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    const location = new google.maps.DirectionsService();
    const result = await location.route({
      searchLocation: searchLocation.current.value,
    });
    setEnterLocation(result);
  };
  // const { isLoad } = useJsApiLoader({
  //   googleMapsApiKey: "AIzaSyDdWcQ65ef4ZvC-gBq41mP9kjnpy0Pnufc",
  //   libraries: ["places"],
  // });
  // if (!isLoad) return <div>Map is Loading.....</div>;
  const center = { lat: 33.583221, lng: 73.055115 };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDdWcQ65ef4ZvC-gBq41mP9kjnpy0Pnufc"
      libraries={["places"]}
    >
      <div className="map-section">
        <div className="input-location">
          <form action="" className="location-form">
            <Autocomplete>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter location"
                ref={searchLocation}
              />
            </Autocomplete>
            <button onClick={enterLocationHandler}>Search</button>
          </form>
        </div>
        <div className="show-google-map">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerClassName="map-container"
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
            }}
          >
            <Marker position={center || enterLocation} />
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
};

export default App;
