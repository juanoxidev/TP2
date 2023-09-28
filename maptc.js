// modo asincrónico con promises (sintaxis then catch).

const fs = require("fs").promises; // fs.promises para trabajar con promesas

const leerPackageJSON = () => {
  fs.readFile("package.json", "utf-8")
    .then((contenidoStr) => {
      const contenidoObj = JSON.parse(contenidoStr);

      const size = Buffer.from(contenidoStr).length;

      const info = {
        contenidoStr,
        contenidoObj,
        size,
      };

      const infoStr = JSON.stringify(info, null, "\t");

      return fs.writeFile("info.txt", infoStr, "utf-8");
    })
    .then(() => {
      console.log("info.txt se ha creado exitosamente.");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

leerPackageJSON();
