"use client";

import { type User } from "@components/user";
import Image from "next/image";

const ProfileImage = (user: User) => {
  return (
    <>
      {user.image ? (
        <Image
          src={user.image}
          alt={user.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-full object-cover border-4 border-white shadow-xl"
          quality={100}
        />
      ) : (
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold rounded-full object-cover border-4 border-white shadow-xl [.w-24.h-24.relative_&]:text-xl [.w-24.h-24.relative_&]:sm:text-2xl [.w-24.h-24.relative_&]:md:text-3xl [.w-24.h-24.relative_&]:lg:text-4xl">
          {getInitials(user.name)}
        </div>
      )}
    </>
  );
};

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join("");
};

export default ProfileImage;
