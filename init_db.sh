#!/bin/bash

# Create API Schema:
psql -U postgres -c "create schema api;"

# Init links table
echo -e "INIT LINKS TABLE\n"

psql -U postgres -c "CREATE TABLE api.links (movie_id SERIAL, imdb_id  INTEGER, tmdb_id INTEGER);"

psql -U postgres -c "copy api.links (movie_id, imdb_id, tmdb_id) FROM '/var/lib/postgresql/csv_files/links.csv' DELIMITER ',' CSV HEADER ;"

## Init ratings table
echo -e "INIT RATINGS TABLE\n"

psql -U postgres -c "CREATE TABLE api.ratings (user_id SERIAL, movie_id INTEGER, rating REAL, timestamp_numeric BIGINT, timestamp TIMESTAMP);"

psql -U postgres -c "copy api.ratings (user_id, movie_id, rating, timestamp_numeric) FROM '/var/lib/postgresql/csv_files/ratings.csv' DELIMITER ',' CSV HEADER ;"

psql -U postgres -c "UPDATE api.ratings SET timestamp=to_timestamp(timestamp_numeric);"

psql -U postgres -c "ALTER TABLE api.ratings DROP COLUMN timestamp_numeric;"

## Init movies_metadata table
echo -e "INIT MOVIES_METADATA TABLE\n"

psql -U postgres -c "CREATE TABLE api.movies_metadata (
    adult BOOLEAN,
    belongs_to_collection TEXT,
    budget INTEGER,
    genres TEXT,
    homepage TEXT,
    movie_id INTEGER,
    imdb_id VARCHAR(15),
    original_language VARCHAR(20),
    original_title TEXT,
	overview TEXT,
    popularity FLOAT DEFAULT 0.0,
    poster_path text,
    production_companies TEXT,
    production_countries TEXT,
    release_date DATE, revenue BIGINT,
    runtime REAL,
    spoken_languages TEXT,
    status TEXT,
    tagline TEXT,
    title TEXT,
    video BOOLEAN,
    vote_average REAL,
    vote_count REAL
);"

psql -U postgres -c "copy api.movies_metadata (adult, belongs_to_collection, budget, genres, homepage, movie_id, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count) FROM '/var/lib/postgresql/csv_files/movies_metadata.csv' DELIMITER ',' CSV HEADER QUOTE '\"' ESCAPE '\"';"

# Create Web_Anon Role
echo -e "CREATE WEB ANON ROLE\n"

psql -U postgres -c "create role web_anon nologin;
    grant usage on schema api to web_anon;
    grant select on api.links to web_anon;
    grant select on api.ratings to web_anon;
    grant select on api.movies_metadata to web_anon;
"

# Create authenticator role
echo -e "CREATE AUTHENTICATOR ROLE\n"
psql -U postgres -c "create role authenticator noinherit login password 'mysecretpassword';
    grant web_anon to authenticator;"
