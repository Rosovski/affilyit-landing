"use client";

import { useEffect, ReactNode } from "react";

export default function AutoResizingPage({ children }) {
  useEffect(() => {
    const resize = () => {
      const height = document.documentElement.scrollHeight;
      window.parent?.postMessage({ type: "resize-iframe", height }, "*");
    };

    const observer = new ResizeObserver(resize);
    observer.observe(document.body);

    // 初始触发一次
    resize();

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div style={{ padding: "2rem" }}>{children}</div>;
}
