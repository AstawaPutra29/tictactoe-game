import React from "react";

function Square() {
  return <button className="">X</button>;
}

function Content({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap w-[300px]">{children}</div>;
}

interface CardTicTacToe {
  status: string;
  children: React.ReactNode;
}

function Card({ status, children }: CardTicTacToe) {
  return (
    <div className="flex place-content-center p-10">
      <div className="flex flex-col items-center shadow-lg border border-black rounded-lg p-4 gap-y-4 bg-white">
        <div className="text-2xl font-bold">TIC TAC TOE</div>
        <div className="text-xl">Status: {status}</div>
        {children}
      </div>
    </div>
  );
}

Card.Content = Content;

export default Card;
