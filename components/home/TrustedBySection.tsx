export default function TrustedBySection() {
  return (
    <section className="border-y border-black/10 bg-[#fafafa] py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 text-center text-sm text-black/60 sm:grid-cols-5 sm:px-8">
        {["NOVA Studio", "Orion Lab", "BlueMint", "Frame Agency", "Atlas Co."].map((client) => (
          <span key={client} className="font-semibold">
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}
