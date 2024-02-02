CREATE DATABASE IF NOT EXISTS funcionarios;
USE funcionarios;

CREATE TABLE IF NOT EXISTS info(
    Matricula INT(6) AUTO_INCREMENT NOT NULL,
    Nome CHAR(20) NOT NULL,
    Sobrenome CHAR(20) NOT NULL,
    Cargo CHAR(40) NOT NULL,
    Salario INT(8) NOT NULL,
    PRIMARY KEY(Matricula)

);


INSERT INTO info (Nome, Sobrenome, Cargo, Salario) VALUES ('Alberto', 'Costa', 'Analista de Sistemas', 13456);
INSERT INTO info (Nome, Sobrenome, Cargo, Salario) VALUES ('Ana', 'Mendes', 'Desenvolvedora Web', 12000);
INSERT INTO info (Nome, Sobrenome, Cargo, Salario) VALUES ('Julia', 'Pereira', 'Analista de Sistemas', 13456);
