document.getElementById("boton-yellow").onclick = function () {
  document.getElementById("color-fondo").style.backgroundColor = "#ffc107";
  document.getElementById("acent").style.backgroundColor = "#ffc107";
  document.getElementById("color-fondo").style.color = "#000";
};

document.getElementById("boton-blue").onclick = function () {
  document.getElementById("color-fondo").style.backgroundColor = "#348AA7";
  document.getElementById("acent").style.backgroundColor = "#348AA7";
  document.getElementById("color-fondo").style.color = "#000";
};

document.getElementById("boton-red").onclick = function () {
  document.getElementById("color-fondo").style.backgroundColor = "#D62246";
  document.getElementById("acent").style.backgroundColor = "#D62246";
  document.getElementById("color-fondo").style.color = "#000";
};

document.getElementById("boton-green").onclick = function () {
  document.getElementById("color-fondo").style.backgroundColor = "#17A398";
  document.getElementById("acent").style.backgroundColor = "#17A398";
  document.getElementById("color-fondo").style.color = "#000";
};

document.getElementById("boton-black").onclick = function () {
  document.getElementById("color-fondo").style.backgroundColor = "#000";
  document.getElementById("acent").style.backgroundColor = "#000";
  document.getElementById("color-fondo").style.color = "#fff";
};

document.getElementById("boton-grey").addEventListener("click", function () {
  let nombre = document.getElementById("nombre").value;
  document.getElementById("userName").innerHTML = nombre;
});

document.getElementById("boton-grey").addEventListener("click", function () {
  let apellido = document.getElementById("apellido").value;
  document.getElementById("userLastName").innerHTML = apellido;
});
