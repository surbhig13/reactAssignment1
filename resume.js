import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
               <Grid>
                  <Cell col={4}>
                     <div style={{textAlign: 'center', paddingTop: '5em'}}>
                         <img src="https://th.bing.com/th/id/OIP.uq_o9jpqx8HSKH483LUF6gHaHa?pid=Api&rs=1"
                               alt="avatar"
                               style ={{height: '200px'}}/>
                     </div>

                     <h2 style={{paddingTop: '1em'}}>Surbhi Gupta</h2>
                     <h4 style={{color:'grey'}}>Programmer</h4>
                     <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                     <p>Business Analyst Intern at ClientsFirstIT, 
                         Data Science Enthusiast.
                         2 years of experience in Web designing and 1 year as trainee.
                     Have succesfully completed many certification training programs in this lockdown time.

                     An avid learner, I am passionate about technologies, evolving industries.

                     Likes to do productive things. Creative and passionate about Writing.
                     Solid idea generator and conceptual thinker.
                     
                     </p>
                 <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>    
                   <h5>Adress</h5> 
                   <p>234-Ram Colony, Mohali, Punjab</p>
                   <h5>Phone</h5>
                   <p>+919876543210</p>
                   <h5>Email</h5>
                   <p>gsurbhi79@gmail.com</p>
                   <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}></hr> 
                    
                    
                    </Cell>

                  <Cell className="resume-right-col" col={8}>
                      <h2>Education</h2>
                      <Education
                        startYear={2007}
                        endYear={2009}
                        schoolName="DAV International PUBLIC SCHOOL"
                        schoolDescription="One of the best school in the city having all kind of facilities"

                      />
                      <Education
                        startYear={2009}
                        endYear={2011}
                        schoolName="DAV PUBLIC SCHOOL"
                        schoolDescription="One of the best school in the city having all kind of facilities"

                      />

                    <Education
                        startYear={2011}
                        endYear={2017}
                        schoolName="Guru Nanak dev University"
                        schoolDescription="One of the best University in the Punjab having all kind of facilities"

                      />

                      <hr style={{borderTop:'3px solid #e22437'}}/>
                      <h2>Experience</h2>

                      <Experience
                        startYear={2017}
                        endYear={2019}
                        jobName="Web Designer"
                        jobDescription="Creating responsive designs."

                      />

<Experience
                        startYear={2019}
                        endYear={2020}
                        jobName="IT Trainee"
                        jobDescription="Training students in different languages and help them in creating projects."

                      />

                      <hr style={{borderTop: '3px solid #e22947' }} />
                      <h2>Skills</h2>
                      <Skills 
                         skill="HTML/CSS"
                         progress={90}
                      />   
                       <Skills 
                         skill="Python"
                         progress={60}
                      />   
                       <Skills 
                         skill="SQL"
                         progress={65}
                      />   
                       
                       <Skills 
                         skill="Java/Android"
                         progress={40}
                      />   

                       <Skills 
                         skill="javascript"
                         progress={35}
                      />   

                       <Skills 
                         skill="React"
                         progress={25}
                      />   
                      </Cell>   
                </Grid> 
            </div>
        )
    }
}

export default Resume;

