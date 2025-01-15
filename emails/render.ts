import { render } from '@react-email/render';
import Welcome from './Welcome';

export async function renderWelcomeEmail() {
  return await render(Welcome());
} 