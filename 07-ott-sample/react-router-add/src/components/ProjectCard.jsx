import React from 'react'
import { Link } from 'react-router-dom'

export const ProjectCard = ({sendProject}) => {
    return (
        <div>
            <div className="img-box">이미지</div>
            <div className="text-box">
                <span>{sendProject.category}</span>
                <h3>{sendProject.title}</h3>
                <p>{sendProject.summary}</p>
                <Link to={`/portfolio/${sendProject.id}`}>자세히 보기</Link>
            </div>
        </div>
    )
}
