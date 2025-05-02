export default function CarouselPage() {
  return (
    <main className="min-h-screen grid place-items-center">
      <div className="h-64 w-64 bg-black overflow-x-scroll overflow-y-hidden grid place-items-center">
        <div className="flex justify-center items-center w-fit h-fit">
          <article className="h-64 grid place-items-center w-64 bg-amber-300">
            Text One
          </article>
          <article className="h-64 grid place-items-center w-64 bg-green-300">
            Text Two
          </article>
          <article className="h-64 grid place-items-center w-64 bg-sky-300">
            Tex Three
          </article>
        </div>
      </div>
    </main>
  );
}
