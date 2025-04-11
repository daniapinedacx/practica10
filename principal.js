
function boton(texto, tipoFuente, alineacion, colortex, link, tam) {
  let fuente;
  switch (tipoFuente) {
    case 1:
      fuente = "Tektur";
      break;
    case 2:
      fuente = "Eczar";
      break;
    case 3:
      fuente = "Maven Pro";
      break;
    default:
      fuente = "Arial";
  }

  let align;
  switch (alineacion) {
    case "izq":
      align = "left";
      break;
    case "cen":
      align = "center";
      break;
    case "der":
      align = "right";
      break;
    default:
      align = "left";
  }

  document.write(
   "<center><a href='" + link + "' class='boton' target='abajo' style='font-family:" + fuente + "; color:" + colortex + ";'>" +
  texto + "</a><br></center>"
  );
}

boton("Colores", 1, "cen", "white", "https://htmlcolorcodes.com");
boton("Descargar Imagen", 1, "cen", "white", "https://www.stockio.com");
boton("Fonts", 1, "cen", "white", "https://www.fontshare.com/fonts/satoshi");
