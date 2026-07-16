import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Ups!</h1>
      {isRouteErrorResponse(error) ? (
        <p>
          {error.status} – {error.statusText}
        </p>
      ) : (
        <p>Da ist etwas schiefgelaufen.</p>
      )}
    </div>
  );
}
