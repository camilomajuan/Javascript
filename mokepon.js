const sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('Seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensaje = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaque = document.getElementById('contenedorAtaques')
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')


let mokepones = []
let ataqueJugador =[]
let ataqueEnemigo = []
let opcionDeMokepones
let inputsquirtle
let inputdigglet
let inputcharmander
let inputwafire
let inputswampert
let inputvolcano
let mascotaJugador
let mascotaJugadorObjeto
let mascotaEnemigo
let ataqueMokeponEnemigo = []
let botonFuego
let botonAgua
let botonTierra
let botones = []
let vidasJugador = 0
let vidasEnemigo = 0
let victoriasJugador = 0
let victoriasEnemigo = 0
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataqueRival
let ataquesGuardados = []
let ataqueAleatorio 
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mapa-paleta.jpg'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 600

if (anchoDelMapa >anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


class Mokepon{
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre= nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho=30
        this.alto=30
        this.x= aleatorio(0, mapa.width - this.ancho)
        this.y= aleatorio(0, mapa.height - this.alto)
        this.mapaFoto= new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}



let squirtle = new Mokepon('Squirtle', './Assets/squirlkip.png', 5,'./Assets/cabezasquirtle.png')
let digglet = new Mokepon('Digglet','./Assets/geolett.png', 5, './Assets/cabezadigglet.png' )
let charmander = new Mokepon('Charmander', './Assets/bamander.png', 5, './Assets/cabezacharmander.png')
let wafire = new Mokepon('Wafire', './Assets/wafire.png', 5, './Assets/cabezawifire.png')
let swampert = new Mokepon('Swampert', './Assets/swampert.png', 5, './Assets/cabezaswampert.png')
let volcano = new Mokepon('Volcano', './Assets/volcano.png', 5, './Assets/cabezavolcano.png')
let squirtleEnemigo = new Mokepon('Squirtle', './Assets/squirlkip.png', 5,'./Assets/cabezasquirtle.png')
let diggletEnemigo = new Mokepon('Digglet','./Assets/geolett.png', 5, './Assets/cabezadigglet.png')
let charmanderEnemigo = new Mokepon('Charmander', './Assets/bamander.png', 5, './Assets/cabezacharmander.png')
let wafireEnemigo = new Mokepon('Wafire', './Assets/wafire.png', 5, './Assets/cabezawifire.png')
let swampertEnemigo = new Mokepon('Swampert', './Assets/swampert.png', 5, './Assets/cabezaswampert.png')
let volcanoEnemigo = new Mokepon('Volcano', './Assets/volcano.png', 5, './Assets/cabezavolcano.png')

squirtle.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌻', id: 'boton-tierra'},
)

squirtleEnemigo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌻', id: 'boton-tierra'},
)

digglet.ataques.push(
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

diggletEnemigo.ataques.push(
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

charmander.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌻', id: 'boton-tierra'},
)

charmanderEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌻', id: 'boton-tierra'},
)

wafire.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌻', id: 'boton-tierra'},
)

wafireEnemigo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌻', id: 'boton-tierra'},
)

swampert.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
)

swampertEnemigo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
)

volcano.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
)

volcanoEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '🌻', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
)

mokepones.push(squirtle, digglet, charmander, wafire, swampert, volcano)

function iniciarJuego(){
    

    sectionSeleccionarAtaque. style. display ='none'
    sectionVerMapa.style.display ='none'

    mokepones.forEach((mokepon) =>{
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepon.nombre}" />
        <label class="tarjeta-de-mokepon"  for="${mokepon.nombre}">
            <p>${mokepon.nombre}</p>
            <img src="${mokepon.foto}" alt="${mokepon.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

    inputsquirtle = document.getElementById('Squirtle')
    inputdigglet = document.getElementById('Digglet')
    inputcharmander = document.getElementById('Charmander')
    inputwafire = document.getElementById('Wafire')
    inputswampert = document.getElementById('Swampert')
    inputvolcano = document.getElementById('Volcano')
     })

    sectionReiniciar. style. display ='none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota. style. display ='none'
    
    if (inputsquirtle.checked){
        spanMascotaJugador. innerHTML = inputsquirtle.id
        mascotaJugador = inputsquirtle.id
    } else if (inputdigglet.checked){
        spanMascotaJugador. innerHTML = inputdigglet.id
        mascotaJugador = inputdigglet.id
    }else if (inputcharmander.checked){
        spanMascotaJugador. innerHTML = inputcharmander.id
        mascotaJugador = inputcharmander.id
    }else if (inputwafire.checked){
        spanMascotaJugador. innerHTML = inputwafire.id
        mascotaJugador = inputwafire.id
    }else if (inputswampert.checked){
        spanMascotaJugador. innerHTML = inputswampert.id
        mascotaJugador = inputswampert.id
    }else if (inputvolcano.checked){
        spanMascotaJugador. innerHTML = inputvolcano.id
        mascotaJugador = inputvolcano.id
    }else{
        alert("Por favor elige una Mascota y da clic en seleccionar")
    }
    
    
    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }        
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id= ${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaque.innerHTML += ataquesMokepon 
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            if (e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
        
    })
    
}

function seleccionarMascotaEnemigo(enemigo){

    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataqueMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

  
function ataqueAleatorioEnemigo(){

    let ataqueAleatorio = aleatorio(0,ataqueMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio ==1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
        
}


function iniciarPelea(){
    if (ataqueEnemigo.length === 5){
        combate()
    }
}


function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let index = 0; index < ataqueEnemigo.length; index++) {
        if(ataqueJugador[index]=== ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE")
        }   else if (ataqueEnemigo[index] ==='FUEGO' && ataqueJugador[index] === 'TIERRA' || ataqueEnemigo[index] ==='FUEGO' && ataqueJugador[index] === 'TIERRA'||(ataqueEnemigo[index] ==='AGUA' && ataqueJugador[index] ==='FUEGO' ) ){
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador    
        } else{
            indexAmbosOponentes(index,index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVictorias()
}

function revisarVictorias(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("ESFUERZATE MÁS, has EMPATADO!!! :)")
    }else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("HAS GANADO:)")
    }else{
        crearMensajeFinal("Lo siento bro, perdiste!! :(")   
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    }

function crearMensajeFinal(resultadoFinal){

    sectionMensaje.innerHTML = resultadoFinal

    sectionReiniciar.style.display ='block'
}

function reiniciarJuego(){
    location.reload()
}

//21-Traigo la Funcion aleatorio para usarla con la elección de la PC 
function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1) + 1)
}


function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    squirtleEnemigo.pintarMokepon()
    diggletEnemigo.pintarMokepon()
    charmanderEnemigo.pintarMokepon()
    wafireEnemigo.pintarMokepon()
    volcanoEnemigo.pintarMokepon()
    swampertEnemigo.pintarMokepon()

    if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColision(squirtleEnemigo)
        revisarColision(volcanoEnemigo)
        revisarColision(diggletEnemigo)
        revisarColision(charmanderEnemigo)
        revisarColision(wafireEnemigo)
        revisarColision(swampertEnemigo)
    }
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
    
        default:
            break;
    }

}

function iniciarMapa(){
    
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }        
        
    }
}

function revisarColision(enemigo){

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const izquierdaMascota = mascotaJugadorObjeto.x
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho

    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('Se detecto una colision');
    sectionSeleccionarAtaque. style. display ='flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}
//14- Como Iniciar Juego no Existe, vamos a crearla

window.addEventListener('load', iniciarJuego)