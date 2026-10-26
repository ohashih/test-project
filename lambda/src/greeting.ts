export interface Greeting {
  message: string;
  timestamp: string;
}

export const buildGreeting = (
  name: string | undefined,
  now: Date = new Date(),
): Greeting => {
  const target = name?.trim() || "world";
  return {
    message: `Hello, ${target}!`,
    timestamp: now.toISOString(),
  };
};
