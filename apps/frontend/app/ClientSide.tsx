"use client";

import { useEffect, useState } from "react";
import { trpc } from "@frontend/app/trpc";

export default function Clientside() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    trpc.hello.query({}).then((response) => {
      setGreeting(response);
    });
  });
  return <div>I am client side - {greeting}</div>;
}