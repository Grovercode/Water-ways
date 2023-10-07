import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import Animal from "./Animal";

const Wrapper = styled.div`
  position: relative;
  canvas {
    height: 400px;
  }
`;

const ThreeDModel = () => {
  const [isTouching, setIsTouching] = useState(false);

  const handleTouchStart = () => {
    setIsTouching(true);
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
  };

  return (
    <Wrapper>
      <Canvas
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="canvas"
      >
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={2} />
        <directionalLight position={[-2, 5, 2]} intensity={2} />
        <directionalLight position={[2, 5, -2]} intensity={1} />
        <hemisphereLight
          skyColor="#ffffff"
          groundColor="#000000"
          intensity={0.8}
        />
        <pointLight position={[0, -5, 0]} intensity={100} color="#ffffff" />
        <Suspense fallback={null}>
          <Animal isTouching={isTouching} />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default ThreeDModel;
