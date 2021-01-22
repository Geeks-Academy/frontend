import React from "react";
import Link from "next/link";
import Router from "next/router";
import styles from '../../styles/About.module.css'

// by naming file index.js it will automatically be the base page for the '/po' url
const about = () => {
  return (
    <div className={styles.about}>
      <h1>
        We are a group of people gathered for the purpose of collaborating on
        open source project, with possibility of extending it to outright
        service that allows for looking for coding buddies in order to gain the
        essential experience
      </h1>
      <h2>
        Project for the sake of IT community. "Programmers only app" is
        inseparable part of initiaive of Javascript Gladiators, coordinated by
        Localhost Group
      </h2>
      <h3>
        We are a creative group of people who aim to improve collaboration and
        quality of learning experience for beginner programmers
      </h3>
      <a href="https://www.facebook.com/groups/programmersonlyapp/">
        {" "}
        our facebook group
      </a>
      <hr />

      <p>Solution with Link</p>
      <p>
        Uses regular 'Link' component from 'next/link', where "a" HTML tag has
        to be included within the Link. We set href attribute on Link instead of
        regular anchor tag
      </p>
      <Link href="/">
        <a>Go back</a>
      </Link>
      <hr />

      <p>Solution with button</p>
      <p>
        Route set up in onClick handler for button, using Router and .push()
        method on it, from 'next/router' component
      </p>
      <button onClick={() => Router.push("/")}>go back</button>
      <hr />

      <p>Solution with Link</p>
      <Link href="/po/redirection">
        <a>Go to redirection after 5s</a>
      </Link>
      <hr />

      <p>Solution with button</p>
      <button onClick={() => Router.push("/po/redirection")}>
        Go to redirection after 5s
      </button>
    </div>
  );
};

export default about;
