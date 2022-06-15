import { useLoadScript } from "@react-google-maps/api"
import { MapMap } from "../Map";

interface Props {
    libraries: ["places"]; 
}

export function MapLoad({libraries}: Props) {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_API_KEY,
        libraries
    })

    if(!isLoaded) return <div>Loading...</div>;
    if(loadError) return <div>Error in loading mpa...</div>

    return (
        <MapMap />
    )
}