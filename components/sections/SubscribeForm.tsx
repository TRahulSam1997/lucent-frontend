import { useState, FormEvent } from 'react';

export const SubscribeForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(`Subscribing email: ${email}`);
    // You can replace this console.log with your own subscribe function
  }

  const handleEmailChange = (event: FormEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="your@email.com"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
