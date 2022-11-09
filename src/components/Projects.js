import React from 'react'
import {Project} from './Project'

export const Projects = () => {
    return (
        <>
           
           <div className='container'>
        <div class="text-divider"><h3 className='text-center mb-4' id='projectpage' style={{border:"1px solid silver",padding:'15px'}}>Projects</h3></div>
            <div className='row'>
          
        <Project 
        image={``}
        title={'EASY CRM'}
        about={'EASY CRM FOR YOUR BASIC CRM NEEDS'}
        skills={'React.js,Node.js, Express.js, MongoDB '}
        live={`	https://crm-frontend-7h2j-c9hg55eqk-vignesh2398.vercel.app/`}
        />
        <br/>
   


        <Project
        image={``}
        title={'Version Control'}
        about={'Its Basic version control Application'}
        skills={'React.js, Node.js, Express.js, MongoDB'}
        live={`	https://quiet-cactus-c0c965.netlify.app/`}
        code={`https://github.com/vignesh2398/sample4`}
        />
        <Project
        image={``}
        title={'Quiz Application'}
        about={'This Quiz application where score displayed when quiz completed '}
        skills={'React.js, Node.js, Express.js, MongoDB '}
        live={`https://quiz-frontend-wheat.vercel.app/`}
        code={`https://github.com/vignesh2398/quiz2`}
        />

                </div>
        </div>
       
        </>
    )
}
