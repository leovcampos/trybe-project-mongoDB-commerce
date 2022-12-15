db.produtos.find(
    { $or: [{ vendidos: 85 }, { curtidas: 36 }] },
    { _id: false, nome: 1, curtidas: 1, vendidos: 1 },
);