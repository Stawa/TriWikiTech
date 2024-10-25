import { LoginTranslations } from "~/types/auth";

interface LoginImageProps {
  translations: LoginTranslations;
}

const LoginImage = ({ translations }: LoginImageProps) => (
  <div className="hidden lg:flex w-full lg:w-1/2 relative overflow-hidden rounded-r-2xl">
    <div className="w-full h-full flex items-center justify-center">
      <img
        src="https://dummyimage.com/4000x4000/000000/ffffff.jpg&text=Sample+Image+Feature+TriWikiTech"
        alt={translations.title}
        className="w-full h-full object-fit"
      />
    </div>
  </div>
);

export default LoginImage;
