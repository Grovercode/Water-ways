import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const modelRef = useRef();

  useFrame(() => {
    if (!props.isTouching) {
      modelRef.current.rotation.y += 0.008; // Adjust the rotation speed here
    }
  });

  const { nodes, materials } = useGLTF("/animal.gltf");
  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-1.357, -2.946, -2.215]}>
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials["null"]}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials["null"]}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials["null"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/animal.gltf");
