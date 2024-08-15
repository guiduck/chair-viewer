import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Chair } from "./Chair";

const Experience = () => {
  const [chairPosition, setChairPosition] = useState([0, 0, 0]);

  useEffect(() => {
    setChairPosition([0, 0, 0]);
  }, []);

  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.6}
      polar={[-0.1, Math.PI / 4]}
      rotation={[Math.PI / 8, Math.PI / 4, 0]}
    >
      <Stage environment={"city"} intensity={0.6} contactShadow={false}>
        <Suspense fallback={null}>
          <Chair position={chairPosition} />
        </Suspense>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
