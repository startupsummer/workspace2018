/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid */
import React from 'react';
import './Issue.style.css';

const Issue = (props) => {
  const changeState = () => {
    props.func(props.obj);
  };
  return (
    <li className="issues__item">
      <img alt="" className="octicon" src={props.icon} />
      <div className="issues__title">
        {props.title}
      </div>
      <button className="btn" onClick={changeState}>{props.action} issue</button>
    </li>
  );
};

export default Issue;
