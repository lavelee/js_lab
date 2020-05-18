const u = require('../lib/util.js');
const N_BIG = 10000;
const N_SMALL = 10;


u.startInspect('m_keys');
let obj_1 = {};
for (let i = 0; i < N_SMALL; i++) {
  obj_1[i] = {};
  for (let j = 0; j < N_SMALL; j++) {
    obj_1[i][j] = {};
    for (let k = 0; k < N_SMALL; k++) {
      obj_1[i][j][k] = {};
      for (let l = 0; l < N_BIG; l++) {
        obj_1[i][j][k][l] = 1;
      }
    }
  }
}
// m_keys: 414.34ms
// m_keys: +82MB : 2MB>>84MB
u.endInspect('m_keys');

u.startInspect('m_objects');
let obj_2 = {};
for (let i = 0; i < N_BIG; i++) {
  obj_2[i] = {};
  for (let j = 0; j < N_SMALL; j++) {
    obj_2[i][j] = {};
    for (let k = 0; k < N_SMALL; k++) {
      obj_2[i][j][k] = {};
      for (let l = 0; l < N_SMALL; l++) {
        obj_2[i][j][k][l] = 1;
      }
    }
  }
}
// m_objects: 748.487ms
// m_objects: +138MB : 84MB>>222MB
u.endInspect('m_objects')
