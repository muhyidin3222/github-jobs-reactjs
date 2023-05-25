import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Job = (props) => {
  const {
    company,
    id,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    type,
  } = props.data;
  
  const navigate = useNavigate()
  
  let keywords = [role];
  
  if (type) {
    keywords = [...keywords, type]
  }

  if (type) {
    keywords = [...keywords, level]
  }
  const [icon, setIcon] = useState("");

  const importSvgs = () => {
    import(`${logo}`).then((d) => {
      setIcon(d.default);
    });
  };

  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <div
      className={
        type ? "job-container job-container--borderLeft" : "job-container"
      }
    >
      <div className="logo" onClick={() => navigate('/detail/' + id)}>
        <img src={icon} alt="" />
      </div>
      <div className="part1" onClick={() => navigate('/detail/' + id)}>
        <div className="company">
          <span className="cname">{company}</span>
          {props.data.new && <span className="new">{role}</span>}
          {props.data.type && <span className="featured">{type}</span>}
        </div>

        <div className="position">{position}</div>

        <div className="details">
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="part2">
        {keywords.map((key, id) => (
          <span onClick={() => props.setkeywords(key)} key={id}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Job;
