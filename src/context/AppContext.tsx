"use client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface AppContextProps {
  children: ReactNode;
}

export interface AppContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  successModalOpen: boolean;
  setSuccessModalOpen: Dispatch<SetStateAction<boolean>>;
  successModalContent: string | null;
  setSuccessModalContent: Dispatch<SetStateAction<string | null>>;
  additionalDetails?: ReactNode | null;
  setAdditionalDetails?: Dispatch<SetStateAction<ReactNode | null>>;
  handlePrimaryAction: () => void;
  handleSecondaryAction: () => void;
  setCustomActions: (
    primaryAction: (data?: any) => void, // Allow optional data
    secondaryAction: () => void,
  ) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppContextProps) => {
  const [loading, setLoading] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successModalContent, setSuccessModalContent] = useState<string | null>(
    null,
  );
  const [additionalDetails, setAdditionalDetails] = useState<ReactNode | null>(
    null,
  );

  // Default actions
  const [primaryAction, setPrimaryAction] = useState<(data?: any) => void>(
    () => () => {},
  );
  const [secondaryAction, setSecondaryAction] = useState<() => void>(
    () => () => {},
  );

  // Set custom actions
  const setCustomActions = (
    newPrimaryAction: (data?: any) => void,
    newSecondaryAction: () => void,
  ) => {
    setPrimaryAction(() => newPrimaryAction);
    setSecondaryAction(() => newSecondaryAction);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        successModalOpen,
        setSuccessModalOpen,
        successModalContent,
        setSuccessModalContent,
        additionalDetails,
        setAdditionalDetails,
        handlePrimaryAction: primaryAction,
        handleSecondaryAction: secondaryAction,
        setCustomActions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
