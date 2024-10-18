import React from "react";

export default function Connect() {
  return (
    <footer className="bg-purple-950 p-4 flex justify-center">
      <div className="text-amber-500 text-center">
        <p>
          LINKEDIN:
          <a
            href="https://www.linkedin.com/in/ayesha-fahad-886690112/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:underline ml-2"
          >
            Ayesha Ahmed
          </a>
        </p>
        <p className="mt-2">
          GITHUB:
          <a
            href="https://github.com/ayeshafahad95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:underline ml-2"
          >
            ayeshafahad95
          </a>
        </p>
      </div>
    </footer>
  );
}

