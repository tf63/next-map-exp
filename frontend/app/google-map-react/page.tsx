'use client'
import { useState } from 'react'
import GoogleMapReact from 'google-map-react'

export default function Create() {
    const [map, setMap] = useState(null)
    const [maps, setMaps] = useState(null)
    const [marker, setMarker] = useState(null)

    const defaultLatLng = {
        lat: 35.7022589,
        lng: 139.7744733
    }

    // map, maps で受け取ると変数が被るので object で受け取っています
    const handleApiLoaded = (object) => {
        setMap(object.map)
        setMaps(object.maps)
    }

    const setLatLng = ({ x, y, lat, lng, event }) => {
        if (marker) {
            marker.setMap(null)
        }
        const latLng = {
            lat,
            lng
        }
        setMarker(
            new maps.Marker({
                map,
                position: latLng
            })
        )
    }

    return (
        <div style={{ height: '800px', width: '1200px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY! }}
                defaultCenter={defaultLatLng}
                defaultZoom={16}
                onClick={setLatLng}
                onGoogleApiLoaded={handleApiLoaded}
            />
        </div>
    )
}
