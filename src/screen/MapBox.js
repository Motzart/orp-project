import React, {useState, useEffect, useRef} from 'react';
import mapboxgl from 'mapbox-gl'
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import area from '@turf/area';
import centerOfMass from '@turf/center-of-mass';
import {Container} from 'react-bootstrap'
import {Link} from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import API from '../api';
import olc  from '../utills/openlocal'
const styles = {
    width: "100vw",
    height: "calc(100vh - 140px)",
    position: "absolute",
    left:0
};

const MapBox = () => {
    const [map, setMap] = useState(null);
    const [datePolygon, setDataPolygon] = useState({
        region: '',
        polygon: [],
        codePlus: '',
        square: null
    });
    const [coord, setCoord] = useState({
        lng: 5,
        lat: 34,
        zoom: 2
    });
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAP_KEY;
        const initializeMap = ({setMap, mapContainer}) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current, // container id
                style: 'mapbox://styles/mapbox/satellite-v9', //hosted style id
                center: [-91.874, 42.76], // starting position
                zoom: 10
            });

            function rotate() {
                map.easeTo({bearing: 40, duration: 5000, pitch: 0, zoom: 14});
            };

            map.on("load", () => {
                setMap(map);
                map.resize();
                rotate()
            });

            map.on('move', () => {
                setCoord({
                    lng: map.getCenter().lng.toFixed(4),
                    lat: map.getCenter().lat.toFixed(4),
                    zoom: map.getZoom().toFixed(2)
                })
            });

            let draw = new MapboxDraw({
                displayControlsDefault: false,
                controls: {
                    polygon: true,
                    trash: true
                }
            });
            map.addControl(draw);

            map.on('draw.create', updateArea);
            map.on('draw.delete', updateArea);
            map.on('draw.update', updateArea);

            async function updateArea(e) {
                let data = draw.getAll();
                let center = centerOfMass(e.features[0]).geometry.coordinates;
                let place = await API.getInfoForMap(center[1], center[0]);
                if (data.features.length > 1) {
                    draw.delete(e.features[0].id);
                    return false
                }
                if (data.features.length > 0) {
                    const areaData = area(data);
// // restrict to area to 2 decimal points
                    let rounded_area = Math.round(areaData * 100) / 100;
                    setDataPolygon({
                        region: place.features[0].place_name,
                        polygon: data.features,
                        codePlus: olc.encode(center[1], center[0]),
                        square: rounded_area
                    })
                } else {
                    setDataPolygon({
                        region: '',
                        polygon: [],
                        codePlus: null,
                        square: 0
                    })
                    if (e.type !== 'draw.delete')
                        alert('Use the draw tools to draw a polygon!');
                }
            }

        };

        if (!map) initializeMap({setMap, mapContainer});

    }, [map])


    return (
        <Container>
        <div className='box'>
            <div className='box-info'><div>Longitude: {coord.lng} | Latitude: {coord.lat} | Zoom: {coord.zoom}</div> </div>
            <div ref={el => (mapContainer.current = el)} style={styles}></div>
            <div className="calculation-box">
                <p>Draw a polygon using the draw tools.</p>
                {datePolygon.square > 0 && <div className='inside__block'>
                    <span>Square Meters</span>
                    <span>{datePolygon.square}</span>
                    <span>Region</span>
                    <span>{datePolygon.region}</span>
                    <span>Code Plus</span>
                    <span>{datePolygon.codePlus}</span>
                    <Link to='/project-details'className="w-100 btn btn-lg btn-primary">Upload Data</Link>

                </div>}
            </div>
        </div>
        </Container>
    );
};

export default MapBox;
