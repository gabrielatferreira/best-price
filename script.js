import Countdown from "./countdown.js";

const data = dataEncerramentoPromocao();
const tempoParaOWWB = new Countdown(data + " 2021 00:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}

function dataEncerramentoPromocao() {
  var date = new Date();
  var meses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return (date.getDate()+2)  + " " + meses[date.getMonth()]
}

mostrarTempo();
setInterval(mostrarTempo, 1000);