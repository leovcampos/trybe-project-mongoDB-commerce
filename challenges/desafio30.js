db.produtos.updateMany(
    { nome: "Big Mac" },
    { $unset: { curtidas: "" } },
);

db.produtos.find(
    {},
    { _id: false, nome: 1, curtidas: 1 }, 
);