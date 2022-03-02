/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(()=>{
  loadTweets();
  $('.new-tweet form').on('submit', (e)=>{
    e.preventDefault();
    const data = $(e.target).serialize();
    $.post('/tweets', data)
      .then(()=>{
        loadTweets();
      })
      .catch((err)=>{
        console.log(err);
      });
  });
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

const renderTweets = (tweets) => {
  const tweetsContainer = $('#tweets-container');
  tweetsContainer.empty();
  const markup = tweets.map(tweet=>createTweetElement(tweet));
  tweetsContainer.append(markup);
};

const loadTweets = () => {
  $.get('/tweets')
    .then(data=>{
      renderTweets(data);
    })
    .catch((err)=>{
      console.log(err);
    });
};