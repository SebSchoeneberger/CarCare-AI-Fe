import { useState, useEffect, useRef } from "react";
import botAvatar from "../assets/128561149_GIU AMA 255-08.svg";
import userAvatar from "../assets/man.png";
import axios from "axios";

/**
 * Chatbox component for interacting with openAi chat completion through the Apps Backend.
 * This component allows users to send messages and receive responses from AI.
 */

function Chatbox() {
    const API_URL = import.meta.env.VITE_API_URL;

    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "bot",
            content: "Hello! How can I assist you today?"
        }
    ]);

    const messagesEndRef = useRef(null);


// Add a new message to the chat messages State
    const addMessage = (role, content) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { role, content }
        ]);
    };

    const handleInput = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        addMessage("user", input);
        fetchBotResponse(input);
        setInput("");
    };


    /**
     * Fetch the bot's response based on the user's input.
     * API call to the backend to get the response from the AI model.
     */

    const fetchBotResponse = async (input) => {
        setLoading(true);
        try {
            const res = await axios.post(`${API_URL}/openAi/completion`, { prompt: input });
            addMessage("bot", res.data.data);
        } catch (err) {
            console.error(err);
            addMessage("bot", "Sorry, something went wrong.");
        } finally {
            setLoading(false);
        }
    };
    
// Scroll to the bottom of the chat when a new message is added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chatbot-container bg-base-200 rounded-2xl w-full h-full p-4">
           
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">Chatbot</h3>
            </div>

        {/* Chat Messages */}
            <div className="chat-messages flex flex-col gap-4 h-[600px] overflow-y-auto p-4 border-2">
                {messages.map(({role,content}, index) => (
                    <div key={index} className={`chat ${role === 'bot' ? 'chat-start' : 'chat-end'}`}>
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Avatar"
                                    src={role === "user" ? userAvatar : botAvatar}
                                />
                            </div>
                        </div>
                        <div className="chat-bubble text-left">{content}</div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start items-center mt-2 pl-2">
                        <span className="loading loading-dots loading-md"></span>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="chat-input flex items-center gap-4 mt-4">
                <input
                    type="text"
                    className="input input-bordered input-primary flex-grow"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleInput(e)}
                />
                <button className="btn btn-primary" onClick={handleInput} disabled={loading}>Send</button>
            </div>
        </div>
    );
}

export default Chatbox;