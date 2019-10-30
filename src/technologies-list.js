import React from "react";
import { shuffle } from "lodash";

const technologies = shuffle([
  "couchbase.png",
  "css3.svg",
  "docker.svg",
  "elasticsearch.svg",
  "koa.png",
  "mongodb.svg",
  "MySQL.svg",
  "nextjs.png",
  "nodejs.svg",
  "postgresql.svg",
  "react.svg"
]);

const TechnologiesList = ({ hidden, length = technologies.length }) => {
  return (
    <div>
      <ul className={`technologies ${hidden ? 'hidden-edges' : ''}`}>
        <div className="tech-col">
          {technologies.slice(0, length - 1).map((tech, index) => (
            <li
              className="technology"
              key={`tech-${tech}-${index}`}
              index={index}
            >
              <img src={`assets/tech/${tech}`} alt={tech} />
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default TechnologiesList;
