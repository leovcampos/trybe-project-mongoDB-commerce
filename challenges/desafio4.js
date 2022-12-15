db.produtos.find(
    { vendidos: { $gt: 50, $lt: 100 } },
    { _id: false, nome: 1, vendidos: 1 },
).sort({ vendidos: 1 });