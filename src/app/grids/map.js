import React from 'react';

export default function MapComponent() {
    function toMap() {
        const lat = 21.212244;
        const lon = 81.623654;

        // Detect Apple device (Mac/iPhone/iPad)
        const isAppleDevice = /Mac|iPhone|iPad/i.test(navigator.platform) || /iPad|iPhone|iPod/.test(navigator.userAgent);

        if (isAppleDevice) {
            window.open(`https://maps.apple.com/?q=${lat},${lon}`, "_blank"); // Open in Apple Maps
        } else {
            window.open(`https://www.google.com/maps?q=${lat},${lon}`, "_blank"); // Open in Google Maps
        }
    }

    return (
        <div className='insideGridWM' onClick={toMap}>
            <img
                className='iframeradius'
                src="/images/assets/map.png"
                alt="Map"
            />
            <img
                className='linkIcon wh100'
                src="/images/assets/arrow.png"
                alt="Link Arrow"
            />
        </div>
    );
}


