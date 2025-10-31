export default function Page() {
  return (
    <main style={{ maxWidth: 720, margin: "48px auto", padding: "0 16px" }}>
      <h1 style={{ margin: 0, fontSize: 32 }}>✅ Event Squad is live</h1>
      <p style={{ lineHeight: 1.6 }}>
        This is a clean, JavaScript-only Next.js app. No TypeScript, no Tailwind, no PostCSS.
        Once this deploys, we’ll add your event manager features one at a time.
      </p>
      <ol style={{ lineHeight: 1.8 }}>
        <li>Create event (title, date, location)</li>
        <li>Volunteer/Task sign-ups</li>
        <li>Food items with recipe links</li>
        <li>Polls (e.g., secret santa vs. white elephant)</li>
        <li>Photo dropbox</li>
      </ol>
    </main>
  );
}
