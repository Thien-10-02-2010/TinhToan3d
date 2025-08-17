import { drawCube } from './cube.js';
import { drawHalfSphere } from './halfSphere.js';
import { drawCylinder } from './cylinder.js';
import { drawCone } from './cone.js';
import { drawFrustum } from './frustum.js';
import { drawPyramid } from './pyramid.js';
import { drawTetrahedron } from './tetrahedron.js';
import { drawTriangularPrism } from './triangularPrism.js';
import { drawPentagonPrism } from './pentagonPrism.js';
import { drawHexagonalPrism } from './hexagonalPrism.js';
import { drawTorus } from './torus.js';
import { drawCapsule } from './capsule.js';
import { drawEllipsoid } from './ellipsoid.js';
import { drawTruncatedPyramid } from './truncatedPyramid.js';
import { drawOctahedron } from './octahedron.js';
import { drawIcosahedron } from './icosahedron.js';
import { drawDodecahedron } from './dodecahedron.js';

export const allShapes = [
  { id: 'cube', name: 'Lập phương', draw: drawCube },
  { id: 'halfSphere', name: 'Nửa cầu', draw: drawHalfSphere },
  { id: 'cylinder', name: 'Hình trụ', draw: drawCylinder },
  { id: 'cone', name: 'Hình nón', draw: drawCone },
  { id: 'frustum', name: 'Hình nón cụt', draw: drawFrustum },
  { id: 'pyramid', name: 'Chóp tứ giác đều (vuông)', draw: drawPyramid },
  { id: 'tetrahedron', name: 'Tetrahedron (tứ diện đều)', draw: drawTetrahedron },
  { id: 'triangularPrism', name: 'Lăng trụ tam giác đều', draw: drawTriangularPrism },
  { id: 'pentagonPrism', name: 'Lăng trụ ngũ giác đều', draw: drawPentagonPrism },
  { id: 'hexagonalPrism', name: 'Lăng trụ lục giác đều', draw: drawHexagonalPrism },
  { id: 'torus', name: 'Xuyến (Torus)', draw: drawTorus },
  { id: 'capsule', name: 'Viên nang (Capsule)', draw: drawCapsule },
  { id: 'ellipsoid', name: 'Ellipsoid', draw: drawEllipsoid },
  { id: 'truncatedPyramid', name: 'Chóp cụt (đáy vuông)', draw: drawTruncatedPyramid },
  { id: 'octahedron', name: 'Octahedron (bát diện đều)', draw: drawOctahedron },
  { id: 'icosahedron', name: 'Icosahedron (20 mặt đều)', draw: drawIcosahedron },
  { id: 'dodecahedron', name: 'Dodecahedron (12 mặt đều)', draw: drawDodecahedron },
];
