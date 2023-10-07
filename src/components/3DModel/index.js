import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Animal from "./Animal";

const Wrapper = styled.div`
  position: relative;
  canvas {
    height: 400px;
  }
`;

const ThreeDModel = () => {
  return (
    <Wrapper>
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={2} />
        <directionalLight position={[-2, 5, 2]} intensity={2} />
        <hemisphereLight
          skyColor="#ffffff"
          groundColor="#000000"
          intensity={0.8}
        />
        <pointLight position={[0, -5, 0]} intensity={100} color="#ffffff" />
        <Suspense fallback={null}>
          <Animal />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
};

export default ThreeDModel;
