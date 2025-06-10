import Button from "./Button";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="mt-20 border-t border-neutral-700 py-10 px-4 sm:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Logo / About Section */}
                <div>
                    <h1 className="text-lg font-semibold mb-4 text-white font-rog uppercase">
                        VirtualR
                    </h1>
                    <p className="text-neutral-300 mb-4">
                        VirtualReality is the reality of visualization.
                    </p>
                    <div className="flex sm:justify-start">
                        <Button />
                    </div>
                </div>

                {/* Platform Links */}
                <div>
                    <h3 className="text-md font-semibold mb-4 text-white font-orbitron uppercase">Platform</h3>
                    <ul className="space-y-2">
                        {platformLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white text-sm"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Community Links */}
                <div>
                    <h3 className="text-md font-semibold mb-4 text-white font-orbitron uppercase">Community</h3>
                    <ul className="space-y-2">
                        {communityLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white text-sm"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources Links */}
                <div>
                    <h3 className="text-md font-semibold mb-4 text-white font-orbitron uppercase">Resources</h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-neutral-300 hover:text-white text-sm"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
