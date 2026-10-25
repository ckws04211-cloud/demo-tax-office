export default function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <section className="bg-navy-900 pb-16 pt-32 text-white md:pb-20 md:pt-40">
      <div className="container-x">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h1>
        {desc && <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">{desc}</p>}
      </div>
    </section>
  );
}
