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

  const resetPrevCharCount = () => {
    prevCharCount = 140;
  };

  return {changeCounterStyle, resetPrevCharCount};
};