db.produtos.find(
    { nome: { $nim: ["Big Mac", "McChicken"] } },
    { nome: 1, curtidas: 1, vendidos: 1, _id: false },
);