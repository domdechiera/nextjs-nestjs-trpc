import { trpc } from "@frontend/app/trpc";

export default async function Home() {
  const { greeting }: { greeting: string } = await trpc.hello.query({ name: `Dom` });
  return <div>{greeting}</div>;
}