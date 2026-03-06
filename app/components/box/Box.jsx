"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap";

import styles from "./box.module.css";

export default function Box() {
  const boxRef = useRef(null);

   useEffect(() => {
      gsap.fromTo(
      boxRef.current,
      {
        y: 200,
        opacity: 0,
        scale: 0.2,
        rotation: -180,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 2.5,
        delay: 0.5,
        ease: "power3.out",
      }
  )
    }, [])


  return(
    <div ref={boxRef} className={styles.box}></div>
  );
}