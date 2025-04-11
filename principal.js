function boton(texto, tipoFuente, alineacion, colortex, link, fondo) {
  let fuente
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
    "<center><a href='" + link + "' class='boton' target='abajo' " +
    "style='font-family:" + fuente + "; color:" + colortex + "; background-color:" + fondo + "; text-align:" + align + ";'>" +
    texto + "</a><br></center>"
  );
}


boton("Colores", 1, "cen", "white", "https://htmlcolorcodes.com", "#002e47");
boton("Descargar Imagen", 1, "cen", "white", "https://www.stockio.com", "#006777");
boton("Fonts", 1, "cen", "white", "https://www.fontshare.com/fonts/satoshi", "#275187");
