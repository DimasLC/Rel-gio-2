function relogio(){
    const elementoRelogio = document.querySelector('.relogio');
    const horaAtual = new Date()
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = horas.toString().padStart(2, '0');
    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundos.toString().padStart(2, '0')

    var img = document.getElementById("img1")

    elementoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`;
    
    const frase = document.querySelector('.frase')

    dia = new Array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado')

    mes = new Array ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')

    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]},${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`

    if(formatoHoras >= 5 && formatoHoras <= 12){
        document.body.style.backgroundImage = "url(https://cutewallpaper.org/25/animated-forest-wallpaper-gif/tagcategory-451cb-animated-c0b52-wallpaper-bb63f-shape-ffffb-your-bb602-computer-25c44-beautifully.gif)"

        img.src= "https://media.tenor.com/0SkyG9KeSGEAAAAC/minecraft-aesthetic.gif"
    }

    else if (formatoHoras >= 12 && formatoHoras < 18){
        document.body.style.backgroundImage = "url(https://cdn.wallpapersafari.com/69/54/rdXm9l.gif)"

        img.src= "https://pa1.narvii.com/7655/85c849b13360b82ed4fc2512ce843afa44344de2r1-720-450_00.gif"
    }

    else {
        document.body.style.backgroundImage ="url(https://cutewallpaper.org/21/background-gif-1920x1080/Pin-on-cinemagraphs.gif)"

        img.src= "https://i.pinimg.com/originals/b4/54/c4/b454c431705783458cbae373d3ee0423.gif"
    }

    if(formatoHoras >= 5 && formatoHoras <= 12){
        document.body.style.image = "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fyour-name-wallpaper-gif-25363162&psig=AOvVaw37FQ_fyJvIhJRvK4VA0hka&ust=1680877550373000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIih4P26lf4CFQAAAAAdAAAAABAz)"
    }

    else if (formatoHoras >= 12 && formatoHoras < 18){
        document.body.style.image = "url(https://cdn.wallpapersafari.com/69/54/rdXm9l.gif)"
    }

    else {
        document.body.style.image ="url(https://cutewallpaper.org/21/background-gif-1920x1080/Pin-on-cinemagraphs.gif)"
    }

}

setInterval(relogio, 1000)