import Clientside from "@frontend/app/ClientSide";
import { trpc } from "@frontend/app/trpc";

export default async function Home() {
  const response = await trpc.hello.query({});
  return (
    <div>
      <p>Server side - {response}</p>
      <Clientside />
    </div>
  );
}