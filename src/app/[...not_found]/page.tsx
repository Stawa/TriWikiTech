import dynamic from "next/dynamic";

const NotFound = dynamic(() => import("@default/app/[...not_found]/404"), {
  ssr: false,
});

export default function NotFoundCatchAll() {
  return <NotFound />;
}
