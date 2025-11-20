"use client";

import { ChatKit } from "@openai/chatkit";
import type { ChatKitOptions } from "@openai/chatkit";

const options: ChatKitOptions = {
  api: {
    // Your backend ChatKit server. Leave empty for default client mode.
    // If you add a server later, place your URL here.
    // url: "/api/chatkit"
  },
  theme: {
    colorScheme: "light",
    radius: "round",
    density: "compact",
    color: {
      grayscale: {
        hue: 287,
        tint: 0,
        shade: 2,
      },
      accent: {
        primary: "#fe0606",
        level: 1,
      },
    },
    typography: {
      baseSize: 16,
      fontFamily:
        '"OpenAI Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
      fontFamilyMono:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace',
      fontSources: [
        {
          family: "OpenAI Sans",
          src: "https://cdn.openai.com/common/fonts/openai-sans/v2/OpenAISans-Regular.woff2",
          weight: 400,
          style: "normal",
          display: "swap",
        },
        // Add more font sources if needed
      ],
    },
  },
  composer: {
    attachments: {
      enabled: true,
      maxCount: 5,
      maxSize: 10485760,
    },
    tools: [
      {
        id: "search_docs",
        label: "Search docs",
        shortLabel: "Docs",
        placeholderOverride: "Search documentation",
        icon: "book-open",
        pinned: false,
      },
      // add more tools if needed
    ],
    models: [
      {
        id: "gpt-5",
        label: "gpt-5",
        description: "Balanced intelligence",
        default: true,
      },
      // add more models if needed
    ],
  },
  startScreen: {
    greeting: "",
    prompts: [
      {
        icon: "circle-question",
        label: "What is ChatKit?",
        prompt: "What is ChatKit and what does it do?",
      },
      // add more prompts if needed
    ],
  },
};

export default function Page() {
  return (
    <div className="h-screen w-full">
      <ChatKit
        workflow={process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID ?? ""}
        options={options}
      />
    </div>
  );
}
