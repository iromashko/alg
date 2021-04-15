CREATE TABLE users (
  id serial PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  username varchar(30) NOT NULL,
  bio varchar(400),
  avatar varchar(200),
  phone varchar(25),
  email varchar(40),
  PASSWORD VARCHAR(50),
  STATUS varchar(15),
  CHECK (COALESCE(phone, email) IS NOT NULL),
  CHECK (coalesce(email, PASSWORD) IS NOT NULL)
);

CREATE TABLE posts (
  id serial PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  url varchar(200) NOT NULL,
  caption varchar(240),
  lat real CHECK (
    lat IS NULL
    OR (
      lat >= - 90
      AND lat <= 90
    )
  ),
  lng real CHECK (
    lng IS NULL
    OR (
      lng >= - 180
      AND lng <= 180
    )
  ),
  user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
);

CREATE TABLE comments (
  id serial PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  contents varchar(240) NOT NULL,
  user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  post_id integer NOT NULL REFERENCES posts (id) ON DELETE CASCADE
);

CREATE TABLE likes (
  id serial PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  post_id integer REFERENCES posts (id) ON DELETE CASCADE,
  comment_id integer REFERENCES comments (id) ON DELETE CASCADE,
  CHECK (
    coalesce((post_id) :: boolean :: integer, 0) + coalesce((comment_id) :: boolean :: integer, 0) = 1
  ),
  UNIQUE (user_id, post_id, comment_id)
);

CREATE TABLE photo_tags (
  id serial PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  post_id integer NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
  x integer NOT NULL,
  y integer NOT NULL,
  UNIQUE (post_id, user_id),
);

CREATE TABLE caption_tags (
  id serial PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  post_id integer NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
  UNIQUE (user_id, post_id)
);

CREATE TABLE hashtags (
  id serial PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  title varchar(20) NOT NULL UNIQUE
);

CREATE TABLE hashtags_posts (
  id serial PRIMARY KEY,
  hashtag_id integer NOT NULL REFERENCES hashtags (id) ON DELETE CASCADE,
  post_id integer NOT NULL REFERENCES posts (id) ON DELETE CASCADE,
  UNIQUE (hashtag_id, post_id)
);

CREATE TABLE followers (
  id serial PRIMARY KEY,
  created_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  leader_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  follower_id integer NOT NULLREFERENCES users (id) ON DELETE CASCADE,
  UNIQUE (leader_id, follower_id)
);