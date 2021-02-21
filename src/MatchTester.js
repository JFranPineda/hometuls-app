import React, { useState } from 'react';

const MatchTester = () => {
    const [word, setWord] = useState("google");
    const [isCorrect, setIsCorrect] = useState(null);

    function submitTest() {
        const pattern = /^g(o|\[\]|\(\)|\<\>|0)(o|\[\]|\(\)|\<\>|0)gl((e|3){1})$/;
        if (word.trim() === word) {
            if (word.length >= 6 && word.length <= 8) {
                const minusWord = word.toLowerCase();
                const result = pattern.test(minusWord);
                setIsCorrect(String(result));
            } else {
                setIsCorrect(String(false));
            }
        } else {
            setIsCorrect(String(false));
        }
    };

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    submitTest();
                }}
            >
                <label htmlFor="Word">
                    Word
                    <input
                        id="word"
                        value={word}
                        placeholder="word"
                        onChange={e => setWord(e.target.value)}
                    />
                </label>
                {
                    isCorrect ?
                        (
                            <label htmlFor="Post-response">
                                Output: {isCorrect}
                            </label>
                        ) : null
                }

                <button>Submit</button>
            </form>
        </div>
    );
};

export default MatchTester;