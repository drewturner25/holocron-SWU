'use client';

import { useDisclosure } from '@mantine/hooks';
import {
  Box,
  Burger,
  Button,
  Drawer,
  Group,
  NavLink,
  rem,
  Stack,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Deck Builder', href: '/deck-builder' },
  { label: 'Decks', href: '/decks' },
  { label: 'Export', href: '/export' },
  { label: 'Cards', href: '/cards' },
];

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <>
      {/* Floating pill wrapper */}
      <Box
        px="md"
        pt="md"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <Box
          component="header"
          style={{
            borderRadius: rem(999),
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(14px)',
            boxShadow: '0 4px 32px rgba(51, 51, 51, 0.25)',
          }}
        >
          <Group
            justify="space-between"
            align="center"
            px="xl"
            style={{ height: rem(58) }}
          >
            <Text
              component={Link}
              href="/"
              fw={600}
              size="lg"
              style={{
                textDecoration: 'none',
                color: '#131313',
                letterSpacing: '-0.5px',
              }}
            >
              Holocron
            </Text>

            {/* Desktop Nav Links */}
            <Group gap={rem(4)} visibleFrom="sm">
              {navLinks.map((link) => (
                <Text
                  key={link.href}
                  component={Link}
                  href={link.href}
                  size="sm"
                  fw={pathname === link.href ? 600 : 400}
                  px="md"
                  py={rem(6)}
                  style={{
                    textDecoration: 'none',
                    borderRadius: rem(999),
                    fw: pathname === link.href ? 600 : 400,
                    color: pathname === link.href ? '#000000' : 'rgb(43, 43, 43)',
                    transition: 'all 150ms ease',
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href) {
                      (e.target as HTMLElement).style.background = 'transparent';
                      (e.target as HTMLElement).style.color =
                        'rgba(0, 0, 0, 0.8)';
                    }
                  }}
                >
                  {link.label}
                </Text>
              ))}
            </Group>

            {/* Desktop CTAs */}
            <Group gap="sm" visibleFrom="sm">
              <Button
                variant="subtle"
                size="sm"
                radius="xl"
                style={{ color: 'rgba(31, 31, 31, 0.9)' }}
              >
                Sign in
              </Button>
              <Button
                size="sm"
                radius="xl"
                style={{
                  background: '#8d1cce',
                  color: '#ffffff',
                  fontWeight: 600,
                }}
              >
                Get started
              </Button>
            </Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color="#fff"
            />
          </Group>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        padding="md"
        title={
          <Text fw={800} size="lg" c="violet.7">
            Holocron
          </Text>
        }
        hiddenFrom="sm"
        zIndex={200}
      >
        <Stack gap="xs">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              component={Link}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
              color="violet"
              onClick={close}
              style={{ borderRadius: rem(999) }}
            />
          ))}
          <Box mt="md">
            <Button fullWidth variant="outline" color="violet" radius="xl" mb="xs" onClick={close}>
              Sign in
            </Button>
            <Button fullWidth color="violet" radius="xl" onClick={close}>
              Get started
            </Button>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}