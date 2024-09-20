-- Setup links table

CREATE TABLE links (movie_id INTEGER PRIMARY KEY,
                                             imdb_id INTEGER, tmdb_id INTEGER);

-- Import links table data from links.csv
 -- Setup ratings table

CREATE TABLE ratings (user_id INTEGER, movie_id INTEGER, rating REAL, timestamp_numeric BIGINT, timestamp TIMESTAMP);

-- After data import: convert linux epoch time (seconds) to timestamp

UPDATE ratings
SET timestamp=to_timestamp(timestamp_numeric);


ALTER TABLE ratings
DROP COLUMN timestamp_numeric;

-- Setup movies_metadata table

CREATE TABLE movies_metadata(adult BOOLEAN, belongs_to_collection TEXT, budget INTEGER, genres TEXT, homepage TEXT, movie_id INTEGER, imdb_id VARCHAR(15),

                                                                                                                                              original_language VARCHAR(20),
                                                                                                                                                                original_title TEXT, overview TEXT, popularity FLOAT DEFAULT 0.0,
                                                                                                                                                                                                                             poster_path text, production_companies TEXT, production_countries TEXT, release_date DATE, revenue BIGINT, runtime REAL, spoken_languages TEXT, status TEXT, tagline TEXT, title TEXT, video BOOLEAN, vote_average REAL, vote_count REAL);

select * from api.movies_metadata limit 1;

-- DO $$
-- DECLARE
-- 	tempval TEXT;
-- 	new_json JSONB;
-- BEGIN
-- 	select belongs_to_collection into tempval from api.movies_metadata limit 1;
-- 	new_json := to_jsonb(tempval);
	
-- 	RAISE NOTICE '%', tempval;
-- 	RAISE NOTICE '%', new_json;
-- END $$;                                                                                                                                                                                                                           