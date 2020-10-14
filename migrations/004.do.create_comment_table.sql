CREATE TABLE comment (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  author_id INTEGER REFERENCES user_data(id) ON DELETE CASCADE,
  review_id INTEGER REFERENCES coffee_review(id) ON DELETE CASCADE,
  posted_on TIMESTAMPTZ DEFAULT now() NOT NULL,
  body TEXT NOT NULL
);