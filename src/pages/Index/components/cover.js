import { useState } from 'react'

export default function CoverComponent () {
  // __STATE <React.Hooks>
  const [ resume ] = useState('https://bit.ly/r3sum3dl')

  // __RENDER
  return (
    <div className="ui--index-cover">
      <h4 className="title">fullstack web developer</h4>
      <h2 className="sayhi">Hello, i am</h2>
      <h1 className="name">Got't Patiphat</h1>
      <p className="desc">
        Web developer and UI/UX Designer with 4 years of experience.
        Enjoy learning new technologies.
      </p>

      <div className="actions">
        <a className="btn btn-primary" href={resume} rel="external" target="_blank">
          <svg className="icon bi bi-download" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
          <span className="text">Download Resume</span>
        </a>
      </div>
    </div>
  )
}
