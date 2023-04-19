import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/isometric_25.svg").default,
    description: (
      <>This guide build for both beginner as well as advaced levels.</>
    ),
  },
  {
    title: "Free to use",
    Svg: require("@site/static/img/4048.svg").default,
    description: (
      <>
        You can use our experiments and code examples form our organization for
        futher experiments and it is free of charge.
      </>
    ),
  },
  {
    title: "Complete Guide",
    Svg: require("@site/static/img/Checklist.svg").default,
    description: (
      <>
        It is a complete guide for code-mixed classification as well as prompt
        engineering
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
