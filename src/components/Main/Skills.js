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

const SkillDiv = ({ nameOfSkill, skill }) => (
  <div className="skills">
    <h1>{nameOfSkill}</h1>
    <ul className="skill">
      {skill.map(({ name, stars }) => (
        <li>
          <div>{name}</div>
          <div>
            <Stars checked={stars} />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const skillProgrammingLanguages = [
  { name: 'Java', stars: 4 },
  { name: 'Javascript', stars: 3 },
  { name: 'PHP', stars: 3 },
  { name: 'Bash', stars: 2 },
];

const skillFrameworks = [
  { name: 'Bootstrap', stars: 5 },
  { name: 'React JS', stars: 4 },
  { name: 'Spring', stars: 3 },
  { name: 'Codeigniter', stars: 3 },
];

const skillSoftware = [{ name: 'Eclipse', stars: 5 }, { name: 'Vscode', stars: 5 }];

const skillMarkupLanguages = [
  { name: 'HTML / CSS', stars: 4 },
  { name: 'Flexbox', stars: 3 },
  { name: 'CSS Grid', stars: 3 },
];

const Skills = () => (
  <main>
    <section className="section-skills">
      <SkillDiv nameOfSkill="Programming languages" skill={skillProgrammingLanguages} />

      <SkillDiv nameOfSkill="Frameworks" skill={skillFrameworks} />

      <SkillDiv nameOfSkill="Software" skill={skillSoftware} />

      <SkillDiv nameOfSkill="Markup Languages" skill={skillMarkupLanguages} />
    </section>
  </main>
);

export default Skills;
