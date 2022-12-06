import React from 'react'


export const Navbar = () =>
{
  return (
    <div className='container'>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#"><span class="border border-3 border-success p-2">Vignesh R</span> </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><i className='fas fa-bars'></i></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#aboutpage">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">SKILLS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projectpage">PROJECTS</a>
          </li>
          <li class="nav-item">
           
            <a href='#contactus' class="nav-link" style={{ borderRadius: "0px" }}>Contact me</a>
            
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
