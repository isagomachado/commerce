// use("commerce");
db.produtos.find({ nome: "Big Mac" }, { nome: 1, vendidos: 1, _id: 0 }).sort({ vendidos: 1 });
