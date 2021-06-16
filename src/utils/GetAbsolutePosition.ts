const getAbsolutePosition = (el: HTMLElement) => {
  const root = document.documentElement;
  const body = document.body;
  const { top, left, height, width } = el.getBoundingClientRect();

  const scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
  const scrollLeft =
    window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

  const clientTop = root.clientTop || body.clientTop || 0;
  const clientLeft = root.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(top + scrollTop - clientTop),
    left: Math.round(left + scrollLeft - clientLeft),
    height,
    width
  };
};

export default getAbsolutePosition;
