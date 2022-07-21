/* eslint-disable no-param-reassign */
import getOneRem from '@styles/functions/getOneRem';

const dynamicallyResizeElement = (
  el: HTMLInputElement | HTMLTextAreaElement,
  padded = true
) => {
  if (el == null) {
    return;
  }
  el.style.height = '0';
  const oneRem = getOneRem();
  const padding = padded ? oneRem : 0;
  el.style.height = `${el.scrollHeight + padding}px`;

  if (el.type === 'text') {
    const { length } = el.value;
    el.style.width = `${length + 2}ch`;
  }
};
export default dynamicallyResizeElement;
