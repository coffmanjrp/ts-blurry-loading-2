const loadText = document.querySelector('.loading-text') as HTMLElement;
const bg = document.querySelector('.bg') as HTMLElement;

let load = 0;

const int = setInterval(loading, 30);

function loading() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Javascript / jQuery - map a range of numbers to another range of numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

type scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => number;

const scale: scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
