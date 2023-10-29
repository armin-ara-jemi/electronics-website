import React from 'react'
import {BsTwitter,BsFacebook,BsInstagram,BsYoutube} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='container'><footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
    <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
      <div class="row">
        <div class="col-lg-3 mb-3">
          
        
            <span class="fs-5">Shop</span>
          
            
        </div>
        <div class="col-6 col-lg-2 offset-lg-1 mb-3">
          <h5>Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="/">Home</a></li>
            <li class="mb-2"><a href="/about">About</a></li>
            <li class="mb-2"><a href="/services">Services</a></li>
            <li class="mb-2"><a href="/contact">Contact</a></li>
            <li class="mb-2"><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3">
          <h5>Projects</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener">Bootstrap 5</a></li>
            <li class="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev" target="_blank" rel="noopener">Bootstrap 4</a></li>
            <li class="mb-2"><a href="https://github.com/twbs/icons" target="_blank" rel="noopener">Icons</a></li>
            <li class="mb-2"><a href="https://github.com/twbs/rfs" target="_blank" rel="noopener">RFS</a></li>
            <li class="mb-2"><a href="https://github.com/twbs/examples/" target="_blank" rel="noopener">Examples repo</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3">
          <h5>Community</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><BsTwitter width={24} height={24} className='bi' /><a href="/">TWITTER</a></li>
            <li class="mb-2"><BsFacebook width={24} height={24} className='bi' /><a href="/">FACEBOOK</a></li>
            <li class="mb-2"><BsInstagram width={24} height={24} className='bi' /><a href="/">INSTAGRAM</a></li>
            <li class="mb-2"><BsYoutube width={24} height={24} className='bi' /><a href="/">YOUTUBE</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer