ALTER TABLE coffee_review 
  ADD COLUMN
    author_id INTEGER REFERENCES user_data(id) 
    ON DELETE SET NULL;