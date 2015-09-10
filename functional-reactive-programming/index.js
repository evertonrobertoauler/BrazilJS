import Rx from 'rx';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const dragTarget = document.getElementById('dragTarget');

const mouseup = Rx.Observable.fromEvent(dragTarget, 'mouseup');
const mousemove = Rx.Observable.fromEvent(document, 'mousemove');
const mousedown = Rx.Observable.fromEvent(dragTarget, 'mousedown');

const mousedrag = mousedown
  .flatMap((md) => {
    //console.log('mousedown');

    const startX = md.offsetX, startY = md.offsetY;

    return mousemove
      .map((mm) => {
        mm.preventDefault();
        //console.log('mousemove');

        return {
          left: mm.clientX - startX,
          top: mm.clientY - startY
        };
      })
      .takeUntil(mouseup);
  });

mousedrag
  //.debounce(50) // ms
  .subscribe((pos) => {
    //console.log('mousedrag');
    dragTarget.style.top = pos.top + 'px';
    dragTarget.style.left = pos.left + 'px';
  });
