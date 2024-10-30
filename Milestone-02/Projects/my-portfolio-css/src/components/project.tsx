import Image from "next/image"

export default function Project() {
  return (
    <main id="project" className="project">
      {/* Top Section */}
      <div className="top-project">
        <h2>My <span>Project</span></h2>
      </div>

      {/* Down Section */}
      <div className="project-down">

        {/* Project */}
        <div className="project-section">
          <Image 
          src={'/projects/ableton.PNG'}
          alt="project"
          width={600}
          height={600}
          className="project-image"
          />
          <div className="project-detail">
            <h3 className="project-name">Ableton</h3>
            <p className="project-dis">
              Built with HTML and CSS, featuring keyframe animations. 
              A design-focused recreation of Ableton, currently non-responsive.
            </p>
            <button className="button-links">
              <a href="https://ableton-clone-eight.vercel.app/" 
              target="_blank"
              className="button-links">
                View Project &#x2192;
              </a>
            </button>
          </div>
        </div>

        {/* Project */}
        <div className="project-section">
          <Image 
          src={'/projects/pulse.PNG'}
          alt="project"
          width={600}
          height={600}
          className="project-image"
          />
          <div className="project-detail">
            <h3 className="project-name">Pulse</h3>
            <p className="project-dis">
              Developed with Next.js, featuring smooth animations and a fully responsive design. 
            </p>
            <button className="button-links">
              <a href="https://pulse-sepia-zeta.vercel.app/" 
              target="_blank"
              className="button-links">
                View Project &#x2192;
              </a>
            </button>
          </div>
        </div>

        {/* Project */}
        <div className="project-section">
          <Image 
          src={'/projects/resume-builder.PNG'}
          alt="project"
          width={600}
          height={600}
          className="project-image"
          />
          <div className="project-detail">
            <h3 className="project-name">Dynamic Resume Builder</h3>
            <p className="project-dis">
              Created with HTML, CSS, and JavaScript, this tool generates and edits resumes dynamically.
            </p>
            <button className="button-links">
              <a href="https://dynamic-hackaton-project.vercel.app/" 
              target="_blank"
              className="button-links">
                View Project &#x2192;
              </a>
            </button>
          </div>
        </div>

        {/* Project */}
        <div className="project-section">
          <Image 
          src={'/projects/youtube.PNG'}
          alt="project"
          width={600}
          height={600}
          className="project-image"
          />
          <div className="project-detail">
            <h3 className="project-name">Youtube CLONE</h3>
            <p className="project-dis">
              A practice project built with HTML and CSS, focusing on mastering flexbox properties.
            </p>
            <button className="button-links">
              <a href="https://youtube-clone-gamma-mauve.vercel.app/" 
              target="_blank"
              className="button-links">
                View Project &#x2192;
              </a>
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}