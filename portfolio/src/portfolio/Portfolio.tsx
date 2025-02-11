import './Portfolio.css';
import profile from '../assets/profile_new.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Portfolio = () => {
    return (
        <div>
            <div className="portfolio">
                <div className="sidenav">
                    <a href="#about"><img src={profile} className="border" width="180" height="180"/></a>
                    <a href="#about">ABOUT</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#experience">EXPERIENCE</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#education">EDUCATION</a>
                </div>
            </div>
            <div className="main">
                <div className="container" id="about">
                    <div style={{marginTop: "200px", marginBottom: "200px"}}>
                        <p className="title"><b>Jimmy Kwan</b></p>
                        <p className="subtitle jcc"><a href="mailto:JimmyGeeKwan@gmail.com">JimmyGeeKwan@gmail.com</a>
                        </p>
                        <p className="desc">
                            Full Stack Software Engineer with over 2 years of experience working with React with TypeScript, Django with Python, Relational Database Management Systems with SQL, and cloud services like Microsoft Azure, Amazon Web Services, and Google Cloud.<br/></p>
                        <div className="row">
                            <div className="column">
                                <a href="https://github.com/jkwan55?tab=repositories" target="_blank">
                                    <GitHubIcon style={{width: "50px", height: "50px"}}/>
                                </a>
                            </div>
                            <div className="column">
                                <a href="https://www.linkedin.com/in/jimmygeekwan/" target="_blank">
                                    <LinkedInIcon style={{width: "50px", height: "50px"}}/>
                                </a>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="main">
                <div className="container" id="skills">

                    <div style={{marginTop: "25%", marginBottom: "25%"}}>
                    <p className="pageTitle"><b>SKILLS </b></p>
                        <p className="expDesc" style={{marginTop: "12px;"}}><b className='skills'>Languages: </b><div style={{display: "flex", textAlign: "start"}}>SQL, GraphQL, Python, JavaScript, TypeScript, Java, HTML</div></p>
                        <p className="expDesc" style={{marginTop: "12px;"}}><b className='skills'>Frameworks: </b><div style={{display: "flex", textAlign: "start"}}>Django, Flask, Express</div></p>
                        <p className="expDesc" style={{marginTop: "12px;"}}><b className='skills'>Cloud Platforms: </b><div style={{display: "flex", textAlign: "start"}}>Amazon Web Services, Microsoft Azure, Google Cloud Platform</div></p>
                        <p className="expDesc" style={{marginTop: "12px;"}}><b className='skills'>Other Technologies: </b><div style={{display: "flex", textAlign: "start"}}>React, Nodejs, Webpack, MySQL, Git, Nginx, Gunicorn</div></p>
                        <p className="expDesc" style={{marginTop: "12px;"}}><b className='skills'>Experienced With: </b><div style={{display: "flex", textAlign: "start"}}>RDBMS, Square, Agile/Scrum, SDLC, and UI/UX</div></p>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="container" id="experience">

                    <div style={{display: "flex", flexDirection: "column", marginTop: "5%", marginBottom: "5%"}}>
                        <p className="pageTitle"><b>EXPERIENCE </b></p>
                        <b><p className="subtitle sb">
                            <div style={{display: "flex", width: "66%"}}>Full Stack Software Engineer</div>
                            <span style={{display: "flex"}}>December 2023 - Current</span>
                        </p></b>
                        <p style={{fontSize: "18px", display: "flex", color:"gray", marginTop: "0"}}><b>Care.Coach</b></p>
                        <p className="expDesc" style={{margin: 0, textAlign: "start"}}>
                            • Designed and implemented the website's infrastructure to process orders and payments via Square, reducing client service time by more than 25%. <br/>
                            • Deployed an admin portal to manage user details, create events, and view a dynamic schedule, decreasing lookup time by 50%. <br/>
                            • Developed secure user authentication to collect user information, enable form signing, and manage recurring orders.
                        </p>

                        <b><p className="subtitle sb">
                            <div style={{display: "flex", width: "66%"}}>Full Stack Software Engineer</div>
                            <span style={{display: "flex"}}>May 2021 - December 2022</span>
                        </p></b>
                        <p style={{fontSize: "18px", display: "flex", color:"gray", marginTop: "0"}}><b>Care.Coach</b></p>
                        <p className="expDesc" style={{margin: 0, textAlign: "start"}}>
                            • Maintain and improved upon features of the web application that the staff used to interact with our clients. <br/>
                            • Designed pagination of the client list using Javascript with React which reduced the website load time by more than 50%. <br/>
                            • Created an efficient queueing system that prioritizes clients using Redis which increased interaction time by more than 25%. <br/>
                            • Implemented MySQL optimizations to reduce the size of historic tables by more than 95% and reduce query time of that table by more than 66%. <br/>
                            • Deployed security standards to meet requirements for a large investment from Anthem. <br/>
                            • Mentored a handful of employees on code development and deployment standards.    
                        </p>

                        <b><p className="subtitle sb" style={{marginTop: "50px"}}>
                            <div style={{display: "flex", width: "66%"}}>TEACHING ASSISTANT</div>
                            <span style={{display: "flex"}}>June 2018 - May 2019</span>
                        </p></b>
                        <p style={{fontSize: "18px", display: "flex", color:"gray", marginTop: "0"}}><b>SAN FRANCISCO STATE UNIVERSITY</b></p>
                        <p className="expDesc" style={{margin: 0, textAlign: "start"}}>Assist students with data structures, Big O comprehension, and general object oriented design.
                        Encourage critical thinking through conducting student code reviews.</p>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="container" id="projects">

                    <div className="projects" style={{marginBottom: "30px"}}>

                        <p className="pageTitle"><b>PROJECTS </b></p>

                        <p className="subtitle sb"><b><a href="https://github.com/jkwan55/league_rankings" target="_blank">Riot Games Global Power Ranking Hackathon</a></b>
                            <span>Winter 2023</span></p>
                        <p className="expDesc projDesc">Designed a web application that displayed teams ranked by their previous performance and categoriezed by specific scenarios.
                            The application was created using React with TypeScript, Django with Python, GraphQL, and hosted with Amazon Web Services. I used a linear regression model
                            to determine 
                        </p>

                        <p className="subtitle sb"><b><a href="https://github.com/jkwan55/cooking_app_public/" target="_blank">Cooking Web Application</a></b>
                            <span>Fall 2023</span></p>
                        <p className="expDesc projDesc">Created a solution to figuring out what dish to make based on available ingredients.
                            The solution was created using React with TypeScript, Django with Python, GraphQL, and hosted with Amazon Web Services. I intend to improve and maintain this
                            application in the future. The current features include account creation, ingredient tracking, and dish recipes.
                        </p>

                        <p className="subtitle sb"><b><a href="https://github.com/jkwan55/Portfolio/" target="_blank">SELF PORTFOLIO</a></b>
                            <span>Winter 2020</span></p>
                        <p className="expDesc projDesc">Created a website hosted on AWS using HTML, CSS, and JavaScript.
                            The project began as an HTML file, but as more pages were added, CSS was needed due to some font and styling restrictions from HTML.
                            To make the smooth scrolling navbar, the jQuery JavaScript library, along with w3schools' function was used to allow all browsers to scroll smoothly.</p>

                        <p className="subtitle sb"><b><a href="https://github.com/jkwan55/AirplaneDatabase" target="_blank">DATABASE FOCUSED AIRPORT WEB APP</a></b>
                            <span>Fall 2019</span></p>
                        <p className="expDesc projDesc">Designed and Implemented a database focused website in a
                            team of five using the Flask framework along with Python and SQL. This project allowed me to understand how a database
                            should be structured and how to alter the database correctly. Features were implemented in order from insert functions, deletion
                            functions, update functions, fuzzy matching, and search functions.</p>

                        <p className="subtitle sb"><b><a href="https://github.com/jkwan55/Environmental-Safety-Web-App" target="_blank">ENVIRONMENTAL SAFETY WEB APP</a></b>
                            <span>Summer 2019</span></p>
                        <p className="expDesc projDesc">Collaborated with five other members to create a web app
                            using the Express framework, npm to manage packages, and HTML, CSS, and JavaScript as the languages. This project was to better understand UX and UI, discussing where to
                            place certain panels, buttons and features to improve the user's experience. An important feature that was implemented was password
                            encryption using bcrypt and json tokens. This allowed us to access the database and match passwords based on our token.</p>

                        <p className="subtitle sb"><b><a href="https://github.com/jkwan55/Adventurer-Game" target="_blank">ADVENTURER GAME</a></b>
                            <span>Spring 2019</span></p>
                        <p className="expDesc projDesc">Produced a side scroller game using Java. This project helped
                            understand the importance of object oriented design.</p>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="container" id="education">
                    <div style={{marginTop: "20%", marginBottom: "25%", display: "flex", flexDirection: "column"}}>
                        <p className="pageTitle" style={{marginBottom: "50px", display: "flex", justifyContent: "center"}}><b>EDUCATION </b></p>
                        <b><p className="subtitle sb">
                            <div style={{display: "flex", width: "66%"}}>SAN FRANCISCO STATE UNIVERSITY</div>
                            <span style={{display: "flex"}}>December 2019</span>
                        </p></b>
                        <p style={{fontSize: "18px", display: "flex", color:"gray", marginTop: "0"}}><b>BACHELOR'S OF SCIENCE</b></p>
                        <p className="expDesc" style={{margin: 0, textAlign: "start"}}>Computer Science<br/>Major GPA: 3.7</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
