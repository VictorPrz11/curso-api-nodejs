Procedimiento para ejecutar correctamente el proyecto del taller (Node.js + Express)
Para poder ejecutar el proyecto realizado en el taller, es necesario cumplir con los siguientes pasos:
1. Instalar las herramientas necesarias
Asegúrate de tener instalados en tu equipo:
Node.js (incluye npm)
Express (se instalará dentro del proyecto)

    node -v
    npm -v

2. Crear el proyecto
Dentro de una carpeta vacía, inicializa el proyecto ejecutando:
    
    npm init -y 
Esto genera el archivo package.json.

3. Instalar Express
En la misma carpeta del proyecto, instala Express:
    
    npm install express

4. Ejecutar el proyecto
Una vez creado el archivo principal (por ejemplo app.js o server.js), 
ejecuta el proyecto con:

    node app.js | node server.js | npm run dev
las primeras dos opciones dependen completamente del nombre de nuestro proyecto y la tercera opcion unicamente se ejecuta si se configuro el parametro "dev" en nuestro package.json 

5. Verificar funcionamiento
Abre tu navegador y entra a:
http://localhost:3000

6. Probar la API con Postman (opcional)
Otra opción para verificar el funcionamiento después de iniciar el servidor es utilizar Postman.
Con esta herramienta puedes enviar solicitudes HTTP (GET, POST, PUT, DELETE, etc.) a tus endpoints y comprobar que la API responde correctamente.
