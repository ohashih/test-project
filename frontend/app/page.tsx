import { Counter } from "./counter";

export default function Home() {
  return (
    <main className="container">
      <h1>Sample App</h1>
      <p>Next.js + TypeScript のサンプルページです。</p>
      <Counter />
    </main>
  );
}
