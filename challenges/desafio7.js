db.produtos.find(
    { vendidos: { $not: 50 }, tags: { $exists: false } },
    { _id: false, nome: 1, curtidas: 1 },
);
