import React from 'react';
import InfiniteMenu from './InfiniteMenu';
import '../styles/Projects.css';
import UXMMImage from '../images/UXMM.png';
import CSUniCourseImage from '../images/CS_Uni_Course.jpg';
import Student_Management from '../images/StudentManagement.png';

const projects = [
    {
        image: UXMMImage,
        link: 'https://uxmm-version2.vercel.app/',
        title: 'UXMM',
        description: 'You can say it UXMM clone but with Futuristic style'
    },
    {
        image: CSUniCourseImage,
        link: 'https://cs-uni-course.vercel.app/',
        title: 'CS Uni Course',
        description: 'An Online learning Website for students and teachers.'
    },
    {
        image: Student_Management,
        link: 'https://youtu.be/jCQYyZNMkhk',
        title: 'Student Management',
        description: 'A project requested by DUCS. I added only the video of using it because the project haven\'t finished yet'
    },
    {
        image: 'data:image/jpeg;base64,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',
        link: 'https://google.com/',
        title: 'Coming Soon',
        description: 'Stay Tune For More!!'
    },
];

const Projects = () => {
    return (
        <section className="container" id="projects">
            <h2>Projects</h2>
            <h3>I have created</h3>
            <div style={{ height: '600px', position: 'relative' }}>
                <InfiniteMenu items={projects} />
            </div>
        </section>
    );
};

export default Projects;
