/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(()=>{
  renderTweets(data);
  $('.new-tweet form').on('submit', (e)=>{
    e.preventDefault();
  });
});

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const createTweetElement = (data) => {
  const {user, content, created_at} = data;
  const markup = `
  <article class="tweet">
    <header>
      <div>
        <img src="${user.avatars}" alt="face">
        <span>${user.name}</span>
      </div>
      <span>${user.handle}</span>
    </header>
    <p>${content.text}</p>
    <footer>
      <span>${timeago.format(created_at)}</span>
      <div>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>
  `;
  return markup;
};

const renderTweets = (tweets) => {
  const markup = tweets.map(tweet=>createTweetElement(tweet));
  $('#tweets-container').append(markup);
};
