const app = require('./src/app.js');

app.listen(app.get('port'),() => {

    console.log("escuchando en el puerto",  app.get("port"));
});

