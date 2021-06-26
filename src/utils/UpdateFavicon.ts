const UpdateFavicon = (timeout = 1000, el: CloneElement | null = null) => {
  setTimeout(() => {
    const favicon = document.head.querySelector(
      "link[type='image/svg+xml']"
    ) as HTMLLinkElement;
    const svg =
      el || (document.querySelector('.q-carousel svg') as CloneElement);
    const colors1 = svg.getElementsByClassName('fill-primary-dark');
    const colors2 = svg.getElementsByClassName('fill-primary');
    const colors3 = svg.getElementsByClassName('stroke-primary-dark');

    for (const color of colors1) {
      const fill = window.getComputedStyle(color).getPropertyValue('fill');
      color.setAttribute('fill', fill);
    }
    for (const color of colors2) {
      const fill = window.getComputedStyle(color).getPropertyValue('fill');
      color.setAttribute('fill', fill);
    }
    for (const color of colors3) {
      const stroke = window
        .getComputedStyle(color)
        .getPropertyValue('fill');
      color.setAttribute('stroke', stroke);
    }
    const clone = svg.cloneNode(true) as CloneElement;
    const fire = clone.getElementById('spaceship-fire')
    clone.setAttribute('style', '');

    fire.setAttribute('display', 'block')
    const href =
      'data:image/svg+xml;base64,' +
      btoa(new XMLSerializer().serializeToString(clone));
    console.warn({ href });

    favicon.href = href;
  }, timeout);
};

export default UpdateFavicon