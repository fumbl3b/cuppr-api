BEGIN;

TRUNCATE user_data, coffee_review, roaster, comment RESTART IDENTITY CASCADE;

INSERT INTO user_data
  (username, nickname, email, password_hash)
  VALUES
  ('FumbleBee', 'Harry', 'harry@gmail.com', 'passwordHarry'),
  ('Testy_McTesterson', 'Testy', 't3sty@gail.com', 'passwordTesty');

INSERT INTO roaster
  (name, location, state, founded_year)
  VALUES
  ('La Colombe Coffee Roasters', 'Philadelphia', 'Pennsylvania', '1994');

INSERT INTO coffee_review
  (author_id, coffee_name, roaster_id, coffee_origin, process_method, body)
  VALUES
  (2, 'Ethiopia: YirgZ,', 1, 'Ethiopia', 'Washed/Wet', 'Scenester neutra truffaut, pug selfies cloud bread chambray DIY poke sed XOXO. Before they sold out fanny pack williamsburg, aute pariatur proident chicharrones retro helvetica bicycle rights ut exercitation hammock subway tile pug. Distillery tousled yuccie blue bottle aliquip. Kogi laboris man bun woke. Culpa quinoa raw denim palo santo bespoke iPhone authentic. Mustache mixtape keffiyeh pitchfork pug. Knausgaard id nulla, tumeric four loko adaptogen commodo bitters blue bottle ullamco.'),
  (1, 'Kenya: Karagoto,', 1, 'Kenya', 'Washed/Wet', 'Scenester neutra truffaut, pug selfies cloud bread chambray DIY poke sed XOXO. Before they sold out fanny pack williamsburg, aute pariatur proident chicharrones retro helvetica bicycle rights ut exercitation hammock subway tile pug. Distillery tousled yuccie blue bottle aliquip. Kogi laboris man bun woke. Culpa quinoa raw denim palo santo bespoke iPhone authentic. Mustache mixtape keffiyeh pitchfork pug. Knausgaard id nulla, tumeric four loko adaptogen commodo bitters blue bottle ullamco.');

INSERT INTO comment
  (author_id, review_id, body)
  VALUES
  (1, 1, 'I agree with your sentiment regarding the Ethiopian Coffee'),
  (2, 1, 'Thanks FumbleBee'),
  (2, 2, 'I disagree with this review');

COMMIT;