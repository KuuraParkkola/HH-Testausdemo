"use client";
import { useContactModalContext } from "@/contexts/ContactModalContext";
import { PropsWithChildren, ReactElement } from "react";

export default function ContactModalOpenButton({
  children,
}: PropsWithChildren): ReactElement {
  const { setModalOpen } = useContactModalContext();

  return (
    <button
      data-testid="cta-request-quote-btn"
      className="self-center rounded-md bg-green-200 p-6 text-3xl drop-shadow-md transition-all duration-300 ease-out hover:drop-shadow-xl"
      onClick={() => {
        setModalOpen(true);
      }}
    >
      {children}
    </button>
  );
}
