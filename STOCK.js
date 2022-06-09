const STOCK = [
  {
    name: "Marha darált (NPK fitness)",
    calories: 155,
    protein: 22,
    fat: 7,
    ch: 0,
  },
  {
    name: "Sertéscomb",
    calories: 136,
    protein: 20.5,
    fat: 5.4,
    ch: 0,
  },
  {
    name: "Sertés lapocka",
    calories: 148,
    protein: 19.6,
    fat: 7.1,
    ch: 0,
  },
  {
    name: "Sertés karaj",
    calories: 140,
    protein: 22,
    fat: 5.5,
    ch: 0,
  },
  {
    name: "Lazac",
    calories: 131,
    protein: 22,
    fat: 5,
    ch: 0,
  },
  {
    name: "Tilápia",
    calories: 96,
    protein: 20,
    fat: 2,
    ch: 0,
  },
  {
    name: "Tőkehal",
    calories: 72,
    protein: 18,
    fat: 0,
    ch: 0,
  },
  {
    name: "Csirke alsócomb",
    calories: 116,
    protein: 20,
    fat: 4,
    ch: 0,
  },
  {
    name: "Csirke felsőcomb",
    calories: 121,
    protein: 20,
    fat: 4,
    ch: 0,
  },
  {
    name: "Csirkemell",
    calories: 120,
    protein: 22,
    fat: 3,
    ch: 0,
  },
  {
    name: "Főtt tojás (1 db)",
    calories: 82,
    protein: 6,
    fat: 6,
    ch: 1,
  },
  {
    name: "Tojásfehérje rúd",
    calories: 56,
    protein: 12,
    fat: 0,
    ch: 1,
  },
  {
    name: "Magos kenyér",
    calories: 288,
    protein: 11,
    fat: 7,
    ch: 45,
  },
  {
    name: "Korpás kenyér",
    calories: 247,
    protein: 10,
    fat: 1.8,
    ch: 44.6,
  },
  {
    name: "Rozskenyér",
    calories: 260,
    protein: 8,
    fat: 3,
    ch: 42,
  },
  {
    name: "Feta sajt",
    calories: 264,
    protein: 14,
    fat: 21,
    ch: 4,
  },
  {
    name: "Főzőtejszín (10%)",
    calories: 119,
    protein: 3,
    fat: 10,
    ch: 4,
  },
  {
    name: "Főzőtejszín (20%)",
    calories: 208,
    protein: 3,
    fat: 20,
    ch: 4,
  },
  {
    name: "Görög joghurt",
    calories: 102,
    protein: 4,
    fat: 7,
    ch: 5,
  },
  {
    name: "Joghurt",
    calories: 57,
    protein: 3,
    fat: 3,
    ch: 4,
  },
  {
    name: "Kefir",
    calories: 55,
    protein: 3,
    fat: 3,
    ch: 4,
  },
  {
    name: "Tehéntej",
    calories: 60,
    protein: 3,
    fat: 4,
    ch: 4,
  },
  {
    name: "Trappista sajt",
    calories: 352,
    protein: 24,
    fat: 28,
    ch: 1,
  },
  {
    name: "Basmati rizs (száraz)",
    calories: 362,
    protein: 8,
    fat: 3,
    ch: 73,
  },
  {
    name: "Basmati rizs (főtt)",
    calories: 147,
    protein: 4,
    fat: 1,
    ch: 33,
  },
  {
    name: "Bulgur (száraz)",
    calories: 342,
    protein: 12,
    fat: 1,
    ch: 76,
  },
  {
    name: "Bulgur (főtt)",
    calories: 83,
    protein: 3,
    fat: 0,
    ch: 19,
  },
  {
    name: "Fehér rizs (száraz)",
    calories: 360,
    protein: 7,
    fat: 1,
    ch: 78,
  },
  {
    name: "Fehér rizs (főtt)",
    calories: 130,
    protein: 2,
    fat: 0,
    ch: 28,
  },
  {
    name: "Jázmin rizs (száraz)",
    calories: 320,
    protein: 6,
    fat: 0,
    ch: 72,
  },
  {
    name: "Jázmin rizs (főtt)",
    calories: 103,
    protein: 2,
    fat: 0,
    ch: 22,
  },
  {
    name: "Zabpehely",
    calories: 389,
    protein: 17,
    fat: 7,
    ch: 56,
  },
  {
    name: "Durumtészta (száraz)",
    calories: 360,
    protein: 13,
    fat: 1,
    ch: 73,
  },
  {
    name: "Durumtészta (főtt)",
    calories: 158,
    protein: 5,
    fat: 1,
    ch: 32,
  },
  {
    name: "Kuszkusz (száraz)",
    calories: 376,
    protein: 13,
    fat: 1,
    ch: 73,
  },
  {
    name: "Kuszkusz (főtt)",
    calories: 112,
    protein: 4,
    fat: 0,
    ch: 22,
  },
  {
    name: "Quinoa (száraz)",
    calories: 368,
    protein: 14,
    fat: 6,
    ch: 57,
  },
  {
    name: "Quinoa (főtt)",
    calories: 120,
    protein: 5,
    fat: 2,
    ch: 19,
  },
  {
    name: "Spagetti (száraz)",
    calories: 371,
    protein: 13,
    fat: 2,
    ch: 72,
  },
  {
    name: "Spagetti (főtt)",
    calories: 158,
    protein: 6,
    fat: 1,
    ch: 30,
  },
  {
    name: "Alma",
    calories: 52,
    protein: 0,
    fat: 0,
    ch: 11,
  },
  {
    name: "Banán",
    calories: 89,
    protein: 1,
    fat: 0,
    ch: 20,
  },
  {
    name: "Tesco fagyasztott gyümölcsmix",
    calories: 40,
    protein: 1,
    fat: 0,
    ch: 7,
  },
  {
    name: "Bab (főtt)",
    calories: 118,
    protein: 8,
    fat: 1,
    ch: 14,
  },
  {
    name: "Brokkoli",
    calories: 34,
    protein: 3,
    fat: 1,
    ch: 4,
  },
  {
    name: "Burgonya",
    calories: 77,
    protein: 2,
    fat: 0,
    ch: 16,
  },
  {
    name: "Burgonya (főtt)",
    calories: 86,
    protein: 2,
    fat: 0,
    ch: 18,
  },
  {
    name: "Karfiol",
    calories: 25,
    protein: 2,
    fat: 0,
    ch: 3,
  },
  {
    name: "Kelkáposzta",
    calories: 27,
    protein: 2,
    fat: 0,
    ch: 3,
  },
  {
    name: "Kukorica konzerv",
    calories: 80,
    protein: 3,
    fat: 1,
    ch: 18,
  },
  {
    name: "Sárgarépa",
    calories: 41,
    protein: 1,
    fat: 0,
    ch: 7,
  },
  {
    name: "Spárga",
    calories: 20,
    protein: 2,
    fat: 0,
    ch: 2,
  },
  {
    name: "Vörösbab konzerv",
    calories: 81,
    protein: 5,
    fat: 1,
    ch: 11,
  },
  {
    name: "Zöldborsó",
    calories: 81,
    protein: 6,
    fat: 1,
    ch: 9,
  },
  {
    name: "Csiperkegomba",
    calories: 22,
    protein: 3,
    fat: 0,
    ch: 2,
  },
  {
    name: "Gépsonka",
    calories: 88,
    protein: 16,
    fat: 3,
    ch: 2,
  },
  {
    name: "100% Whey Protein Professional",
    calories: 114,
    protein: 22,
    fat: 2,
    ch: 3,
  },
];

export default STOCK;