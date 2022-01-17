import React from 'react';
import Image from 'next/image';

export default function CornerLeaves() {
    return (
        <div style={{position: 'fixed', top: 0, left: 0, zIndex: 0, opacity: 1}}>
            <Image src="/images/leafes-1.png" width={210} height={430} />
        </div>
    )   
}