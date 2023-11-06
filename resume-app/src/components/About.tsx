import '../assets/styles/About.css';

function About() {

    return (
        <div id="about-div">
            <h2>Education</h2>
            <p id='degree'>Bachelor of Science, Computing Science</p>
            <div id='school'>
                <p>Simon Fraser University</p>
                <p>September 2018 - April 2023</p>
            </div>
            <p id='course-p'>Coursework in:</p>
            <ul id="course-list">
                <li>Software Testing and Security</li>
                <li>Modern C++ Development Methods</li>
                <li>Web Development</li>
                <li>Database Systems</li>
                <li>Distributed Systems</li>
                <li>Data Communication, Networking</li>
                <li>Requirements Engineering</li>
                <li>Statistics and Discrete Mathematics</li>
            </ul>
        </div>
    );
};

export default About;