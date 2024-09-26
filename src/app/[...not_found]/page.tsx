import dynamic from "next/dynamic";

const NotFound = dynamic(() => import("@app/[...not_found]/404"), {
  ssr: false,
});

export default function NotFoundCatchAll() {
  return <NotFound />;
}
