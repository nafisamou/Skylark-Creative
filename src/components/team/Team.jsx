import React from "react";

import "./Team.css";

const Team = () => {
  return (
    <div className="whole-team">
      <div className="the-team">
        <div className="team">
          <div className="child-1">
            <h1>
              Neque tortor porttitor ornare ultrices. Risus eget vel maecenas{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin ac egestas
              rutrum eget urna. Risus eget congue duis diam. Etiam nisl quisque
              ut sed ac. Neque tortor porttitor ornare ultrices. Risus eget vel
              maecenas aliquam. Amet euismod purus turpis velit. Eget sem
              integer urna odio.
            </p>
            <div className="team-btn">
              <button> JOIN THE TEAM</button>
              <button>MEET THE TEAM</button>
            </div>
          </div>
          <div className="child-2">{/* <img src={team} alt="" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Team;
