import { useEffect, useState } from 'react';
import { HOME_CONTENT } from '../constants';
import project_image from '../../public/project_xox.png';

const Projects = () => {
    const [isDetail, setIsDetail] = useState(true);
    const [projectView, setProjectView] = useState(0);
    const currentProjectContent = HOME_CONTENT.PROJECTS.ProjectsContent[projectView];

    useEffect(() => {
        setIsDetail(true);

    }, [currentProjectContent])

    return (
        <div className='projects-wrapper'>
            <div className='projects-container'>
                <div className='all_projects'>
                    <ul className="project-list">
                        {HOME_CONTENT.PROJECTS.ListNames.map((projectName, index) => {
                            return (
                                <li className={`projectName ${index === projectView ? 'active' : ''}`} onClick={() => setProjectView(index)} key={index}><span>{projectName}</span></li>
                            )
                        })}
                    </ul>
                </div>
                <div className={`project-container ${isDetail ? 'detail' : 'info'}`}>
                    <div className="background">
                        <div className="detail-button">
                            <div
                                className='detail_btn'
                                onClick={() => setIsDetail(!isDetail)}
                            >
                                <svg fill="#000000" height="0" width="0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_106_"> <path id="XMLID_107_" d="M51.213,165.004L190.607,25.607c5.857-5.858,5.857-15.355-0.001-21.213 c-5.857-5.858-15.355-5.858-21.213,0.001l-150,150.004C16.58,157.211,15,161.026,15,165.004c0,3.979,1.581,7.794,4.394,10.607 l150,149.996C172.322,328.536,176.161,330,180,330s7.678-1.464,10.607-4.394c5.857-5.858,5.857-15.355-0.001-21.213L51.213,165.004 z"></path> <path id="XMLID_108_" d="M171.213,165.004L310.607,25.607c5.858-5.858,5.858-15.355,0-21.213 c-5.857-5.858-15.355-5.858-21.213,0.001l-150,150.004c-2.813,2.813-4.393,6.628-4.393,10.606c0,3.979,1.581,7.794,4.394,10.607 l150,149.996C292.322,328.536,296.161,330,300,330c3.839,0,7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213 L171.213,165.004z"></path> </g> </g></svg>
                            </div>
                        </div>
                    </div>
                    {!isDetail && (
                            <div className='detail-container'>
                                <div className='detail-left'>
                                    <p className='project-description'>{currentProjectContent.shortDescription}</p>
                                    <div className="githubLink">
                                        <a className='github-link' href={`${currentProjectContent.githubLink}`}> Visit Repo</a>
                                    </div>
                                    <div className='project-icons'>
                                        {currentProjectContent.icons.map((item, index) => {
                                            console.log(item)
                                        return (
                                            <div id={item.name} className='project-icon' key={index}>{item.svg}</div>
                                        )
                                    })}
                                    </div>
                                </div>
                                <div className="detail-right">
                                    <img className='project-image' src={project_image} alt='project1' />
                                </div>
                            </div>
                        )}
                    <div className='project-title-container'>
                        <h1 className='project-name'>
                            {currentProjectContent.projectName}
                        </h1>
                    </div>
                    <div className='info'>
                        <div className='project-description'>
                            <p>
                                Vanilla JS<br />HTML<br />CSS<br />Vite Project
                            </p>
                        </div>
                        <div className='project-image'>
                            <img src={project_image} alt='project1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
