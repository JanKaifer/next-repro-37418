import { useEffect, useState } from "react";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const [error, setError] = useState(false);
  useEffect(() => setError(true), []);
  if (error) {
    throw new Error("Test error");
  }
  return null;
}
