SHOW data_directory;

SELECT
  oid,
  datname
FROM
  pg_database;

SELECT
  *
FROM
  pg_class;

SELECT
  username,
  contents
FROM
  users
  JOIN comments ON comments.user_id = users.id
WHERE
  username = 'Alyson14';

WITH tags AS (
  SELECT
    user_id,
    created_at
  FROM
    caption_tags
  UNION
  ALL
  SELECT
    user_id,
    created_at
  FROM
    photo_tags
)
SELECT
  users.username,
  tags.created_at
FROM
  users
  JOIN tags ON tags.user_id = users.id
WHERE
  tags.created_at < '2010-01-07';

WITH recursive countdown(val) AS (
  SELECT
    10 AS val
  UNION
  SELECT
    val - 1
  FROM
    countdown
  WHERE
    val > 1
)
SELECT
  *
FROM
  countdown;

WITH recursive suggestions(leader_id, follower_id, depth) AS (
  SELECT
    leader_id,
    follower_id,
    1 AS depth
  FROM
    followers
  WHERE
    follower_id = 1000
  UNION
  SELECT
    followers.leader_id,
    follower_id,
    depth + 1
  FROM
    followers
    JOIN suggestions ON suggestions.leader_id = followers.follower_id
  WHERE
    depth < 3
)
SELECT
  DISTINCT users.id,
  users.username
FROM
  suggestions
  JOIN users ON users.id = suggestions.leader_id
WHERE
  depth > 1
LIMIT
  5;

SELECT
  username,
  count(*)
FROM
  users
  JOIN tags ON tags.user_id = users.id
GROUP BY
  users.username
ORDER BY
  count(*) DESC;

CREATE VIEW tags AS (
  SELECT
    id,
    created_at,
    user_id,
    post_id,
    'photo_tag' AS TYPE
  FROM
    photo_tags
  UNION
  ALL
  SELECT
    id,
    created_at,
    user_id,
    post_id,
    'caption_tag' AS TYPE
  FROM
    caption_tags
);

SELECT
  *
FROM
  tags
WHERE
  TYPE = 'caption_tag';

CREATE VIEW recent_posts AS (
  SELECT
    *
  FROM
    posts
  ORDER BY
    created_at DESC
  LIMIT
    10
);

SELECT
  username
FROM
  recent_posts
  JOIN users ON users.id = recent_posts.user_id;

CREATE
OR REPLACE VIEW recent_posts AS (
  SELECT
    *
  FROM
    posts
  ORDER BY
    created_at DESC
  LIMIT
    15
);

SELECT
  *
FROM
  likes
  LEFT JOIN posts ON posts.id = likes.post_id
  LEFT JOIN comments ON comments.id = likes.comment_id;

SELECT
  date_trunc(
    'week',
    coalesce(posts.created_at, comments.created_at)
  ) AS week,
  count(posts.id) AS num_likes_for_posts,
  count(comments.id) AS num_likes_for_comments
FROM
  LIKES
  LEFT JOIN POSTS ON POSTS.ID = LIKES.POST_ID
  LEFT JOIN COMMENTS ON COMMENTS.ID = LIKES.COMMENT_ID
GROUP BY
  week
ORDER BY
  week;

CREATE materialized VIEW weekly_likes AS (
  SELECT
    date_trunc(
      'week',
      coalesce(posts.created_at, comments.created_at)
    ) AS week,
    count(posts.id) AS num_posts,
    count(comments.id) AS num_comments
  FROM
    LIKES
    LEFT JOIN POSTS ON POSTS.ID = LIKES.POST_ID
    LEFT JOIN COMMENTS ON COMMENTS.ID = LIKES.COMMENT_ID
  GROUP BY
    week
  ORDER BY
    week
) WITH data;

SELECT
  *
FROM
  weekly_likes;

DELETE FROM
  posts
WHERE
  created_at < '2010-02-01';

refresh materialized VIEW weekly_likes;