-- Setup links table
CREATE TABLE links (
    movie_id SERIAL PRIMARY KEY,
    imdb_id  INTEGER,
    tmdb_id INTEGER
);

-- Import links table data from links.csv

-- Setup ratings table 
CREATE TABLE ratings (
 user_id INTEGER,
 movie_id INTEGER,
 rating REAL,
 timestamp_numeric BIGINT,
 timestamp TIMESTAMP
);

-- After data import: convert linux epoch time (seconds) to timestamp
UPDATE ratings SET timestamp=to_timestamp(timestamp_numeric);
ALTER TABLE ratings DROP COLUMN timestamp_numeric;



-- adult,belongs_to_collection,budget,genres,homepage,id,imdb_id,original_language,
-- original_title,overview,popularity,poster_path,production_companies,production_countries,release_date,
-- revenue,runtime,spoken_languages,status,tagline,title,video,vote_average,vote_count

CREATE TABLE movies_metadata(
    adult BOOLEAN,
    belongs_to_collection JSONB,
    budget INTEGER,
    genres JSONB,
    homepage TEXT,
    movie_id INTEGER PRIMARY KEY,
    imdb_id INTEGER,
    original_language VARCHAR(20),
    original_title TEXT,
	overview TEXT,
    popularity INTEGER,
    poster_path text,
    production_companies JSONB,
    production_countries JSONB,
    release_date DATE,
    revenue INTEGER,
    runtime INTEGER,
    spoken_languages JSONB,
    status TEXT,
    tagline TEXT,
    title TEXT,
    video BOOLEAN,
    vote_average REAL,
    vote_count REAL
); 