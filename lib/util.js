let recordings = {};

function currentHeapMB() {
  return parseInt(process.memoryUsage().heapUsed / 1024 / 1024);
}

function gc() { // --expose-gc
  var gc = gc; 
  if(gc) return gc();
}

function startInspect(label) {
  gc();
  const h_start = currentHeapMB();
  console.time(label);
  recordings[label] = () => {
    console.timeEnd(label);
    const h_end = currentHeapMB();
    const sign = (h_end - h_start) < 0 ? '' : '+';
    console.log(`${label}: ${sign}${h_end - h_start}MB : ${h_start}MB>>${h_end}MB`);
  };
};

function endInspect(label) { 
  let logAndClear = recordings[label];
  if (logAndClear) {
    logAndClear();
    delete recordings[label];
  } else {
    console.error('no clear fn exists : ', label);
  }
}

function delay(sec) {
  return new Promise(r => setTimeout(r, sec * 1000));
}

module.exports = {
  startInspect,
  endInspect,
  delay,
};