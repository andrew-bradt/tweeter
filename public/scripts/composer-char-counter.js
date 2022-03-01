$(document).ready(function() {
  $('.new-tweet textarea').on('input', function(){
    const remainingChars = _getRemainingChars(this.value);
    const counter = $(this).siblings().children().last();
    counter.text(remainingChars);
  });
});

const _getRemainingChars = (val) => {
  const tweetSize = 140;
  return tweetSize - val.length;
};

