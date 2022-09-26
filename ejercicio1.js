player=0
pc=0

let cantidad = function () {
    return +prompt(`Digite cuantas veces desea jugar`)
    
}
const veces = cantidad()


let computador = function () {
    return Math.floor(Math.random() * 3 + 1);
}
const maquina = computador()


let contaju=function(){
    let player=player+1
    return(player)
}

let contapc=function(){
    let pc=pc+1
    return(pc)
}


for(i=0; i<veces; i++){
    let persona = function () {
        let opcion = prompt(`Piedra, papel o tijera`)
        switch(opcion){
            case "piedra":
                jugador=1
                break
            case "papel":
                jugador=2
                break
            case "tijera":
                jugador=3
                break
        }
        return (jugador)
    }
    let opc = persona()
        if (maquina == opc) {
        alert(`Empatados, los dos escogieron lo mismo`)
    } else if (maquina == 1 && opc == 2) {
        alert(`El jugador a ganado, maquina saco piedra y jugador papel`)

        player=player+1

    } else if (maquina == 2 && opc == 3) {
        alert(`El jugador a ganado, maquina saco papel y jugador tijeras`)

        player=player+1

    } else if (maquina == 3 && opc == 1) {
        alert(`El jugador a ganado, maquina saco tijera y jugador piedra`)

        player=player+1

    } else if (opc == 1 && maquina == 2) {
        alert(`La maquina a ganado, jugador saco piedra y maquina papel`)

        pc=pc+1

    } else if (opc == 2 && maquina == 3) {
        alert(`La maquina a ganado, el jugador saco papel y maquina tijera`)

        pc=pc+1

    } else if (opc == 3 && maquina == 1) {
        alert(`La maquina a ganado, el jugador saco tijera y maquina piedra`)

        pc=pc+1
    }
    
}

alert(`El jugador gano ${player} y la maquina gano ${pc}`)

