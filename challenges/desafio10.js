// use("commerce");
db.produtos.find(
  { 
    "valoresNutricionais.3.percentual": { $gte: 30, $lt: 40 }
  },
  { nome: 1, _id: 0 },
);