const CreateNameShip = (name: string, color: string) => {
  const QChip = document.createElement('div');
  QChip.classList.add('q-chip', 'row', 'inline', 'no-wrap', 'items-center', 'absolute', 'spaceship--name')
  const QChipContent = document.createElement('div')
  QChipContent.classList.add('q-chip__content', 'col', 'row', 'no-wrap', 'items-center', 'q-anchor--skip', 'svg-' + color)
  QChipContent.innerText = name

  QChip.style.fontFamily = 'Alien'
  QChip.style.fontSize = '21px'
  QChip.style.background = 'transparent'
  QChip.style.top = '-200px'
  QChip.style.left = '10px'

  QChip.appendChild(QChipContent)

  document.body.appendChild(QChip);
  return QChip
}

export default CreateNameShip