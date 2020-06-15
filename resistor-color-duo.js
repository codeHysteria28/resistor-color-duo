//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];


export const decodedValue = ([color1, color2]) => {
  let value1 = COLORS.indexOf(color1).toString();
  let value2 = COLORS.indexOf(color2).toString();
  let connect = value1 + value2;
  let result = parseInt(connect); 
  return result;
};
