import React from "react";

export default function App() {
    const [messages, setMessages] = React.useState(["a","b"])
    /**challenge, only display the <h1> if there are unread messages */
    return (
        <div>
           {messages.length > 0 && <h1> You have {messages.lenght}unread messages!</h1>
}
        </div> 
    );
}

 














