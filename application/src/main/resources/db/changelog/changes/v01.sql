create table client (
    id bigserial not null,
    name varchar,
    birth_time date,
    birth_place varchar,
    mother_birth_name varchar,
    social_security_number bigserial,
    tax_identification_number bigserial,
    email varchar,
    address varchar,
    phone_number bigserial
);