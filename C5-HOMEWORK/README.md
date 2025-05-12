# Reportes con JOINs en SQL

Este repositorio contiene una serie de consultas SQL diseñadas para practicar el uso de `JOINs` en bases de datos relacionales. Los ejemplos utilizan una base de datos ficticia con las siguientes tablas:

- `Book` (book_id, title, publisher_id)
- `Author` (author_id, name)
- `Publisher` (publisher_id, name)
- `BookAuthor` (book_id, author_id)

## Contenido del archivo `reportes_joins.sql`

Este archivo contiene consultas que responden a los siguientes reportes:

1. **INNER JOIN** – Libros con su editorial.
SELECT b.title AS libro, p.name AS editorial
FROM Book b
INNER JOIN Publisher p ON b.publisher_id = p.publisher_id;

2. **LEFT JOIN** – Todos los autores y los libros que han escrito (incluyendo los que no han escrito).

SELECT a.name AS autor, b.title AS libro
FROM Author a
LEFT JOIN BookAuthor ba ON a.author_id = ba.author_id
LEFT JOIN Book b ON ba.book_id = b.book_id;

3. **RIGHT JOIN** – Todos los libros y sus autores (incluso los que no tienen 
autor).

SELECT b.title AS libro, a.name AS autor
FROM Author a
RIGHT JOIN BookAuthor ba ON a.author_id = ba.author_id
RIGHT JOIN Book b ON ba.book_id = b.book_id;

4. **INNER JOIN + LEFT JOIN** – Libros con autores y editorial (aunque falte alguno).

SELECT b.title AS libro, a.name AS autor, p.name AS editorial
FROM Book b
LEFT JOIN BookAuthor ba ON b.book_id = ba.book_id
LEFT JOIN Author a ON ba.author_id = a.author_id
LEFT JOIN Publisher p ON b.publisher_id = p.publisher_id;

5. **INNER JOIN + GROUP BY** – Libros con más de un autor.

SELECT b.title AS libro, a.name AS autor
FROM Book b
INNER JOIN BookAuthor ba ON b.book_id = ba.book_id
INNER JOIN Author a ON ba.author_id = a.author_id
WHERE b.book_id IN (
    SELECT book_id
    FROM BookAuthor
    GROUP BY book_id
    HAVING COUNT(author_id) > 1
)
ORDER BY b.title;

6. **JOINs + CTE + GROUP BY** – Editorial con más libros publicados (opcional).

-- Subconsulta para contar libros por editorial
WITH EditorialLibros AS (
    SELECT p.publisher_id, p.name AS editorial, COUNT(b.book_id) AS total_libros
    FROM Publisher p
    INNER JOIN Book b ON p.publisher_id = b.publisher_id
    GROUP BY p.publisher_id, p.name
),
-- Subconsulta para obtener los títulos
LibrosPorEditorial AS (
    SELECT p.publisher_id, b.title
    FROM Publisher p
    INNER JOIN Book b ON p.publisher_id = b.publisher_id
)
SELECT el.editorial, el.total_libros, l.title AS libro
FROM EditorialLibros el
JOIN LibrosPorEditorial l ON el.publisher_id = l.publisher_id
WHERE el.total_libros = (
    SELECT MAX(total_libros) FROM EditorialLibros
);
*Autor: willian suarez
*Curso: Fundamentos de Bases de Datos*
