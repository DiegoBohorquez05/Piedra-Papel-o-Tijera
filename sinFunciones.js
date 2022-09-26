let piedra=0
let papel=1
let tijera=2

let maquina = 0
let player = 0
let pc = 0

let partidas = (+prompt(`Cuantas partidas desea jugar?`))

for (i = 0; i < partidas; i++) {
let escoja = (prompt(`Escoja: piedra, papel o tijera`))

switch (escoja) {
case "piedra":
jugador = 1
break
case "papel":
jugador = 2
break
case "tijera":
jugador = 3
break
}

maquina = (Math.floor(Math.random() * 3 + 1));

if (maquina == jugador) {
alert(`Empatados, los dos escogieron lo mismo`)
} else if (maquina == 1 && jugador == 2) {
alert(`El jugador a ganado, maquina saco piedra y jugador papel`)

player=player+1

} else if (maquina == 2 && jugador == 3) {
alert(`El jugador a ganado, maquina saco papel y jugador tijeras`)

player=player+1

} else if (maquina == 3 && jugador == 1) {
alert(`El jugador a ganado, maquina saco tijera y jugador piedra`)

player=player+1

} else if (jugador == 1 && maquina == 2) {
alert(`La maquina a ganado, jugador saco piedra y maquina papel`)

pc=pc+1

} else if (jugador == 2 && maquina == 3) {
alert(`La maquina a ganado, el jugador saco papel y maquina tijera`)

pc=pc+1

} else if (jugador == 3 && maquina == 1) {
alert(`La maquina a ganado, el jugador saco tijera y maquina piedra`)

pc=pc+1
}
}

alert(`El jugador gano ${player} y la maquina gano ${pc}`)
