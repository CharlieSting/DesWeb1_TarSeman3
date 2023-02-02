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

    let sql = "select * from tabla_procuradores";

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

    let sql = "insert into tabla_procuradores" +
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



app.listen(3000);