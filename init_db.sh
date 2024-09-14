#!/bin/bash

# Init links table
psql -U postgres -c "CREATE TABLE links (movie_id SERIAL, imdb_id  INTEGER, tmdb_id INTEGER);"

psql -U postgres -c "copy public.links (movie_id, imdb_id, tmdb_id) FROM '/var/lib/postgresql/csv_files/links.csv' DELIMITER ',' CSV HEADER ;"

## Init ratings table
psql -U postgres -c "CREATE TABLE ratings (user_id SERIAL, movie_id INTEGER, rating REAL, timestamp_numeric BIGINT, timestamp TIMESTAMP);"

psql -U postgres -c "copy public.ratings (user_id, movie_id, rating, timestamp_numeric) FROM '/var/lib/postgresql/csv_files/ratings.csv' DELIMITER ',' CSV HEADER ;"

psql -U postgres -c "UPDATE ratings SET timestamp=to_timestamp(timestamp_numeric);"

psql -U postgres -c "ALTER TABLE ratings DROP COLUMN timestamp_numeric;"

## Init movies_metadata table
psql -U postgres -c "CREATE TABLE movies_metadata (
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

psql -U postgres -c "copy public.movies_metadata (adult, belongs_to_collection, budget, genres, homepage, movie_id, imdb_id, original_language, original_title, overview, popularity, poster_path, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, status, tagline, title, video, vote_average, vote_count) FROM '/var/lib/postgresql/csv_files/movies_metadata.csv' DELIMITER ',' CSV HEADER QUOTE '\"' ESCAPE '\"';"
