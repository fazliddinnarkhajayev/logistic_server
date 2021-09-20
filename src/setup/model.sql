CREATE DATABASE logistic;

CREATE TABLE loads(
  load_id serial not null primary key,
  load_date timestamptz default current_timestamp, 
  container_number int not null references containers(container_id),
  container_supplier varchar(64) not null,
  departure_number varchar(64) not null,
  item_name text[] not null,
  item_count int[] not null,
  item_packages_count int[] not null,
  item_supplier text[] not null,
  client text[] not null,
  item_netto_kg int[] not null,
  item_brutto_kg int[] not null,
  item_volume varchar[] not null,
  total_volume varchar(32) not null,
  total_netto varchar(32) not null,
  total_brutto varchar(32) not null,
  status int not null references statuses(status_id)
);

CREATE TABLE containers(
  container_id serial not null primary key,
  container_number varchar(128) not null,
  container_type varchar(64) not null,
  container_price varchar(128) not null,
  container_comment text not null,
  supplier varchar(64) not null,
  date_of_creation_container timestamptz default  current_timestamp
);

CREATE TABLE items(
  item_id serial not null primary key,
  item_name varchar(32) not null,
  item_manufacturer varchar(32) not null,
  item_comment text not null
);

CREATE TABLE suppliers(
  supplier_id serial not null primary key,
  supplier_name varchar(32) not null,
  supplier_comment text not null
);

CREATE TABLE clients(
  client_id serial not null primary key,
  client_name varchar(32) not null,
  client_comment text not null
);

CREATE TABLE vehicle_types(
  vehicle_type_id serial not null primary key,
  vehicle_type_name varchar(32) not null,
  vehicle_type_comment text not null
);

CREATE TABLE statuses(
  status_id serial not null primary key,
  status_name varchar(32) not null,
  status_comment text not null
);

CREATE TABLE currencies(
  currency_id serial not null primary key,
  currency_name varchar(32) not null,
  currency_comment text not null
);

 