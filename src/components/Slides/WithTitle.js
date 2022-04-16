import React from 'react'

export default function WithTitle({ children }) {
    return (
        <div className={`keen-slider__slide number-slide`}>
            {children}
        </div>
    )
}
