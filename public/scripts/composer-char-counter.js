$(document).ready(function() {
  const changeCounterStyle = monitorCharCount();
  $('.new-tweet textarea').on('input', function() {
    const remainingChars = getRemainingChars(this.value);
    const counter = $(this).siblings().children().last();
    counter.text(remainingChars);
    changeCounterStyle(counter, remainingChars);
  });
  
});

const getRemainingChars = (val) => {
  const tweetSize = 140;
  return tweetSize - val.length;
};

const monitorCharCount = () => {
  let prevCharCount = 140;
  const changeCounterStyle = (el, remainingChars) => {
    const addClassCond = prevCharCount >= 0 && remainingChars < 0;
    const removeClassCond = prevCharCount < 0 && remainingChars >= 0;
    if (addClassCond) {
      el.addClass('exceeded-char-count');
    } else if (removeClassCond) {
      el.removeClass('exceeded-char-count');
    }
    prevCharCount = remainingChars;
  };
  return changeCounterStyle;
};