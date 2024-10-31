import React, { useState } from 'react';

export function LikeButton() {
  const [count, setCount] =useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return(
    <span className="likeButton" onClick={handleClick}>
      ♥{count}
    </span>
  );
}