import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { Address } from "src/services/profile";
import { getCookie, setCookie } from "src/utils/cookies";
import { useAuth } from "src/contexts/Auth/authContext";
import { api } from "src/services/api";

interface ProfileContextType {
  address: Address[] | null;
  setAddress: Dispatch<SetStateAction<Address[] | null>>;
}

const ProfileContext = createContext({} as ProfileContextType);

function ProfileProvider({ children }: any) {
  const [address, setAddress] = useState<Address[] | null>(null);
  const { user, cookieExist } = useAuth();

  useEffect(() => {
    (async () => {
      const token = getCookie("auth.token");

      if(token) {
        const { data } = await api.get("/address/list");

        if (data) {
          setAddress(data);
          setCookie("address", JSON.stringify(data), 30)
          return;
        }
      }

    })();
  }, [user, cookieExist]);

  return (
    <ProfileContext.Provider value={{ address, setAddress }}>
      {children}
    </ProfileContext.Provider>
  );
}

function useProfile() {
  const context = useContext(ProfileContext);

  if (context === undefined) {
    throw new Error("useProfile() must be used within a ProfileProvider");
  }
  return context;
}

export { ProfileProvider, useProfile };
