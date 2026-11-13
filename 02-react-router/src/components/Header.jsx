import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='border-b-1 py-6'>
            <div className="inner flex justify-between">
                <h1 className="logo"><Link to="/">로고</Link></h1>
                <nav>
                    <ul className="main-menu flex gap-8">
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/portfolio">PORTFOLIO</Link>
                        <ul className="sub-menu absolute bg-white border-1">
                            <li>
                                <Link to="/portfolio/uiux">UIUX</Link>
                            </li>
                            <li>
                                <Link to="/portfolio/front">프론트엔드</Link>
                            </li>
                        </ul></li>
                        <li><Link to="/skill">SKILLS</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                        <li><Link to="/product/1">상품 1</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
