const selectList = document.getElementById("mylist");

const toOut = document.getElementById("masse");

function showtxt() {
  switch (selectList.value) {
    case "0":
      toOut.innerHTML =
        "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm ";
      break;
    case "0":
      toOut.innerHTML =
        "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm ";
      break;


    case "1":
      toOut.innerHTML = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
      break;
    case "1":
      toOut.innerHTML = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
      break;
    case "1":
      toOut.innerHTML = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
      break;


    case "2":
      toOut.innerHTML = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm";
      break;
    case "2":
      toOut.innerHTML = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm";
      break;

      
    case "3":
      toOut.innerHTML = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm";
      break;
    case "3":
      toOut.innerHTML = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm";
      break;

      default:
        toOut.innerHTML ="<b>Extra große Größe</b>"
  }
}

