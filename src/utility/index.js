export function SmoothHorizontalScrolling(e, time, amount, start) {
  var eAnt = amount / 100;
  var curTime = 0;
  var scrollCounter = 0;
  const y = window.scrollY;
  while (curTime <= time) {
    window.setTimeout(SHS_B, curTime, e, scrollCounter, eAnt, start, y);
    curTime += time / 100;
    scrollCounter++;
  }
  window.scrollTo(0, y);
}

function SHS_B(e, sc, eAnt, start, y) {
  e.scrollLeft = eAnt * sc + start;
}
