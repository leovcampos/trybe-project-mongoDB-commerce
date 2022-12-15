db.produtos.find(
    { vendidos: { $not: { $eq: 50 } }, tags: { $exists: false } },
    { _id: false, nome: 1, vendidos: 1 },
);
