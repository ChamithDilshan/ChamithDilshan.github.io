import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend, FiRefreshCw } from 'react-icons/fi';
import './ChatWidget.css';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState(() => 'session-' + Date.now());
    const chatBodyRef = useRef(null);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const newSession = () => {
        setSessionId('session-' + Date.now());
        setMessages([]);
    };

    const sendMessage = async () => {
        const text = input.trim();
        if (!text || isLoading) return;

        setMessages((prev) => [...prev, { role: 'user', text }]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('https://chamith.pythonanywhere.com/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: text, sessionID: sessionId }),
            });
            const data = await response.json();
            setMessages((prev) => [...prev, { role: 'bot', text: data.response || data.error }]);
        } catch {
            setMessages((prev) => [...prev, { role: 'bot', text: 'Something went wrong. Please try again!' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating toggle button */}
            {!isOpen && (
                <button className="chat-toggle" onClick={() => setIsOpen(true)} aria-label="Open chat">
                    <FiMessageSquare size={24} />
                    <span className="chat-toggle__tooltip">Chat with AI Assistant</span>
                </button>
            )}

            {/* Chat panel */}
            {isOpen && (
                <div className="chat-panel glass-strong">
                    <div className="chat-panel__header">
                        <span>Chat with Chamith AI</span>
                        <div className="chat-panel__header-actions">
                            <button onClick={newSession} title="New session" aria-label="New session">
                                <FiRefreshCw size={16} />
                            </button>
                            <button onClick={() => setIsOpen(false)} title="Close" aria-label="Close chat">
                                <FiX size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="chat-panel__body" ref={chatBodyRef}>
                        {messages.length === 0 && (
                            <div className="chat-panel__empty">
                                <p>👋 Hi! Ask me anything about Chamith.</p>
                            </div>
                        )}
                        {messages.map((msg, i) => (
                            <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="chat-msg chat-msg--bot chat-msg--loading">
                                <span className="dot" /><span className="dot" /><span className="dot" />
                            </div>
                        )}
                    </div>

                    <div className="chat-panel__input">
                        <textarea
                            rows={1}
                            placeholder="Type your question..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button onClick={sendMessage} disabled={isLoading} aria-label="Send message">
                            <FiSend size={16} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
