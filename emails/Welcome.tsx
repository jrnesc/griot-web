import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Link,
  Heading,
} from '@react-email/components';

export default function Welcome() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Griot!</Preview>
      <Body style={{ fontFamily: 'Arial, sans-serif' }}>
        <Container>
          <Heading>Welcome to Griot!</Heading>
          <Text>
            Thank you for subscribing the Griot newsletter.
            <br/>
            <br/>
            We're excited to help you get more from your books and get smarter.
            <br/>
            <br/>
            We'll send you product updates, upcoming features and some cool ways people are using Griot.
          </Text>
          <Text>
            <br />
            <Link href="https://apps.apple.com/gb/app/griot-ai/id6502509469">
              Download Griot on the App Store
            </Link>
          </Text>
          <Text style={{ color: '#666', marginTop: '24px' }}>
            All the best,
            <br />
            The Griot Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
