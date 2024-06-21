import React from "react";
import Header from "./components/header"
import SearchParameters from "./components/SearchParameters"

export default function Home() {
  return (
    <>
      <Header/>
      <section className="params-container">
        <SearchParameters/>
      </section>
      <main>
      </main>
    </>
  );
}
