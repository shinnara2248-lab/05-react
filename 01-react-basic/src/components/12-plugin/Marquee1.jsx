import React from 'react'
import MarqueeModule from 'react-fast-marquee'
const Marquee = MarqueeModule.default || MarqueeModule;

export const Marquee1 = () => {
    return (
        <div style={{ fontSize: "40px" }}>
            <h2>Marquee test</h2>
            <Marquee autoFill={true}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            <Marquee play={false}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            <Marquee pauseOnHover={true}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            <Marquee direction="right"
                gradient={true}
                gradientColor="purple"
                gradientWidth="20%"
                style={{ background: "blue" }}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    )
}
