
--@block

SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';


--@block
select * from users


--@block
select * from todos


--@block
select * from todo_lists


--@block
drop TABLE users


--@block
drop TABLE todos


--@block
drop TABLE todo_lists