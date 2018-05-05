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
          <h1>Blog demo using React and Spring</h1>
          <p>
            My first time learning react made this demo of a blog, here you can create posts, types,
            see a dashboard with all the posts and have CRUD operations
          </p>
          <p>
            You can access the website here , it was deploy in heroku:
            <a href="https://blog-react-demo.herokuapp.com">blog demo</a>
          </p>
        </article>
      </div>
    </section>
  </main>
);
export default Projects;
