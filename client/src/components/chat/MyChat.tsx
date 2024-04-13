import { useState, useEffect } from "react";
//import api from '../../services/api'
import socket from "../../services/IoSocket";
import Form from "./Form";
console.log(socket);

import { Container, MessagesContainer, Message } from "./styles";

const MyChat = () => {
  const [messages, setMessages] = useState("");

  useEffect(() => {
    socket.on("chat-message", (message) => {
      console.log("Received message:", message);
      setMessages(prevMessages => prevMessages + message + '\n')
    });

    return () => {
      socket.off("chat-message" );
    };
  }, []);

  return (
    <Container>
      <h1>Chat</h1>
      <MessagesContainer>
        <h2>Messages</h2>

        <Message>
            <ul>
                {
                    messages && messages.split('\n').map((item, i) => {
                        return <li key={i}>{item}</li>
                    }
                    )
                }
            </ul>
        </Message>

        <Form />
      </MessagesContainer>
    </Container>
  );
};

export default MyChat;
