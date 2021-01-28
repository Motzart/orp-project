import React, {useCallback, useRef, useState,} from 'react'
import { GoogleMap, LoadScript,Polygon, } from '@react-google-maps/api';
import {Container} from 'react-bootstrap';

const containerStyle = {
    width: '100%',
    height: '400px',
    margin: 'auto'
};

const center = {
    lat: -3.745,
    lng: -38.523
};
const options = {
    fillColor: "lightgreen",
    fillOpacity: 0.5,
    strokeColor: "frey",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: true,
    draggable: true,
    editable: true,
    geodesic: true,
    zIndex: 1
}

const  Map =()=> {
    const [path, setPath] = useState([
        { lat: 52.52549080781086, lng: 13.398118538856465 },
        { lat: 52.48578559055679, lng: 13.36653284549709 },
    ]);

    const polygonRef = useRef(null);
    const mapRef = useRef(null);
    const listenersRef = useRef([]);

    // Call setPath with new edited path
    const onEdit = useCallback(() => {
        console.log(polygonRef,'polygonRef')
        console.log(polygonRef.current
            .getPath(),'polygonRef')
        if (polygonRef.current) {
            const nextPath = polygonRef.current
                .getPath()
                .getArray()
                .map(latLng => {
                    return { lat: latLng.lat(), lng: latLng.lng() };
                });
            setPath(nextPath);
        }

    }, [setPath]);

    // Bind refs to current Polygon and listeners
    const onLoad = useCallback(

        polygon => {
            polygonRef.current = polygon;
            const path = polygon.getPath();
            listenersRef.current.push(
                path.addListener("set_at", onEdit),
                path.addListener("insert_at", onEdit),
                path.addListener("remove_at", onEdit)
            );
        },
        [onEdit]
    );
    const handleOverlayComplete=(e)=> {

        const polygon = e.overlay;

        //...
    }

    // const onCreatePoligon = ()=>{
    //     return <Polygon></Polygon>
    // }

    return (
        <Container>
        <LoadScript
            googleMapsApiKey="AIzaSyDHuzK94ijNQSSiaAqFhITtI1Nts4kNtvc"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: 52.52047739093263, lng: 13.36653284549709 }}
                zoom={10}
                ref={mapRef}
            >
                <Polygon
                    onLoad={onLoad}
                    editable={true}
                    draggable={true}
                    // Event used when manipulating and adding points
                    onMouseUp={onEdit}
                    // Event used when dragging the whole Polygon
                    onDragEnd={onEdit}
                    onLoad={onLoad}
                    // ref={polygonRef}
                    paths={path}
                    options={options}
                    onPolygonComplete={handleOverlayComplete}
                />
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
        </LoadScript>
            </Container>
            )
}
export default Map;
