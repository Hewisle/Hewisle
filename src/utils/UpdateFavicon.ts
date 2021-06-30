const UpdateFavicon = (timeout = 1000, el: CloneElement | null = null) => {
  setTimeout(() => {
    const favicon = document.head.querySelector(
      "link[type='image/svg+xml']"
    ) as HTMLLinkElement;
    const svg =
      el || (document.querySelector('.q-carousel svg') as CloneElement);
    const fills = svg.querySelectorAll('[class^="fill-primary"]');
    // const stroke = svg.getElementsByClassName('stroke-primary-dark');

    for (const el of fills) {
      const value = window.getComputedStyle(el).getPropertyValue('fill');
      el.setAttribute('fill', value);
    }
    const clone = svg.cloneNode(true) as CloneElement;
    // Stoopid Safari is not able to do clone.getElementById
    const fire = clone.querySelector('spaceship-fire') as HTMLElement
    clone.setAttribute('style', '');
    fire.setAttribute('display', 'block')
    const SVGEncoded = btoa(new XMLSerializer().serializeToString(clone));

    favicon.href = 'data:image/svg+xml;base64,' + SVGEncoded;
  }, timeout);
};

export default UpdateFavicon