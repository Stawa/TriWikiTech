import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

interface AuthorInfoProps {
  date: string;
  title: string;
}

const AuthorInfo = ({ date, title }: AuthorInfoProps) => (
  <header className="not-prose mb-8 sm:mb-12 lg:mb-20 xl:mb-24 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500">
      {title}
    </h1>
    <div className="flex flex-col items-center mt-1 sm:mt-2 lg:mt-3 xl:mt-4">
      <div className="flex flex-row items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-5 text-sm sm:text-base lg:text-lg xl:text-xl">
        <Image
          src="https://avatars.githubusercontent.com/u/69102292?v=4"
          alt="author"
          width={460}
          height={460}
          className="rounded-full h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 xl:h-9 xl:w-9"
          quality={100}
          priority
        />
        <div className="flex flex-row items-center gap-1 sm:gap-2 lg:gap-3 xl:gap-4">
          <Link
            href="https://github.com/Stawa"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition-colors duration-300 font-semibold"
            target="_blank"
          >
            Stawa
          </Link>
          <span className="text-gray-600 dark:text-gray-400">•</span>
          <time
            dateTime={date}
            title={`Written on ${date}`}
            className="text-gray-600 dark:text-gray-400"
          >
            {new Date(date).toLocaleDateString(useLocale(), {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
    </div>
  </header>
);

export { AuthorInfo, type AuthorInfoProps };
