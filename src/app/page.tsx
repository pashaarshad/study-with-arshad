import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the AI Introduction page by default
  redirect('/ai/introduction/what-is-ai');
}
