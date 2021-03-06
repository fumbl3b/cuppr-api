CREATE TABLE user_data (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  username TEXT NOT NULL UNIQUE,
  nickname TEXT,
  email TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_on TIMESTAMPTZ DEFAULT now() NOT NULL,
  last_login TIMESTAMPTZ DEFAULT now() NOT NULL,
  active BOOLEAN DEFAULT TRUE,
  admin BOOLEAN DEFAULT FALSE
);