'use client'
import React from 'react'
import { GoogleMap, InfoWindowF, useJsApiLoader } from '@react-google-maps/api'
import { InterfaceMapStyle } from '@/lib/MapStyles'

const containerStyle = {
    width: '1200px',
    height: '800px'
}

const center = {
    lat: 36,
    lng: 140
}

const Map = React.memo(() => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    const mapOptions = {
        styles: InterfaceMapStyle
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            options={mapOptions}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <InfoWindowF position={center}>
                <>
                    <div>aaaaaa</div>
                </>
            </InfoWindowF>
        </GoogleMap>
    ) : (
        <></>
    )
})

const Page = () => {
    return (
        <div>
            <h1>Google Map from Next App</h1>
            <Map />
        </div>
    )
}

export default Page
