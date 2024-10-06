import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

// Función que simula el comportamiento de SplitText
function splitText(element: HTMLElement, type: 'chars' | 'words' | 'lines') {
  const text = element.innerText;
  element.innerHTML = '';

  switch (type) {
    case 'chars':
      element.innerHTML = text.split('').map(char => `<span class="char">${char}</span>`).join('');
      break;
    case 'words':
      element.innerHTML = text.split(' ').map(word => `<span class="word">${word} </span>`).join('');
      break;
    case 'lines':
      const lines = text.split('\n').map(line => `<div class="line">${line}</div>`).join('');
      element.innerHTML = `<div class="lines-wrapper">${lines}</div>`;
      break;
  }
}

export const useScrollAnimations = () => {
  const sections = document.querySelectorAll<HTMLElement>('section');
  const images = document.querySelectorAll<HTMLElement>('.bg');
  const headings = gsap.utils.toArray<HTMLElement>('.section-heading');
  const outerWrappers = gsap.utils.toArray<HTMLElement>('.outer');
  const innerWrappers = gsap.utils.toArray<HTMLElement>('.inner');
  let currentIndex = -1;
  const wrap = gsap.utils.wrap(0, sections.length);
  let animating: boolean = false;

  gsap.set(outerWrappers, { yPercent: 100 });
  gsap.set(innerWrappers, { yPercent: -100 });

  headings.forEach((heading) => {
    splitText(heading, 'chars');
  });

  function gotoSection(index: number, direction: number) {
    index = wrap(index);
    animating = true;
    const fromTop = direction === -1;
    const dFactor = fromTop ? -1 : 1;
    const tl = gsap.timeline({
      defaults: { duration: 1.25, ease: 'power1.inOut' },
      onComplete: () => {
        animating = false;
      },
    });

    if (currentIndex >= 0) {
      gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], { autoAlpha: 0 });
    }

    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(
      [outerWrappers[index], innerWrappers[index]],
      { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
      { yPercent: 0 },
      0
    )
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      .fromTo(
        sections[index].querySelectorAll('.char'),
        {
          autoAlpha: 0,
          yPercent: 150 * dFactor,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: 'power2',
          stagger: {
            each: 0.02,
            from: 'random',
          },
        },
        0.2
      );

    currentIndex = index;
  }

  Observer.create({
    type: 'wheel,touch,pointer',
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
  });

  gotoSection(0, 1);
};
