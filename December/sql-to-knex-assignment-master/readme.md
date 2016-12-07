## SQL To Knex

For this assignment, you'll combine your knowledge of SQL and Knex. To get started, fork and clone this repository.

### Assignment

Transform the following SQL commands into Knex expressions. You can write your Knex expressions underneath each SQL command using [highlighted code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/). For example:

```sql
SELECT * FROM students;
```

```javascript
knex('students');
```

To check your answers, use the [Knex Query Lab](http://michaelavila.com/knex-querylab/).

```sql
SELECT * FROM students WHERE id = 1;
```

```js
knex('students')
  .where('id', 1);

```
---

```sql
SELECT * FROM students WHERE gpa = 3 LIMIT 1;
```
```js
knex('students')
  .where('gpa', 3)
  .limit(1);
```
---

```sql
SELECT COUNT(*) students;
```
```js
knex('students')
 .count('*');
```
---

```sql
SELECT MAX('gpa') FROM students;
```
```js
knex('students')
  .max('gpa');
```
---

```sql
SELECT * FROM students WHERE name IS NOT NULL;
```
```js
knex('students')
  .whereNotNull('name');
  ```
---

```sql
SELECT * FROM students WHERE id IN (1, 2, 3) OR gpa IN (3, 4);
```
```js
knex('students')
  .whereIn('id', [1, 2, 3])
  .orWhereIn('id', [3, 4]);
```
---

```sql
SELECT * FROM students LIMIT 10 OFFSET 30;
```
```js
knex('students')
  .limit(10)
  .offset(10);
```
---

```sql
INSERT INTO students (name, fav_color) VALUES ('Prince', 'purple');
```
```js
knex('students')  
  .insert({'name': 'Prince'}, 'fav_color': 'purple'});
```

---

```sql
INSERT INTO students (name, fav_color) VALUES ('Liz', 'blue') RETURNING *;
```
```js
knex('students')
  .insert({'name':'Liz', 'fav_color':'blue'})
  .returning('*');
```
---

```sql
UPDATE students SET name = 'Cho' WHERE id = 5;
```
```js
knex('students')
  .update({'name': 'Cho'})
  .where('id','5');
```
---

```sql
DELETE FROM students WHERE gpa = 0;
```
```js
knex('students')
  .where('gpa', '0')
  .delete();
```
---

```sql
UPDATE students SET gpa = gpa + 1 WHERE id = 4;
```
```js
knex('students')
  .where('id', '4')
  .increment('gpa', 1);
```
---

```sql
SELECT * FROM students INNER JOIN homeworks ON homeworks.student_id = students.id;
```
```js
knex('students')
  .innerJoin('homeworks', 'homeworks.student_id = students.id');

---

```sql
SELECT DISTINCT students.name, homework.title, grades.score
FROM students
INNER JOIN homeworks ON homeworks.student_id = students.id
INNER JOIN grades ON grades.id = homeworks.grade_id
WHERE grades.score > 3;
```

```js
knex('students')
  .distinct('students.name', 'homework.title', 'grades.score')
  .select()
  .join('homeworks', 'homeworks.student_id','students.id')
  .join('grades','grades.id','homeworks.grade_id')
  .where('grades.score', '>', '3')
```

### Bonus

To answer the following questions, see the [Knex.js documentation](http://knexjs.org/).

##### How would you use a method like `pluck()`?
```
knex.table('users').pluck('id').then(function(ids) { console.log(ids); });

```


##### How would you use a method like `raw()`?
```
raw — knex.schema.raw(statement)
Run an arbitrary sql query in the schema builder chain.

knex.schema.raw("SET sql_mode='TRADITIONAL'")
.table('users', function (table) {
  table.dropColumn('name');
  table.string('first_name');
  table.string('last_name');
})
Outputs:
SET sql_mode='TRADITIONAL';
alter table `users` add `first_name` varchar(255), add `last_name` varchar(255);
alter table `users` drop `name`
```
