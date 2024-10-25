"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IContactModalContext {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ContactModalContext = createContext<IContactModalContext | null>(
  null,
);

export function ContactModalContextProvider({
  children,
}: PropsWithChildren): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModalContext(): IContactModalContext {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error(
      "useContactModalContext may only be used within a ContactModalContextProvider",
    );
  }
  return context;
}
