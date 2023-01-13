import React from "react";
import MesaVerde from "./parks/MesaVerde";
import { trees as parkTrees,
  wildlife as parkWildlife } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <div>
      <MesaVerde />
    </div>
  );
}
 export default ColoradoStateParks;