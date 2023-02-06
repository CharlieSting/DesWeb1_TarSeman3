create database ejercicio3_desarrolloweb1;

create table tabla_cliente
(
    id_cliente int auto_increment primary key ,
    num_identidad varchar(200),
    nombre varchar(200),
    apellido varchar(200),
    direccion varchar(200),
    telefono varchar(50)
);

insert into tabla_cliente(num_identidad, nombre, apellido, direccion, telefono)
values
('0801-2001-120100', 'Carlos', 'Martinez', 'Una casa', '99881122'),
('0701-1984-156100', 'Maria', 'Rodriguez', 'Barrio la Leona', '87121901');

create table tabla_estado(
id_estado int auto_increment primary key,
estado varchar(150)
);

create table tabla_asunto(
num_expediente int primary key,
id_estado int,
fecha_inicio date,
fecha_fin date,
id_cliente int,
id_procurador int,
constraint foreign key fk_id_procurador(id_procurador) references tabla_procurador(id_procurador),
constraint foreign key fk_id_estado(id_estado) references tabla_estado(id_estado),
constraint foreign key fk_id_cliente(id_cliente)references tabla_cliente(id_cliente)
 
);

insert into tabla_asunto(num_expediente, id_estado, fecha_inicio, fecha_fin, id_cliente, id_procurador)
values
('007', '1', '2022-01-17', '2022-01-17', '1', '1');

create table tabla_procurador_asunto(
id int auto_increment primary key,
num_expediente int,
id_procurador int,
constraint foreign key fk_num_expediente(num_expediente) references tabla_asunto(num_expediente),
constraint foreign key fk_id_procurador(id_procurador) references tabla_procurador(id_procurador)
);

create table tabla_procurador(
id_procurador int auto_increment primary key,
nombre varchar(150),
apellido varchar(150),
telefono varchar(50)
);

insert into tabla_procurador(nombre, apellido, telefono)
values
( 'Vladimir', 'Putin', '00009999111'),
( 'Checo', 'Perez', '88182192819');