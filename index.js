const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  //   console.log(req);
  res.send("Hola mundo express este es mi primer servidor express...");
});

app.get("/saludo", (req, res) => {
  //   console.log(req);
  res.json({
    mensaje: "Hola mundo en formato JSON",
    autor: "Victor Pérez",
    Fecha: new Date().toDateString(),
  });
});

const usuarios = [
  { id: 1, nombre: "Juan", edad: 28 },
  { id: 2, nombre: "María", edad: 32 },

]



app.post("/usuarios", (req, res) => {
  console.log(req.body);
  const cuerpo = req.body;
  const usuario = {
    id: usuarios.length + 1,
    nombre: cuerpo.nombre,
    edad: cuerpo.edad,
  };
  
  usuarios.push(usuario);
  res.json({
    mensaje: "Usuario agregado",
    nuevo_usuario: usuario,
    usuarios_actualizados: usuarios,
  });
});

app.get("/listar-usuarios", (req, res) => {
  res.json({
    mensaje: "Lista de usuarios",
    usuarios: usuarios,
  });
});

app.put("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const cuerpo = req.body;
  const usuarioIndex = usuarios.findIndex((u) => u.id === id);
  if (usuarioIndex === -1) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
    usuarios[usuarioIndex].nombre = cuerpo.nombre || usuarios[usuarioIndex].nombre;
    usuarios[usuarioIndex].edad = cuerpo.edad || usuarios[usuarioIndex].edad;
    res.json({
      mensaje: "Usuario actualizado",
      usuario_actualizado: usuarios[usuarioIndex],
      usuarios_actualizados: usuarios,
    });
   
});

// ! Eliminar un usuario
app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuarioIndex = usuarios.findIndex((u) => u.id === id);
  if (usuarioIndex === -1) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
  usuarios.splice(usuarioIndex, 1); /* Elimina el usuario del array no funcional en base de datos
  tendriamos que llamar alguna consulta sql para realizar dicha funcion*/
  res.json({
    mensaje: "Usuario eliminado",
    usuario_eliminado: usuarios[usuarioIndex],
    usuarios_actualizados: usuarios,
  });
});

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});
