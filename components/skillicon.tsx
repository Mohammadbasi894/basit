// // components/SkillIcon.tsx
// import React from "react";
// import { Icosahedron } from "@react-three/drei";
// import { Texture } from "three";

// interface SkillIconProps {
//   position: [number, number, number];
//   texture: Texture | null; // Adjusted type to Texture
// }

// const SkillIcon: React.FC<SkillIconProps> = ({ position, texture }) => {
//   return (
//     <mesh position={position}>
//       <Icosahedron args={[0.5, 0]}>
//         <meshStandardMaterial attach="material" map={texture} />{" "}
//         {/* Use texture directly */}
//       </Icosahedron>
//     </mesh>
//   );
// };

// export default SkillIcon;
