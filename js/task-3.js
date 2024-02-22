function getElementWidth(content, padding, border) {
  const numberContent = parseFloat(content);
  const numberPadding = parseFloat(padding);
  const numberBorder = parseFloat(border);
  const totalWidth = numberContent + numberPadding*2 + numberBorder*2;
  return totalWidth;
}
   
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200