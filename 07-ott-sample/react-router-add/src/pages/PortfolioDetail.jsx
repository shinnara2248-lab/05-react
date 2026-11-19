
import React from 'react';
import { useParams } from 'react-router-dom';
import portfolio from '../data/portfolio.json';
import { NotFound } from './NotFound';

// JSON에서 프로젝트 데이터 가져오기
const { projects } = portfolio;

export const PortfolioDetail = () => {
  // URL의 id 가져오기
  const { id } = useParams();

  // URL의 id와 일치하는 프로젝트 찾기
  const projectFind = projects.find(
    (item) => item.id === id
  );

  // 해당하는 프로젝트가 없으면 NotFound 페이지 출력
  if (!projectFind) {
    return <NotFound />;
  }

  return (
    <div className="portfolio-detail">
      <div className="inner">

        {/* 프로젝트 기본 정보 */}
        <div className="flex">
          <div>
            <p>{projectFind.category}</p>
            <h2>{projectFind.title}</h2>
            <p>{projectFind.summary}</p>

            {/* 사용 기술 */}
            <ul>
              {projectFind.stack.map((item, index) => (
                <li key={`${projectFind.id}-${index}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 프로젝트 상세 정보 */}
        <div className="flex">

          {/* 설계 목표 */}
          <div>
            <h2>설계 목표</h2>
            <p>{projectFind.goal}</p>
          </div>

          {/* 구현 방식 */}
          <div>
            <h2>구현 방식</h2>
            <p>{projectFind.implementation}</p>
          </div>

        </div>
      </div>
    </div>
  );
};
