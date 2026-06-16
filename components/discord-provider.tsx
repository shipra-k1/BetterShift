"use client";

import { useEffect } from "react";
import { DiscordSDK } from "@discord/embedded-app-sdk";

export function DiscordProvider() {
  useEffect(() => {
    // Only run inside Discord iFrame
    if (window.self === window.top) return;
    
    async function setup() {
      const discordSdk = new DiscordSDK("1516194035667177632");
      await discordSdk.ready();
      console.log("Discord SDK ready!");
    }
    setup();
  }, []);

  return null;
}
