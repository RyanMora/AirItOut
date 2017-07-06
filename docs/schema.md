# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Places
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
name           | string    | not null
address        | string    | not null
city           | string    | not null
state          | string    | not null
zip            | string    | not null
price          | integer   | not null, inclusive [1, 2, 3, 4]
image_url      | string    | not null
lat            | float     | not null
lng            | float     | not null
category_id    | int       | not null, foreign key (references categories), indexed

## Rating & Reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
place_id | integer   | not null, foreign key (references places), indexed
user_id     | integer   | not null, foreign key (references users), indexed
review_text | text      | not null
rating      | integer   | not null, inclusive [1, 2, 3, 4, 5]
price       | integer   | not null, inclusive [1, 2, 3, 4]
photo_url   | string    |  

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null, inclusive [list of categories]
