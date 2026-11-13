import React from 'react'
import { MainSwiper } from '../components/MainSwiper'
import { NewArrival } from '../components/NewArrival'
import { SpringPro } from '../components/SpringPro'
import { SpringWomen } from '../components/SpringWomen'

export const Home = () => {
    return (
        <main>
            <div className="hero-wrap">
                <MainSwiper />
            </div>
            <div className="container">
                <NewArrival />
                <SpringPro imgSend="spring1.jpg" />
                <SpringWomen />
                <SpringPro imgSend="spring2.jpg" />
            </div>
        </main>
    )
}
