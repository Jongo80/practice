create table client (
    id bigserial,
    name varchar,
    birth_time date,
    birth_place varchar,
    mother_birth_name varchar,
    social_security_number bigint,
    tax_identification_number bigint,
    email varchar,
    address varchar,
    second_address varchar,
    phone_number bigint,
    second_phone_number bigint
);