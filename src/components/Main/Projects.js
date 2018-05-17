import React from 'react';

const Projects = () => (
  <main>
    <section className="section-projects">
      <div className="projects">
        <figure>
          <img src="blog-react-demo.PNG" alt="blog-demo" />
          <figcaption>Blog demo</figcaption>
        </figure>
        <article>
          <h5>Blog demo using React and Spring</h5>
          <p>
            <strong>React</strong> is used with <strong>react-router</strong> to switch pages withou
            reloading the all page, used <strong>bootstrap</strong> to design the page in a simple
            way. Created a CMS section called dashboard to create new posts, delete current ones
            ,create types of posts, basicilly CRUD operations. It contains a contact form that
            validates onChange and onBlur the form. The Backend was built with <strong>Java</strong>{' '}
            and the framework <strong>Spring</strong>. It was deployed on heroku:{' '}
            <a href="https://blog-react-demo.herokuapp.com">blog demo</a>
          </p>
        </article>
      </div>
    </section>
  </main>
);
export default Projects;
