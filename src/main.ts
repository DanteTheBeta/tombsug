/*
* File: main.ts
* Author: Katonás Péter
* Copyright: 2024, Katonás Péter
* Group: SZOFT II/2/E
* Date: 2024-11-23
* Github: https://github.com/DanteTheBeta/tombsug.git
* Licenc: GNU GPL
*/

const doc = {
  sideInput: document.querySelector('#side')! as HTMLInputElement,
  angleInput: document.querySelector('#angle')! as HTMLInputElement,
  radiusInput: document.querySelector('#radius')! as HTMLInputElement,
  calcButton: document.querySelector('#calcButton')! as HTMLButtonElement,
};

doc.calcButton.addEventListener('click', () => {
  const side = Number(doc.sideInput.value);
  const angle = Number(doc.angleInput.value);
  const angleInRadians = (angle * Math.PI) / 180; 
  const radius = 0.5 * side * Math.sin(angleInRadians);
  doc.radiusInput.value = radius.toFixed(2);
});