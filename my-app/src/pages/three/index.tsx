/*
 * @Author: your name
 * @Date: 2021-08-15 14:54:22
 * @LastEditTime: 2021-08-15 15:10:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/pages/three/index.tsx
 */
import React from 'react'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();


export interface IThreeProps {
  
}
 
const Three: React.FC<IThreeProps> = () => {
  return (
    <div>
      three
    </div>
  );
}
 
export default Three;
