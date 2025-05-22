import React from "react";
import Title from "./_components/Title";
import About from "./_components/About";
import Service from "./_components/Service";

export default function Home() {
  return (
    <div>
      <Title title="Hello World" />
      <About />
      <Service />
    </div>
  );
}
