//Test in: https://platzi.com/clases/2327-javascript-practico/38655-prueba-de-javascript/
// 3
// var usuario = {
//     nombre: "Alexis",
//     apellido: "Lopez",
//     platzi_username:"AlexisLopez",
//     edad: 27,
//     email: "alexis.sbtg@gmail.com",
//     mayo_de_edad: true,
//     ahorros: 10000,
//     deudas: [{
//         descripcion: "Guitarra",
//         saldo: 3000
//     },{
//         descripcion: "Computadora",
//         saldo: 1800
//     }]
// };

// // 4
// console.log(`Nombre Completo: ${usuario.nombre} ${usuario.apellido}`);
// console.log(`Dinero Real: ${usuario.ahorros - (usuario.deudas[0].saldo + usuario.deudas[1].saldo)}`);

//Funciones
//1
// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

//2
// function printName (completeName, nickname){
//     return "Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".";
// };

// console.log(printName(completeName, nickname))
// console.log(printName("Alexis Lopez", "El Alexis"))

//Condicionales
//2

function miSuscripcion(tipoDeSuscripcion = "Basic"){
    if(tipoDeSuscripcion == "Free"){
        console.log("Solo puedes tomar los cursos gratis");
    }else{
        if(tipoDeSuscripcion == "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }
        else{
            if(tipoDeSuscripcion == "Expert"){
                console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            }
            else{
                if(tipoDeSuscripcion == "ExpertPlus"){
                    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
                }
            }
        }
    }
};

function miSuscripcion2(tipoDeSuscripcion = "Basic"){
    console.log((tipoDeSuscripcion == "Free") ? "Solo puedes tomar los cursos gratis" :
                (tipoDeSuscripcion == "Basic") ? "Puedes tomar casi todos los cursos de Platzi durante un mes":
                (tipoDeSuscripcion == "Expert") ? 
    }else{
        if{
            console.log();
        }
        else{
            if{
                console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            }
            else{
                if(tipoDeSuscripcion == "ExpertPlus"){
                    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
                }
            }
        }
    }
};

miSuscripcion("Expert");
