import React from 'react';
import { Canvas, MeshProps, useFrame } from 'react-three-fiber';
import { Mesh } from 'three';

function Box(props: MeshProps) {
  // This reference will give us direct access to the mesh
  const mesh = React.useRef<Mesh>();

  // Set up state for the hovered and active state
  const [hovered, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(_event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default (): React.ReactNode => {
  return (
    <Canvas>
      {/* <ambientLight />
      <pointLight position={[10, 10, 10]} /> */}
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};
