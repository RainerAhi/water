import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {

  const { camera, scene } = useThree()

  const model = useRef()
  
  const bracelet = useRef()

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    //FIRST TO SECOND

    tl
    .to(model.current.rotation, {
      y: Math.PI * 2.5,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: 2,
      y: -0.5,

      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //SECOND TO THIRD

    .to(scene.position, {
      z: -3,
      x: 2,
      y: 0.5,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(model.current.rotation, {
      y: Math.PI * 5,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //THIRD TO FOURTH
    
    .to(scene.position, {
      z: 0,
      x: 0,
      y: 0,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    
    .to(model.current.rotation, {
      y: Math.PI * 7.5,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    // FOUR TO FIVE

    .to(model.current.rotation, {
      y: Math.PI * 10,
      scrollTrigger: {
        trigger: ".five",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //FIVE TO SIX

    .to(".bottle, .hat, .medicine, .shirt", {
      opacity: 0,
      width: "20%",
      rotation: 30,
      scrollTrigger: {
        trigger: ".six",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(model.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        trigger: ".six",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(bracelet.current.scale, {
      x: 2,
      y: 2,
      z: 2,
      scrollTrigger: {
        trigger: ".six",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    //SIX TO SEVEN

    .to(bracelet.current.scale, {
      x: 2,
      y: 2,
      z: 2,
      scrollTrigger: {
        trigger: ".seven",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: -2.5,
      x: 2.5,
      y: 0,
      scrollTrigger: {
        trigger: ".seven",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(bracelet.current.rotation, {
      z: Math.PI * 2.5,
      scrollTrigger: {
        trigger: ".seven",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //SEVEN TO EIGHT

    .to(bracelet.current.rotation, {
      z: Math.PI * 4,
      scrollTrigger: {
        trigger: ".eight",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    // EIGHT TO NINE 

    .to(bracelet.current.rotation, {
      z: Math.PI * 6,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: 0,
      x: -4.5,
      y: 1,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(bracelet.current.scale, {
      x: 2,
      y: 2,
      z: 2,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })



  }, [])


  const { nodes, materials } = useGLTF("./cubeball.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group ref={bracelet} scale={ 0 } >
            <mesh geometry={nodes.ball.geometry} material={nodes.ball.material} />
        </group>

        <group ref={model} scale={ 1.25 } >
            <mesh geometry={nodes.cube.geometry} material={nodes.cube.material} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./cubeball.glb");