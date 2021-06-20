import { ScrollbarPlugin } from 'smooth-scrollbar';
import { Data2d } from 'smooth-scrollbar/interfaces';

class LimitScrollspeedPlugin extends ScrollbarPlugin {
  static pluginName = 'limitScrollspeed';

  private _touching = false;

  transformDelta(delta: { x: number; y: number }, fromEvent: Event) {
    const { x, y } = delta;
    if (/wheel/.test(fromEvent.type)) return delta;

    switch (fromEvent.type) {
      case 'touchstart':
      case 'touchmove':
        this._touching = true;
        break;

      case 'touchcancel':
      case 'touchend':
        this._touching = false;
        break;
    }

    return {
      y: Math.abs(y) > 10 ? Math.sign(y) * 10 : y,
      x: Math.abs(x) > 10 ? Math.sign(x) * 10 : x,
    };
  }

  onRender({ x, y }: Data2d) {
    let offset;
    if (
      !this._touching &&
      !x &&
      !y &&
      (offset = Math.round(this.scrollbar.offset.x * 10) / 10) > 0
    ) {
      this.scrollbar.addMomentum(-offset, 0);
    }
  }
}

export default LimitScrollspeedPlugin