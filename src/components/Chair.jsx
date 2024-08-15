import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import useCustomization from "../hooks/useCustomization";

export function Chair(props) {
  const { nodes, materials } = useGLTF("./models/chair.gltf");

  const { material } = useCustomization();

  const leatherTextureProps = useTexture({
    map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  leatherTextureProps.map.repeat.set(2, 2);
  leatherTextureProps.normalMap.repeat.set(2, 2);
  leatherTextureProps.roughnessMap.repeat.set(2, 2);
  leatherTextureProps.aoMap.repeat.set(2, 2);

  leatherTextureProps.map.wrapS =
    leatherTextureProps.map.wrapT =
    leatherTextureProps.normalMap.wrapS =
    leatherTextureProps.normalMap.wrapT =
    leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT =
    leatherTextureProps.aoMap.wrapS =
    leatherTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  const fabricTextureProps = useTexture({
    map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });

  fabricTextureProps.map.repeat.set(2, 2);
  fabricTextureProps.normalMap.repeat.set(2, 2);
  fabricTextureProps.roughnessMap.repeat.set(2, 2);
  fabricTextureProps.aoMap.repeat.set(2, 2);

  fabricTextureProps.map.wrapS =
    fabricTextureProps.map.wrapT =
    fabricTextureProps.normalMap.wrapS =
    fabricTextureProps.normalMap.wrapT =
    fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT =
    fabricTextureProps.aoMap.wrapS =
    fabricTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  const textureMap = {
    leather: leatherTextureProps,
    fabric: fabricTextureProps,
  };

  return (
    <group {...props} dispose={null} {...props}>
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair}>
        <meshStandardMaterial {...textureMap[material]} />
      </mesh>

      <mesh
        geometry={nodes.Cushion.geometry}
        material={materials.Cushion}
        position={[0, 0.064, 0.045]}
      >
        <meshStandardMaterial {...fabricTextureProps} />
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={false}
      />
    </group>
  );
}

useGLTF.preload("./models/chair.gltf");

export default Chair;
