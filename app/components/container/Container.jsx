"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./container.module.css";

export default function Container(props) {
  const containerBackgroundRef = useRef(null);
  const containerHeadlineRef = useRef(null);
  const containerTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: props.delay,
    });

    tl.to(containerBackgroundRef.current, {
      width: "100%",
      duration: props.duration || 1.2,
      ease: "power3.inOut",
    })
      .to(
        [containerHeadlineRef.current, containerTextRef.current],
        {
          color: "#fff",
          duration: props.duration || 1.2,
          ease: "power3.inOut",
        },
        "<"
      )
      .to({}, { duration: 5 }) // pause
      .to(containerBackgroundRef.current, {
        width: "0%",
        duration: props.duration || 1,
        ease: "power3.inOut",
      })
      .to(
        [containerHeadlineRef.current, containerTextRef.current],
        {
          color: "#000",
          duration: props.duration || 1.2,
          ease: "power3.inOut",
        },
        "<"
      );
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={containerBackgroundRef}
        className={styles.containerBackgroundBack}
      ></div>

      <h2 ref={containerHeadlineRef} className={styles.containerHeadline}>
        Test Überschrift
      </h2>
      <p ref={containerTextRef} className={styles.containerText}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
    </div>
  );
}