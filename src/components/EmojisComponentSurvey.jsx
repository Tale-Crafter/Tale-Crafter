import React, { useState, useRef, useEffect } from 'react';
import emojilove from '../images/emoji.png';
import emojilaugh from '../images/emoji@2x-1.png';
import emojipocker from '../images/emoji-2.png';
import emojisad from '../images/emoji-3.png';
import emojismile from '../images/emoji-6.png';
import emojiangry from '../images/Emoji_angry.png';

const EmojiComponentSurvey = ({ onEmojiSelect, selectedEmoji }) => {
  const emojis = [
    { name: 'Emoji_love', src: emojilove },
    { name: 'Emoji_laugh', src: emojilaugh },
    { name: 'Emoji_smile', src: emojismile },
    { name: 'Emoji_pocker', src: emojipocker },
    { name: 'Emoji_sad', src: emojisad },
    { name: 'Emoji_angry', src: emojiangry }
  ];

  const emojiSize = '30px'; // Default emoji size
  const angryEmojiSize = '30px'; // Size for the angry emoji specifically

  const [isPressed, setIsPressed] = useState(null); // Track which emoji is pressed
  const [hoveredEmoji, setHoveredEmoji] = useState(null); // Track which emoji is hovered

  const handleEmojiClick = (emojiName, emojiSrc) => {
    console.log("Selected Emoji:", emojiName);  // Log the selected emoji's name
    onEmojiSelect(emojiName, emojiSrc); // Pass emoji name and src to the parent
  };

  const handlePressStart = (emojiName) => {
    setIsPressed(emojiName);
  };

  const handlePressEnd = () => {
    setTimeout(() => setIsPressed(null), 200); // Reset the pressed state after a short delay
  };

  const handleMouseEnter = (emojiName) => {
    setHoveredEmoji(emojiName);
  };

  const handleMouseLeave = () => {
    setHoveredEmoji(null);
  };

  const styles = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const divStyle = {
    textAlign: 'center',
    backgroundColor: 'transparent',
    padding: '5px',
    borderRadius: '7px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
    position: 'relative', // Position text/labels inside emojis
  };

  const pressedStyle = {
    backgroundColor: 'white',
  };

  const hoverStyle = {
    backgroundColor: 'lightgray', // Light gray background on hover
  };

  const imgStyle = {
    width: emojiSize,
    height: emojiSize,
    border: '1px solid transparent',
  };

  const imgSelectedStyle = {
    backgroundColor: 'transparent', // Selected emoji style
  };

  const imgAngryStyle = {
    width: angryEmojiSize,
    height: angryEmojiSize, // Apply special style for angry emoji
  };

  return (
      <div style={styles}>
        {emojis.map((emoji, index) => (
            <div
                key={index}
                style={{
                  ...divStyle,
                  ...(isPressed === emoji.name && pressedStyle), // Apply pressed style if this emoji is being pressed
                  ...(selectedEmoji === emoji.name && imgSelectedStyle), // Highlight selected emoji
                  ...(hoveredEmoji === emoji.name && hoverStyle), // Hover effect
                }}
                onMouseDown={() => handlePressStart(emoji.name)} // Set pressed state
                onMouseUp={handlePressEnd} // Reset pressed state when mouse button is released
                onMouseEnter={() => handleMouseEnter(emoji.name)} // Track hover state
                onMouseLeave={handleMouseLeave} // Reset hover state when mouse leaves
                onClick={() => handleEmojiClick(emoji.name, emoji.src)} // Handle click
            >
              <img
                  src={emoji.src}
                  alt={emoji.name}
                  style={emoji.name === 'Emoji_angry' ? { ...imgStyle, ...imgAngryStyle } : imgStyle} // Angry emoji specific style
              />
            </div>
        ))}
      </div>
  );
};

export default EmojiComponentSurvey;
