'use client';

import { defineChain } from 'viem';
import { Outfit } from 'next/font/google';
import { PrivyProvider } from '@privy-io/react-auth';
import 'dotenv/config'; // Ensure dotenv is configured at the top level
import "./globals.css"


// Load font
const font = Outfit({ subsets: ['latin'] });

// Define the Sepolia chain configuration using environment variables
const Sepolia = defineChain({
  id: 11155111,
  name: "Sepolia Testnet",
  network: "Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: [process.env.RPc_Url as string], // Use the RPC URL from the .env file
    },
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://sepolia.etherscan.io" },
  },
});

// Main component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId={"cm3eie91f069d70q7t90gx9q1"} // Use the Privy app ID from .env
          config={{
            appearance: {
              theme: 'light',
              accentColor: '#676FFF',
              logo: '',
            },
            embeddedWallets: {
              createOnLogin: 'users-without-wallets',
            },
            defaultChain: Sepolia,
            supportedChains: [Sepolia],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
