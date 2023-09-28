//  modo sincrónico.
const fs = require("fs");
const leerPackageJSON = () => {
  try {
    // lee el archivo package.json utf-8
    const contenidoStr = fs.readFileSync("package.json", "utf-8");

    //  JSON a objeto
    const contenidoObj = JSON.parse(contenidoStr);

    // calcular el tamaño en bytes del archivo
    const size = Buffer.from(contenidoStr).length;

    // crear el objeto info
    const info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);
    guardarInfoEnArchivo(info);
  } catch (error) {
    console.error("Error al leer el archivo:", error);
  }

  function guardarInfoEnArchivo(info) {
    try {
      // info a JSON
      const infoStr = JSON.stringify(info, null, "\t");

      // guarda en el archivo info.txt utf-8
      fs.writeFileSync("info.txt", infoStr, "utf-8");

      console.log("info.txt se ha creado exitosamente.");
    } catch (error) {
      console.error("Error al guardar info en el archivo:", error);
    }
  }
};

leerPackageJSON();
