function Chatbot() {
    return ( 
        <div className="chatbot-container bg-base-200 rounded-2xl w-full h-full p-4">
            {/* Chat Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">Chatbot</h3>
            </div>

            {/* Chat Messages */}
            <div className="chat-messages flex flex-col gap-4 h-[600px] overflow-y-auto p-4 border-2">
                <div className="chat chat-start">
                    <div className="chat-bubble text-left">Hello! How can I assist you today?</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble text-left">I'm looking for car maintenance tips.</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble text-left">Sure! I can help you with that. What do you need help with specifically?</div>
                </div>
            </div>

            {/* Chat Input */}
            <div className="chat-input flex items-center gap-4 mt-4">
                <input
                    type="text"
                    className="input input-bordered input-primary flex-grow"
                    placeholder="Type your message..."
                />
                <button className="btn btn-primary">Send</button>
            </div>
        </div>
     );
}

export default Chatbot;