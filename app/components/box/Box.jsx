"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./box.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Box({ directionX, directionY, bgColor }) {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        x: directionX,
        y: directionY,
        opacity: 0,
        rotation: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        rotation: 380,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#trigger",
          start: "top center",
          end: "bottom",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, [directionX, directionY]);

  return (
    <div
      ref={boxRef}
      className={styles.box}
      style={{ backgroundColor: bgColor }}
    />
  );
}