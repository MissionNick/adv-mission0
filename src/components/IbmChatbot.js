import React, { useEffect } from "react";
import { withWebChat } from "@ibm-watson/assistant-web-chat-react";

const ChatBot = ({ createWebChatInstance }) => {
  useEffect(() => {
    function onWebChatLoad(instance) {
      instance.render();
    }

    // A web chat configuration options object as documented at https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-configuration#configurationobject
    const webChatOptions = {
      integrationID: "7b9650dd-90a7-4b24-a2f0-62aa05d565af",
      region: "au-syd",
      serviceInstanceID: "63de70d8-e925-42e4-857f-c86a3a615c2a",
      onLoad: onWebChatLoad,
    };

    createWebChatInstance(webChatOptions);
  }, []);

  return <div></div>;
};

// Wrap the component with the method returned by `withWebChat`.
export default withWebChat()(ChatBot);
