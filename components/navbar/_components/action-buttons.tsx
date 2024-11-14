"use client";
import React, { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";
import { useWallets } from "@privy-io/react-auth";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";
import { getUserByAddress } from "@/utils/queries";

const ActionButtons = () => {
  const { ready, authenticated, login, logout } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);
  const { wallets } = useWallets();

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [UserInfo, setUserInfo] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true); // Loading state for user info

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      setLoading(true); // Start loading
      try {
        const userInfo = await getUserByAddress(ready ? wallets[0]?.address : "0x0");

        // Log userInfo to understand its structure
        console.log("Fetched UserInfo:", userInfo);

        // Set userInfo based on expected response structure
        setUserInfo(userInfo || "User does not exist.");
      } catch (error) {
        console.error("Error fetching user info:", error);
        setUserInfo("User does not exist."); // Default in case of error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    if (ready && wallets.length > 0) {
      getUserInfo();
    }
  }, [ready, authenticated, wallets]);

  // Determine if UserInfo indicates a missing user
  const userNotExists = UserInfo === "User does not exist." || !UserInfo;

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching user info
  }

  return (
    <div className="pr-2">
      <div className="items-center justify-center flex">
        <div className="flex xl:space-x-4">
          {authenticated && !userNotExists ? (
            <>
              <Link href="/dashboard" className="lg:flex items-center hidden">
                <div>Dashboard</div>
              </Link>
              <div className="font-thin lg:flex ml-4 mr-0 items-center hidden">|</div>
            </>
          ) : authenticated && userNotExists ? (
            <>
              <Link href="/onboard" className="lg:flex items-center hidden">
                <div>Get DID</div>
              </Link>
              <div className="font-thin lg:flex items-center ml-4 mr-0 hidden">|</div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex lg:space-x-2 items-center pr-4">
          <Link href="/free">
            <Button variant="outline" className="lg:flex items-center hidden border-none text-md"></Button>
          </Link>
          {authenticated ? (
            <Button className="hidden lg:block" onClick={logout}>
              Disconnect
            </Button>
          ) : (
            <Button className="hidden lg:block" onClick={login} disabled={disableLogin}>
              Connect
            </Button>
          )}
        </div>
      </div>

      {isDropdownVisible && (
        <div onClick={toggleDropdown} className="rounded-full xl:hidden">
          <X className="h-5 w-5 items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;
