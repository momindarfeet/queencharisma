import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const COLS = 8;
const ROWS = 10;

function makeGeo(col: number, row: number, w: number, h: number) {
  const g = new THREE.PlaneGeometry(w, h);
  const uv = g.attributes.uv;
  const arr = uv.array as Float32Array;
  const u0 = col / COLS;
  const u1 = (col + 1) / COLS;
  const v0 = 1 - (row + 1) / ROWS;
  const v1 = 1 - row / ROWS;
  arr[0] = u0;
  arr[1] = v1;
  arr[2] = u1;
  arr[3] = v1;
  arr[4] = u0;
  arr[5] = v0;
  arr[6] = u1;
  arr[7] = v0;
  uv.needsUpdate = true;
  return g;
}

function Shards({
  progress,
  texture,
}: {
  progress: React.MutableRefObject<number>;
  texture: THREE.Texture;
}) {
  const group = useRef<THREE.Group>(null);
  const mat = useMemo(() => {
    const m = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
    });
    return m;
  }, [texture]);

  const starts = useRef<number[][]>([]);
  if (starts.current.length === 0) {
    starts.current = Array.from({ length: COLS * ROWS }, () => [
      (Math.random() - 0.5) * 18,
      (Math.random() - 0.5) * 14,
      Math.random() * 11 + 2,
      (Math.random() - 0.5) * 1.4,
    ]);
  }

  const w = 0.42;
  const h = 0.42 * 1.72;
  const geos = useMemo(() => {
    const list: THREE.PlaneGeometry[] = [];
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        list.push(makeGeo(x, y, w * 0.94, h * 0.94));
      }
    }
    return list;
  }, []);

  useFrame(() => {
    const g = group.current;
    if (!g) return;
    const p = Math.min(1, progress.current / 0.28);
    const e = 1 - (1 - p) * (1 - p) * (1 - p);
    mat.opacity = 0.96 * (1 - Math.max(0, (progress.current - 0.2) / 0.16));
    g.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      const { tx, ty } = mesh.userData as { tx: number; ty: number };
      const s = starts.current[i];
      mesh.position.x = s[0] * (1 - e) + tx * e;
      mesh.position.y = s[1] * (1 - e) + ty * e;
      mesh.position.z = s[2] * (1 - e);
      mesh.rotation.z = s[3] * (1 - e);
    });
  });

  const meshes = [];
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const i = y * COLS + x;
      const tx = (x - (COLS - 1) / 2) * w;
      const ty = ((ROWS - 1) / 2 - y) * h;
      meshes.push(
        <mesh key={i} geometry={geos[i]} position={[tx, ty, 0]} userData={{ tx, ty }} material={mat} />,
      );
    }
  }

  return <group ref={group}>{meshes}</group>;
}

export function AssemblyShards({
  progress,
}: {
  progress: React.MutableRefObject<number>;
}) {
  const [tex, setTex] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const t = loader.load("/media/frames/lb-018.jpg", (loaded) => {
      loaded.colorSpace = THREE.SRGBColorSpace;
      loaded.minFilter = THREE.LinearFilter;
      loaded.magFilter = THREE.LinearFilter;
      loaded.generateMipmaps = false;
      setTex(loaded);
    });
    return () => t.dispose();
  }, []);

  if (!tex) return null;

  return (
    <Canvas dpr={[1, 1.4]} camera={{ position: [0, 0, 9], fov: 32 }} gl={{ alpha: true, antialias: true }}>
      <Shards progress={progress} texture={tex} />
    </Canvas>
  );
}
