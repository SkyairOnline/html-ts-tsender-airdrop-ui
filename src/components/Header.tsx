import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/SkyairOnline/html-ts-tsender-airdrop-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <h1 className="text-2xl font-bold text-gray-800">tsender</h1>
      </div>
      <ConnectButton />
    </header>
  );
}