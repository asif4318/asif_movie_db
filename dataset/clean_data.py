import numpy as np
import pandas as pd

movie_metadata = pd.read_csv('./csv_files/movies_metadata.csv')

movie_metadata.to_csv('./csv_files/movies_metadata_2.csv', index=False)

print(len(movie_metadata.columns))

print(movie_metadata.head())

print(movie_metadata['belongs_to_collection'].dtypes)

belong_collection_series = movie_metadata['belongs_to_collection'].to_dict()