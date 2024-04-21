import { useState, useEffect, useRef } from "react";
import socket from "../hooks/ioSocket";
import { Container, MessagesContainer, MyMessage } from "./styles";
import { fetchMessages } from "../hooks/FetchData";
import MyForm from "../form/MyForm";
import { Message } from "../../../../types/types";
import { FaUserGraduate, FaUser } from "react-icons/fa";
import Loader from "../spiner/Loader";

type SenderId = "sender1" | "sender2";

const senderIcons: Record<SenderId, JSX.Element> = {
  sender1: <FaUserGraduate />,
  sender2: <FaUser />,
};

const getIconForSender = (senderId: SenderId): JSX.Element => {
  return senderIcons[senderId as SenderId] || <FaUser />;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentSenderId, setCurrentSenderId] = useState<SenderId>("sender1");
  const [isLoading, setIsLoading] = useState(true); 
    const messagesContainerRef = useRef<HTMLDivElement>(null);

  
    useEffect(() => {
        const scrollToBottom = () => {
          if (messagesContainerRef.current) {
            const scrollHeight = messagesContainerRef.current.scrollHeight;
            const height = messagesContainerRef.current.clientHeight;
            messagesContainerRef.current.scrollTop = scrollHeight - height;
          }
        };
      
        scrollToBottom();
      }, [messages]);

  useEffect(() => {
    const loadMessages = async () => {
      const fetchedMessages = await fetchMessages();
      if (Array.isArray(fetchedMessages)) {
        setMessages(fetchedMessages);
      } else {
        console.error("Fetched data is not an array:", fetchedMessages);
      }
        setIsLoading(false);
    };
    loadMessages();
  }, []);

  useEffect(() => {
    const handleNewMessage = (newMessage: Message) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.on("chat-message", handleNewMessage);

    return () => {
      socket.off("chat-message", handleNewMessage);
    };
  }, []);

  const addMessageToChat = async (newMessage: Message) => {
    socket.emit("chat-message", newMessage);
    //setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  return (
    <Container>
      <h1>Chat</h1>
      <MessagesContainer
        ref={messagesContainerRef}
      >
        {
            isLoading ? (
                <Loader
                />
            ) : (
             <MyMessage>
          <ul
          >
            {messages.length > 0 ? (
              messages.map((msg, index) => (
              <li key={index}>
                <span>
                  {(index as number) % 2 === 0 ? (
                    <FaUserGraduate />
                  ) : (
                    <FaUser />
                  )}
                </span>
                <span>{msg.message}</span>
              </li>

                ))
            ) : (
                <p>No messages yet.</p> 
            )}
          </ul>
        </MyMessage>
            )}
      </MessagesContainer>
        

      <MyForm senderId={currentSenderId} addMessageToChat={addMessageToChat} />
    </Container>
  );
};

export default Chat;
