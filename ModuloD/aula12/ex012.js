let agora = new Date()
let hora = agora.getHours()
let minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${minuto} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}