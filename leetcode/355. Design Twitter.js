class Twitter {
  constructor() {
    this.userTweets = new Map();
    this.userFollowing = new Map();
    this.lastIndex = 1;
  }

  postTweet(userId, tweetId) {
    let tweets = this.userTweets.get(userId);
    if (!tweets) {
      tweets = [];
      this.userTweets.set(userId, tweets);
    }
    tweets.unshift({ id: tweetId, index: this.lastIndex });
    this.lastIndex = this.lastIndex + 1;
  }

  getNewsFeed(userId) {
    const followings = this.userFollowing.get(userId);
    let tweets = (this.userTweets.get(userId) || []).slice(0, 10);

    followings &&
      followings.forEach(uid => {
        if (uid === userId) return;

        const userTweets = this.userTweets.get(uid);
        if (userTweets) {
          tweets = tweets.concat(userTweets);
        }
      });

    return tweets
      .sort((a, b) => b.index - a.index)
      .map(tweet => tweet.id)
      .slice(0, 10);
  }

  follow(followerId, followeeId) {
    let followings = this.userFollowing.get(followerId);
    if (!followings) {
      followings = new Set();
      this.userFollowing.set(followerId, followings);
    }
    followings.add(followeeId);
  }

  unfollow(follower, followee) {
    const followings = this.userFollowing.get(follower);
    followings && followings.delete(followee);
  }
}
