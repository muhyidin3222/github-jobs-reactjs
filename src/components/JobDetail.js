import React, { useEffect, useState } from "react";

const Job = (props) => {
  const {
    company,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    type,
    description,
    how_to_apply
  } = props.data || {};

  let keywords = [role];

  if (type) {
    keywords = [...keywords, type]
  }

  if (type) {
    keywords = [...keywords, level]
  }

  const [icon, setIcon] = useState("");

  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
      setIcon(d.default);
    });
  };

  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <div
      className={
        type ? "job-detail job-detail--borderLeft" : "job-detail"
      }
    >
      <a style={{ display: 'flex' }}>
        <div className="logo">
          <img src={icon} alt="" />
        </div>
        <div className="part1">
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
      </a>

      <div className="part2">
        {keywords.map((key, id) => (
          <span onClick={() => props.setkeywords(key)} key={id}>
            {key}
          </span>
        ))}
      </div>

      <div className="part3">
        <div
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="part3">
        <span className="cname">How To Apply</span>
        <div
          dangerouslySetInnerHTML={{ __html: how_to_apply }}
        />
      </div>
    </div>
  );
};

export default Job;
