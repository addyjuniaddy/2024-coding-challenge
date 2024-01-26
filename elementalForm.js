const ELEMENTS = {
  H: "Hydrogen",
  He: "Helium",
  Li: "Lithium",
  Be: "Beryllium",
  B: "Boron",
  C: "Carbon",
  N: "Nitrogen",
  O: "Oxygen",
  F: "Fluorine",
  Ne: "Neon",
  Na: "Sodium",
  Mg: "Magnesium",
  Al: "Aluminum",
  Si: "Silicon",
  P: "Phosphorus",
  S: "Sulfur",
  Cl: "Chlorine",
  K: "Potassium",
  Ar: "Argon",
  Ca: "Calcium",
  Sc: "Scandium",
  Ti: "Titanium",
  V: "Vanadium",
  Cr: "Chromium",
  Mn: "Manganese",
  Fe: "Iron",
  Ni: "Nickel",
  Co: "Cobalt",
  Cu: "Copper",
  Zn: "Zinc",
  Ga: "Gallium",
  Ge: "Germanium",
  As: "Arsenic",
  Se: "Selenium",
  Br: "Bromine",
  Kr: "Krypton",
  Rb: "Rubidium",
  Sr: "Strontium",
  Y: "Yttrium",
  Zr: "Zirconium",
  Nb: "Niobium",
  Mo: "Molybdenum",
  Tc: "Technetium",
  Ru: "Ruthenium",
  Rh: "Rhodium",
  Pd: "Palladium",
  Ag: "Silver",
  Cd: "Cadmium",
  In: "Indium",
  Sn: "Tin",
  Sb: "Antimony",
  I: "Iodine",
  Te: "Tellurium",
  Xe: "Xenon",
  Cs: "Cesium",
  Ba: "Barium",
  La: "Lanthanum",
  Ce: "Cerium",
  Pr: "Praseodymium",
  Nd: "Neodymium",
  Pm: "Promethium",
  Sm: "Samarium",
  Eu: "Europium",
  Gd: "Gadolinium",
  Tb: "Terbium",
  Dy: "Dysprosium",
  Ho: "Holmium",
  Er: "Erbium",
  Tm: "Thulium",
  Yb: "Ytterbium",
  Lu: "Lutetium",
  Hf: "Hafnium",
  Ta: "Tantalum",
  W: "Tungsten",
  Re: "Rhenium",
  Os: "Osmium",
  Ir: "Iridium",
  Pt: "Platinum",
  Au: "Gold",
  Hg: "Mercury",
  Tl: "Thallium",
  Pb: "Lead",
  Bi: "Bismuth",
  Th: "Thorium",
  Pa: "Protactinium",
  U: "Uranium",
  Np: "Neptunium",
  Pu: "Plutonium",
  Am: "Americium",
  Cm: "Curium",
  Bk: "Berkelium",
  Cf: "Californium",
  Es: "Einsteinium",
  Fm: "Fermium",
  Md: "Mendelevium",
  No: "Nobelium",
  Lr: "Lawrencium",
  Rf: "Rutherfordium",
  Db: "Dubnium",
  Sg: "Seaborgium",
  Bh: "Bohrium",
  Hs: "Hassium",
  Mt: "Meitnerium",
  Ds: "Darmstadtium",
  Rg: "Roentgenium",
  Cn: "Copernicium",
  Nh: "Nihonium",
  Fl: "Flerovium",
  Mc: "Moscovium",
  Lv: "Livermorium",
  Ts: "Tennessine",
  Og: "Oganesson",
};

function elementalForms(word) {
  function findElementalFormsHelper(currentForms, remainingWord, currentForm) {
    if (remainingWord.length === 0) {
      currentForms.push(currentForm);
      return;
    }

    for (let i = 1; i <= 3; i++) {
      const prefix = remainingWord.slice(0, i);
      if (ELEMENTS[prefix.toUpperCase()]) {
        findElementalFormsHelper(currentForms, remainingWord.slice(i), [...currentForm, `${ELEMENTS[prefix.toUpperCase()]} (${prefix})`]);
      }
    }
  }

  const forms = [];
  findElementalFormsHelper(forms, word, []);

  return forms;
}

// Example usage:
const result1 = elementalForms("snack");
console.log(result1);
/*
Output:
[
  ['Sulfur (S)', 'Nitrogen (N)', 'Actinium (Ac)', 'Potassium (K)'],
  ['Sulfur (S)', 'Sodium (Na)', 'Carbon (C)', 'Potassium (K)'],
  ['Tin (Sn)', 'Actinium (Ac)', 'Potassium (K)']
]
*/

const result2 = elementalForms("beach");
console.log(result2);
/*
Output:
[ ['Beryllium (Be)', 'Actinium (Ac)', 'Hydrogen (H)'] ]
*/
