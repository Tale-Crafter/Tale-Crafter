import React from 'react';
import Emoji_smile from "../images/Emoji_smile.png";
import Emoji_love from "../images/Emoji_love.png";
import Emoji_sad from "../images/Emoji_sad.png";
import Emoji_pocker from "../images/Emoji_pocker.png";
import Emoji_angry from "../images/Emoji_angry.png";
const EmojiComponent = ({ onEmojiSelect, selectedEmoji }) => {
    const emojis = [
        { name: 'Emoji_angry', src: Emoji_angry },
        { name: 'Emoji_pocker', src: Emoji_pocker },
        { name: 'Emoji_sad', src: Emoji_sad },
        { name: 'Emoji_love', src: Emoji_love},
        { name: 'Emoji_smile', src: Emoji_smile },
    ];

    return (
        <div className="App">
            {emojis.map((emoji, index) => (
                <div
                    key={index}
                    style={{
                        width: 78,
                        height: 96,
                        left: 252 + index * 88,
                        top: 200,
                        position: 'absolute',
                        cursor: 'pointer',
                        border: selectedEmoji === index ? '3px yellow solid' : 'none', // Add border for selected box
                        transition: 'border-color 0.3s', // Add transition for smooth effect
                    }}
                    onClick={() => onEmojiSelect(index)} // Pass the index (emoji) when clicked
                    onMouseEnter={() => onEmojiSelect(index)} // Highlight box on hover
                    onMouseLeave={() => onEmojiSelect(null)} // Remove highlight on mouse leave
                >
                    <img
                        src={process.env.PUBLIC_URL + '/' + emoji.src}
                        alt={emoji.name}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default EmojiComponent;
