-- PUNTO 1: GENERAR REPORTES CON SELECT

-- Reporte 1: Todos los libros publicados por 'Penguin Books'
SELECT * 
FROM Book
JOIN Publisher ON Book.publisher_id = Publisher.publisher_id
WHERE Publisher.name = 'Penguin Books';

-- Reporte 2: Todos los libros publicados después del año 1950
SELECT * 
FROM Book
WHERE publication_year > 1950;

-- Reporte 3: Nombres de los autores que han escrito libros de género 'Fantasy'
SELECT DISTINCT Author.name 
FROM Author
WHERE Author.author_id IN (
    SELECT Author_Book.author_id
    FROM Author_Book
    JOIN Book ON Author_Book.book_id = Book.book_id
    WHERE Book.genre = 'Fantasy'
);

-- Reporte 4: Títulos de los libros escritos por autores cuyo nombre contiene 'J.K.'
SELECT DISTINCT Book.title
FROM Book
WHERE Book.book_id IN (
    SELECT Author_Book.book_id
    FROM Author_Book
    JOIN Author ON Author_Book.author_id = Author.author_id
    WHERE Author.name LIKE '%J.K.%'
);

-- (Opcional) Reporte 5: Títulos de los libros escritos por autores británicos
SELECT DISTINCT Book.title
FROM Book
WHERE Book.book_id IN (
    SELECT Author_Book.book_id
    FROM Author_Book
    JOIN Author ON Author_Book.author_id = Author.author_id
    WHERE Author.nationality = 'British'
);


-- PUNTO 2: MODIFICAR INFORMACIÓN CON UPDATE

-- Actualizar el género del libro '1984' a 'Science Fiction'
UPDATE Book
SET genre = 'Science Fiction'
WHERE title = '1984';

-- Cambiar la nacionalidad de 'Mark Twain' a 'Canadian'
UPDATE Author
SET nationality = 'Canadian'
WHERE name = 'Mark Twain';


-- PUNTO 3: ELIMINAR INFORMACIÓN CON DELETE

-- Eliminar el libro 'Pride and Prejudice'
DELETE FROM Book
WHERE title = 'Pride and Prejudice';

-- Eliminar autores que no han escrito ningún libro
DELETE FROM Author
WHERE author_id NOT IN (
    SELECT DISTINCT author_id
    FROM Author_Book
);
