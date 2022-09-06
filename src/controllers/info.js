import yargs from "yargs";
const args = yargs(process.argv.slice(2));
import os from "os";

export const sinConsole = (req, res) => {
  res.send({
    ArgumentosDeEntrada: args,
    NombrePlataforma: process.platform,
    VersionNode: process.version,
    MemoriaTotalReservada: process.memoryUsage(),
    PathEjecucion: process.execPath,
    ProcessID: process.pid,
    CarpetaProyecto: process.cwd(),
    NumeroProcesadores: os.cpus().length,
  });
};

export const conConsole = (req, res) => {
  3;
  console.log("profiling");
  res.send({
    ArgumentosDeEntrada: args,
    NombrePlataforma: process.platform,
    VersionNode: process.version,
    MemoriaTotalReservada: process.memoryUsage(),
    PathEjecucion: process.execPath,
    ProcessID: process.pid,
    CarpetaProyecto: process.cwd(),
    NumeroProcesadores: os.cpus().length,
  });
};
