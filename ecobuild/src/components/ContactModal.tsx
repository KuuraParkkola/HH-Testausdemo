"use client";
import { useContactModalContext } from "@/contexts/ContactModalContext";
import { X } from "@phosphor-icons/react";
import { ReactElement } from "react";

export default function ContactModal(): ReactElement {
  const { modalOpen, setModalOpen } = useContactModalContext();
  return (
    <div
      data-testid="contact-modal"
      className="fixed top-0 z-10 flex size-full flex-col items-center justify-center bg-green-50/50 backdrop-blur-sm transition-all"
      style={{
        opacity: modalOpen ? "1" : "0",
        pointerEvents: modalOpen ? "auto" : "none",
      }}
      aria-hidden={!modalOpen}
    >
      <div className="flex w-full max-w-screen-sm flex-col gap-4 rounded-md bg-white p-8 drop-shadow-lg">
        <div className="flex items-center justify-between text-5xl">
          <h2 className="text-5xl">Let's Get in Touch!</h2>
          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <X size="1em" />
          </button>
        </div>
        <p className="max-w-[18em] text-xl">
          Leave your contact details and we'll contact you in no time!
        </p>
        <form className="flex flex-col gap-2 text-lg">
          <label htmlFor="contactEmail" className="text-xl">
            Email
          </label>
          <input
            id="contactEmail"
            className="rounded-md bg-slate-200 px-2 shadow-inner"
          ></input>
          <button className="rounded-md bg-green-200 text-green-950 drop-shadow-sm">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
