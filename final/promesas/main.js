"use strict"
document.querySelector("#get").addEventListener("click", GET);
document.querySelector("#btn-enviar").addEventListener("click", PUT);
document.querySelector("#btn-enviarNuevo").addEventListener("click", POST);


async function GET() {
    try {
        let response = await fetch ('https://62b843daf4cb8d63df5b0d11.mockapi.io/api/animals', {
            method: "GET"
        });
        let data = await response.json();
        if(response.ok) {
            console.log(data);
        }
    }
    catch(error) {
        console.log("error");
    }
}

async function PUT() { //valido lo q me mando el user por los inputs
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;
    let id = document.querySelector("#numId").value;
    //guardo en un array lo que me mando el user
    let animals = {
        "nombre": name,
        "numero": number,
        "id": id
    }
    try { //guardo en response una url de una api
        let response = await fetch('https://62b843daf4cb8d63df5b0d11.mockapi.io/api/animals/5', {
            method: "PUT",  //metodo que voy a usar
                    "headers": {
                'content-type': 'aplication/json'
            },
            "body":JSON.stringify(animals)
        });
        let data = await response.json();
    } catch(error) {
        console.log("error");
    }
}

async function POST() {
    let name = document.querySelector("#name").value;
    let number = document.querySelector("#number").value;
    let id = document.querySelector("#numId").value;

    let animals = {
        "nombre": name,
        "numero": number,
        "id": id
    }
        try {
            let response = await fetch ('https://62b843daf4cb8d63df5b0d11.mockapi.io/api/animals/5', {
                method: 'POST',
                headers: {
                    'content-type': 'aplication/json'
                },
                "body": json.stringify(animals)
        });
        let data = await response.json();
    } catch(error) {
        console.log("error");
    }
}

async function DELETE() {
    try {
        let response = await fetch ('URL/id', {
            method: 'DELETE'
        });
        let data = await response.json();
        document.querySelector(/*ID*/).remove();
    } catch(error) {
        console.log("error");
    }
}