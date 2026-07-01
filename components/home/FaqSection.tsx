import { faqs } from "./data";

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-8 sm:py-20">
      <h3 className="text-3xl font-black uppercase sm:text-5xl">FAQ</h3>
      <div className="mt-8 divide-y divide-black/15 border-y border-black/15">
        {faqs.map((question) => (
          <details key={question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold sm:text-base">
              {question}
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 text-lg transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm text-black/70">
              Project timelines and delivery depend on project complexity, but each engagement includes clear phases,
              communication updates, and quality assurance from start to launch.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
