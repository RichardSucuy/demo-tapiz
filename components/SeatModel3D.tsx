'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, RoundedBox, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Un proxy 3D muy bonito si no hay modelo .glb aún
function ProxySeat({ colors }: { colors: { base: string, espaldar: string, cabezal: string } }) {
  const group = useRef<THREE.Group>(null);
  
  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {/* Base / Cojín */}
      <RoundedBox args={[1.2, 0.3, 1.2]} position={[0, 0, 0]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={colors.base} roughness={0.4} metalness={0.1} />
      </RoundedBox>
      
      {/* Soportes Laterales Inferiores */}
      <RoundedBox args={[0.2, 0.4, 1.2]} position={[-0.5, 0.1, 0]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={colors.base} roughness={0.4} metalness={0.1} />
      </RoundedBox>
      <RoundedBox args={[0.2, 0.4, 1.2]} position={[0.5, 0.1, 0]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={colors.base} roughness={0.4} metalness={0.1} />
      </RoundedBox>

      {/* Espaldar */}
      <RoundedBox args={[1, 1.5, 0.3]} position={[0, 0.9, -0.4]} rotation={[0.2, 0, 0]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={colors.espaldar} roughness={0.5} metalness={0.1} />
      </RoundedBox>
      
      {/* Soportes Laterales Espaldar */}
      <RoundedBox args={[0.2, 1.4, 0.4]} position={[-0.45, 0.9, -0.3]} rotation={[0.2, 0, 0]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={colors.espaldar} roughness={0.5} metalness={0.1} />
      </RoundedBox>
      <RoundedBox args={[0.2, 1.4, 0.4]} position={[0.45, 0.9, -0.3]} rotation={[0.2, 0, 0]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={colors.espaldar} roughness={0.5} metalness={0.1} />
      </RoundedBox>

      {/* Cabezal */}
      <RoundedBox args={[0.6, 0.4, 0.2]} position={[0, 1.9, -0.6]} rotation={[0.1, 0, 0]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={colors.cabezal} roughness={0.6} metalness={0.1} />
      </RoundedBox>
      {/* Soportes metálicos de cabezal */}
      <mesh position={[-0.15, 1.65, -0.5]} rotation={[0.1, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#cccccc" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.15, 1.65, -0.5]} rotation={[0.1, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#cccccc" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function RealSeat({ url, colors }: { url: string, colors: { base: string, espaldar: string, cabezal: string } }) {
  const { scene } = useGLTF(url) as any;
  // Opcional: Podrías recorrer scene.children aquí para pintar colores por mesh si el modlo está separado.
  return <primitive object={scene} />;
}



export default function SeatModel3D({ colors }: { colors: { base: string, espaldar: string, cabezal: string } }) {
  return (
    <Canvas camera={{ position: [3, 2.5, 5], fov: 45 }} gl={{ preserveDrawingBuffer: true, antialias: true }}>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.2} penumbra={1} intensity={2} castShadow />
      <spotLight position={[-5, 5, -5]} angle={0.2} penumbra={1} intensity={1} />
      
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
        <RealSeat url="/asiento.glb" colors={colors} />
      </Float>

      <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.5} far={10} color="#000000" position={[0, -0.5, 0]} />
      <Environment preset="studio" />
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.5} enablePan={false} minDistance={1.5} maxDistance={6} />
    </Canvas>
  );
}
