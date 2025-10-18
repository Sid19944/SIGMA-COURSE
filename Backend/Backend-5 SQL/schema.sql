USE delta_app;

CREATE TABLE user (
    id VARCHAR(100) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);

