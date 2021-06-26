import gsap from 'gsap';

const CreateSpareShip = (type: string, color: string) => {
  const template = document.createElement('template');
  const rawSVG =
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require(`!!../assets/spaceship/${type}.svg?raw`) as string;
  template.innerHTML = rawSVG;
  const spaceship = template.content.firstChild as CloneElement;
  spaceship.style.position = 'absolute';
  spaceship.classList.add(
    'spaceship-clone',
    `svg-${color}`
  );

  document.body.appendChild(spaceship);
  gsap.set(spaceship, {
    x: window.innerWidth * 0.45,
    y: window.innerHeight * 0.75,
    left: 0,
    top: 0,

    width: '200px',
    height: '200px',
    yPercent: -50,
    xPercent: -50,
  });
  return spaceship
}

export default CreateSpareShip