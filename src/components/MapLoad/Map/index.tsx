import { useMemo, useCallback, useRef } from 'react';
import { 
    GoogleMap,
    GoogleMapProps
} from '@react-google-maps/api'

import * as C from './styles';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export function MapMap() {
    const mapRef = useRef<GoogleMapProps>();  

    const mapContainerStyle = useMemo(() => ({
        width: '100%',
        height: '400px',
    }), [])

    const center = useMemo<LatLngLiteral>(() => ({lat: -23.427320, lng: -51.936958}), [])

    const options = useMemo<MapOptions>(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    }), [])

    const onLoad = useCallback((map: any) => (mapRef.current = map), [])

    return (
        <>
            <C.Title><span>⛰️</span>Eco Adrenaline</C.Title>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                onLoad={onLoad}
            >
            </GoogleMap>
        </>
    )
}