# Intro to Databases

### Lecture Deliverables

Problem: Currently, we have to recreate items everytime we start the application

Solution: Persist data 

We will be adding a database and the ability to perform CRUD actions.

### Lecture Take Aways

- The benefit of databases in applications
- Relationship between a database and an API
- Domain modeling
- Mapping columns and rows to classes and instances
- Basic SQL queries
- Primary Keys
- Foreign Keys

#### What is SQL?

- Structured Query Language
- Language used to manage databases
- It is a whole science in and of itself. We learn the very basics to understand Active Record better, we can also use basic knowledge to configure and customize database communications outside of conventions

Keywords:

- SELECT (retrieve)

```
SELECT (column name) FROM table_name
```

- INSERT (persist)

```
INSERT INTO table (attribute, attribute, attribute) VALUES (value, value, value)

```

- CREATE TABLE

```
CREATE TABLE tablename(
id INTEGER PRIMARY KEY,
name TEXT,
age INTEGER
)
```

- UPDATE

```
UPDATE table
SET column = ?, column = ?
WHERE id = ?;
```