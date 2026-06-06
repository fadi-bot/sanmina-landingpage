"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[3, 2, -5]} scale={1.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color="#0066cc"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[-3, -1, -3]} scale={1.2}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <MeshDistortMaterial
          color="#00e5ff"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function AnimatedIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[2, -2, -4]} scale={1}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#00ccff"
          attach="material"
          distort={0.3}
          speed={1}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < 500; i++) {
      pos.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }
    return new Float32Array(pos);
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00e5ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 -z-20 h-full w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00e5ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#0066cc" />
        
        {/* Stars Background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Floating Geometric Shapes */}
        <AnimatedSphere />
        <AnimatedTorus />
        <AnimatedIcosahedron />
        
        {/* Particle System */}
        <Particles />
        
        {/* Floating Sparkles */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sparkles 
            count={150} 
            scale={12} 
            size={3} 
            speed={0.4} 
            opacity={0.4} 
            color="#00e5ff" 
          />
          <Sparkles 
            count={80} 
            scale={12} 
            size={5} 
            speed={0.2} 
            opacity={0.2} 
            color="#0066cc" 
          />
        </Float>
      </Canvas>
    </div>
  );
}