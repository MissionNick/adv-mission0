<script>
    window.watsonAssistantChatOptions = {
        integrationID: "7b9650dd-90a7-4b24-a2f0-62aa05d565af", // The ID of this integration.
        region: "au-syd", // The region your integration is hosted in.
        serviceInstanceID: "63de70d8-e925-42e4-857f-c86a3a615c2a", // The ID of your service instance.
        onLoad: function (instance) { instance.render(); }
    };
    setTimeout(function() {
        const t = document.createElement('script');
        t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
    });
        
    </script>