const mysql = require('mysql');
const express = require('express');
const app = express();

app.use(express.json());

// app.get cliente
app.get('/api/cliente/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "select * from tabla_cliente";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

// api.post cliente
app.post('/api/cliente/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "insert into tabla_cliente" +
        "(num_identidad, nombre, apellido, direccion, telefono)" +
        "values(?,?,?,?,?)";

    let parametros = [req.body.num_identidad, req.body.nombre, req.body.apellido, req.body.direccion, req.body.telefono];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

// api.put cliente
app.put('/api/cliente/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "update tabla_cliente set num_identidad = ?, nombre = ?, apellido = ?, direccion = ?, telefono = ? where id_cliente = ?";
    let parametros = [req.body.num_identidad, req.body.nombre, req.body.apellido, req.body.direccion, req.body.telefono, req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

// api.delete cliente
app.delete('/api/cliente/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "delete from tabla_cliente where id_cliente = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// api.get procurador
app.get('/api/procuradores/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "select * from tabla_procurador";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

// api.post procurador
app.post('/api/procuradores/', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "insert into tabla_procurador" +
        "(nombre, apellido,  telefono)" +
        "values(?,?,?)";

    let parametros = [req.body.nombre, req.body.apellido, req.body.telefono];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// api.put procurador
app.put('/api/procuradores/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "update tabla_procurador set nombre = ?, apellido = ?, telefono = ? where id_procurador = ?";
    let parametros = [req.body.nombre, req.body.apellido, req.body.telefono, req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

// api.delete procurador
app.delete('/api/procuradores/:id', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "delete from tabla_procurador where id_procurador = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// api.get estado
app.get('/api/estado/', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "select * from tabla_estado";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// api.post estado
app.post('/api/estado/', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "insert into tabla_estado" +
        "(estado)" + "values(?)";

    let parametros = [req.body.estado];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// api.put estado
app.put('/api/estado/:id', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "update tabla_estado set estado = ? where id_estado = ?";
    let parametros = [req.body.estado, req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// api.delete estado
app.delete('/api/estado/:id', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "ejercicio3_desarrolloweb1"
    });

    let sql = "delete from tabla_estado where id_estado = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});



app.listen(3000);