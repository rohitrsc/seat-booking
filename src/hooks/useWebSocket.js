

import { useState, useEffect } from "react";

const useWebSocket = (eventKey) => {
  const [latestUpdates, setLatestUpdates] = useState(null);

  useEffect(() => {
    const wsUrl = `wss://your-websocket-url/${eventKey}`;
    let ws;

    try {
      ws = new WebSocket(wsUrl);
      
      ws.onopen = () => console.log("WebSocket Connected");
      
      ws.onmessage = (message) => {
        setLatestUpdates(JSON.parse(message.data));
      };

      ws.onerror = (error) => {
        console.error("WebSocket Error:", error);
      };

      ws.onclose = () => console.warn("WebSocket Disconnected");
    } catch (error) {
      console.error("WebSocket Connection Failed:", error);
    }

    return () => ws && ws.close();
  }, [eventKey]);

  return { latestUpdates };
};

export default useWebSocket;
