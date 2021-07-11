const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4989.90
prod1["Desconto Legal"] = 0.40

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo",
    preco: 34.90, 
    obj: {
        tamanho: "GG"
    }
}
console.log(prod2)

//Exemplo de Json

[
    {
        "email": "kaue.salvio@ambevtech.com.br",
        "deliveryAddress": {
            "zipCode": "77777777",
            "number": "88",
            "street": "Teste2",
            "neighborhood": "Teste2",
            "city": "Joinville",
            "state": "SC",
            "country": null,
            "publicPlace": "",
            "complement": "Apartamento",
            "addressText": "",
            "createdAt": "2021-07-06T10:43:56.0057474-03:00",
            "updatedAt": "2021-07-06T14:32:01.5471357-03:00"
        }
    },
    {
        "email": "stefan.novasky@ambevtech.com.br",
        "deliveryAddress": {
            "zipCode": "89055-000",
            "number": "294",
            "street": "Rua 123",
            "neighborhood": "Fortaleza",
            "city": "Blumenau",
            "state": "SC",
            "country": null,
            "publicPlace": "",
            "complement": "Casa",
            "addressText": "",
            "createdAt": "2021-06-21T10:42:02.7174704-03:00",
            "updatedAt": "2021-06-22T09:23:50.2016107-03:00"
        }
    }
]
