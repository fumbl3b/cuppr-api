CREATE TABLE roaster (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  state TEXT NOT NULL,
  founded_year SMALLINT,
  verified BOOLEAN DEFAULT FALSE,
  active BOOLEAN DEFAULT TRUE
);