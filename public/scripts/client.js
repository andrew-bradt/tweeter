/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(()=>{
  loadTweets();
  submitTweet();
});

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

const submitTweet = () => {
  $('.new-tweet form').on('submit', function(e) {
    e.preventDefault();
    const data = $(this).serialize();
    $.post('/tweets', data)
    .then(()=>{
      console.log('Successfully submitted tweet');
    });
  });
};

const renderTweets = (tweets) => {
  const markup = tweets.map(tweet=>createTweetElement(tweet));
  $('#tweets-container').append(markup);
};

const loadTweets = () => {
  $.get('/tweets')
  .then(data=>{
    renderTweets(data);
  });
};