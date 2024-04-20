import { useState, useEffect } from "react";
import socket from "../hooks/ioSocket";
import { Container, MessagesContainer, MyMessage } from "./styles";
import { fetchMessages } from "../hooks/FetchData";
import MyForm from "../form/MyForm";
import { Message } from "../../../../types/types";
import { FaUserGraduate, FaUser } from "react-icons/fa";

const senderIcons = {
    defaultSender: <FaUser />
} as any;

const getIconForSender = () => {
    return senderIcons.defaultSender;
}

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    
    useEffect(() => {
        const loadMessages = async () => {
            const fetchedMessages = await fetchMessages();
            if (Array.isArray(fetchedMessages)) {
                setMessages(fetchedMessages);
            } else {
                console.error("Fetched data is not an array:", fetchedMessages);
            }
        };
        loadMessages();
    }, []);

    useEffect(() => {
        const handleNewMessage = (newMessage: Message) => {
            setMessages(prevMessages => [...prevMessages, newMessage]);
        };

        socket.on("chat-message", handleNewMessage);

        return () => {
            socket.off("chat-message", handleNewMessage);
        };
    }, []);

    const addMessageToChat = async (newMessage: Message) => {
        socket.emit('chat-message', newMessage);  
        //setMessages(prevMessages => [...prevMessages, newMessage]); 
    };

    return (
        <Container>
            <h1>Chat</h1>
            <MessagesContainer>
                <h2>Messages</h2>
               
                <MyMessage>
                    <ul>
                        {messages.map((msg, index) => (
                            <li key={index}>
                                <span>{getIconForSender()}</span>
                                <span>{msg.message}</span>
                            </li>
                        ))}
                    </ul>
                </MyMessage>

                <MyForm addMessageToChat={addMessageToChat} />
            </MessagesContainer>
        </Container>
    );
};

export default Chat;



