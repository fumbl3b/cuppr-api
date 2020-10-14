ALTER TABLE coffee_review 
  ADD COLUMN
    roaster_id INTEGER REFERENCES roaster(id) 
    ON DELETE SET NULL;