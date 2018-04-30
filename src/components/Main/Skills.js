import React from 'react';

const Stars = ({ checked }) => {
  let i = 0;
  const stars = [];
  for (i; i < checked; i += 1) {
    stars.push(<i key={i} className="fas fa-star" />);
  }
  for (i; i < 5; i += 1) {
    stars.push(<i key={i} className="far fa-star" />);
  }

  return stars;
};

const Skills = () => (
  <main>
    <section className="section-skills">
      <div className="skills">
        <h1>Programming Languages</h1>
        <ul className="skill">
          <li>
            <div>Java</div>
            <div>
              <Stars checked={4} />
            </div>
          </li>
          <li>
            <div>Javascript (ECMA 2015 / ES6)</div>
            <div>
              <Stars checked={3} />
            </div>
          </li>
          <li>
            <div>PHP</div>
            <div>
              <Stars checked={3} />
            </div>
          </li>
          <li>
            <div>Bash</div>
            <div>
              <Stars checked={2} />
            </div>
          </li>
        </ul>
      </div>
      <div className="skills">
        <h1>Frameworks</h1>
        <ul className="skill">
          <li>
            <div>Bootstrap</div>
            <div>
              <Stars checked={5} />
            </div>
          </li>
          <li>
            <div>React JS</div>
            <div>
              <Stars checked={4} />
            </div>
          </li>
          <li>
            <div>Spring</div>
            <div>
              <Stars checked={3} />
            </div>
          </li>
          <li>
            <div>Codeigniter</div>
            <div>
              <Stars checked={3} />
            </div>
          </li>
        </ul>
      </div>
      <div className="skills">
        <h1>Software</h1>
        <ul className="skill">
          <li>
            <div>Eclipse</div>
            <div>
              <Stars checked={5} />
            </div>
          </li>
          <li>
            <div>Vscode</div>
            <div>
              <Stars checked={5} />
            </div>
          </li>
        </ul>
      </div>
      <div className="skills">
        <h1>Markup Languages</h1>
        <ul className="skill">
          <li>
            <div>HTML / CSS</div>
            <div>
              <Stars checked={5} />
            </div>
          </li>
          <li>
            <div>Flexbox</div>
            <div>
              <Stars checked={3} />
            </div>
          </li>
          <li>
            <div>CSS Grid</div>
            <div>
              <Stars checked={3} />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
);

export default Skills;
