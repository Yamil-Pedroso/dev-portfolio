import { Section, Form, Input, Button } from "./styles";
import { useState, useEffect } from "react";
import { sendMessage } from "../hooks/FetchData";
import { Message } from "../../../../types/types";

interface MyFormProps {
    addMessageToChat: (message: Message) => void;
}

const MyForm: React.FC<MyFormProps> = ({ addMessageToChat }) => {
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const sender = "defaultSender"; 
        if (message.trim()) {
            //const newMessage = {
            //    message,
            //    sender
            //};
            const savedMessage = await sendMessage(message, sender);
            if (savedMessage) {
                addMessageToChat(savedMessage);
                setMessage("");
            } else {
                console.error("Failed to save the message");
            }
        }
    };

    return (
        <Section>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Write a Message"
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Section>
    );
};

export default MyForm;
