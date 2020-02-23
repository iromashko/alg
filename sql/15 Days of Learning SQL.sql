/* Julia conducted a days of learning SQL contest.The START date of the contest was March 01,
 2016
 AND the
 END date was March 15,
 2016.WRITE a query TO print total number of UNIQUE hackers who made at least submission each DAY (STARTING ON the FIRST DAY of the contest),
 AND find the hacker_id
 AND name of the hacker who made maximum number of submissions each DAY.IF more than one such hacker has a maximum number of submissions,
 print the lowest hacker_id.The query should print this information FOR each DAY of the contest,
 sorted by the date. */
SELECT
  submission_date,
  (
    SELECT
      COUNT(DISTINCT hacker_id)
    FROM
      Submissions s2
    WHERE
      s2.submission_date = s1.submission_date
      AND (
        SELECT
          COUNT(DISTINCT s3.submission_date)
        FROM
          Submissions s3
        WHERE
          s3.hacker_id = s2.hacker_id
          AND s3.submission_date < s1.submission_date
      ) = dateDIFF(s1.submission_date, '2016-03-01')
  ),
  (
    SELECT
      hacker_id
    FROM
      submissions s2
    WHERE
      s2.submission_date = s1.submission_date
    GROUP BY
      hacker_id
    ORDER BY
      count(submission_id) DESC,
      hacker_id
    LIMIT
      1
  ) AS shit,
  (
    SELECT
      name
    FROM
      hackers
    WHERE
      hacker_id = shit
  )
FROM
  (
    SELECT
      DISTINCT submission_date
    FROM
      submissions
  ) s1
GROUP BY
  submission_date