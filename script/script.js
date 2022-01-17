function load() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");

  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();

  msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`;

  if (hora >= 0 && hora < 12) {
    //   BOM DIA
    img.src = "./images/morning.png";
    document.body.style.background = "#e6e3db";
  } else if (hora >= 12 && hora <= 18) {
    //   BOA TARDE
    img.src = "./images/tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    //   BOA NOITE
    img.src = "./images/night.png";
    document.body.style.background = "#323232";
  }
}
