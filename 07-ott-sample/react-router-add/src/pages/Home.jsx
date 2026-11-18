
import React from 'react'
import portfolio from "../data/portfolio.json"
import { ProjectCard } from '../components/ProjectCard'

const { profile, projects } = portfolio

export const Home = () => {
  return (
    <>
      <section className='hero'>
        <div className="inner">
          <div>사진</div>
          <div className='hero-text-wrap'>
            <p>{profile.role}</p>
            <h2>{profile.name}</h2>
            <p className='slogan'>
              <strong>설계부터 구현까지</strong>
              <strong>화면을 만듭니다.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className='portfolio-wrap'>
        <div className="inner">
          <h2>프로젝트</h2>
          <div className='flex'>
            {projects.map(p => (
              <ProjectCard key={p.id} sendProject={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
