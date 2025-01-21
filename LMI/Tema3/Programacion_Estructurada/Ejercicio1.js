function verificaHora(hora) {
  if (hora >= 6 && hora <= 12) {
    console.log("Buenos días");
  } else if (hora >= 13 && hora <= 20) {
    console.log("Bueneas tardes");
  } else {
    console.log("Buenas noches");
  }
}

verificaHora(14)