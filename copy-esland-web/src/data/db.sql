-- CREATE TABLES --
CREATE TABLE Categories {
  category_id TEXT PRIMARY KEY,
  category_name TEXT NOT NULL
}

CREATE TABLE Options {
  option_id TEXT PRIMARY KEY,
  option_name TEXT NOT NULL,
  category_id TEXT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES Categories(category_id)
}

CREATE TABLE Votes {
  vote_id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  category_id TEXT,
  option_id TEXT
  FOREIGN KEY (category_id) REFERENCES Categories(category_id),
  FOREIGN KEY (option_id) REFERENCES Options(option_id)
}

-- Insertar datos en la tabla Categories
INSERT INTO Categories (category_id, category_name) 
VALUES 
('1', 'CLIP DEL AÑO'),
('2', 'ENFADO DEL AÑO'),
('3', 'STREAMER DEL AÑO');

-- Insertar datos en la tabla Options
INSERT INTO Options (option_id, option_name, category_id) 
VALUES 
('OPT001', 'Pizza', 'CAT001'),
('OPT002', 'Tacos', 'CAT001'),
('OPT003', 'Sushi', 'CAT001'),
('OPT004', 'Avengers', 'CAT002'),
('OPT005', 'El Señor de los Anillos', 'CAT002'),
('OPT006', 'Rock', 'CAT003'),
('OPT007', 'Pop', 'CAT003'),
('OPT008', 'Clásica', 'CAT003');

-- Insertar datos en la tabla Votes
INSERT INTO Votes (username, category_id, option_id) 
VALUES 
('Juan', 'CAT001', 'OPT001'),
('Ana', 'CAT001', 'OPT002'),
('Pedro', 'CAT002', 'OPT004'),
('Luisa', 'CAT002', 'OPT005'),
('Carlos', 'CAT003', 'OPT006'),
('María', 'CAT003', 'OPT007'),
('Sofía', 'CAT001', 'OPT001'),
('Julio', 'CAT002', 'OPT004');
