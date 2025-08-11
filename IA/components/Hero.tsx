import Link from "next/link"
import content from "../content/content.json"

export default function Hero(){
  const { heroTitle, heroSubtitle, ctaLabel, ctaLink, heroImageUrl } = content.site
  return (
    <section className="relative">
      <div className="h-[56vh] md:h-[64vh] w-full bg-cover bg-center" style={{backgroundImage: `url(${heroImageUrl})`}} />
      <div className="container -mt-24">
        <div className="card p-6 md:p-10">
          <h1 className="font-[var(--font-playfair)] text-3xl md:text-5xl leading-tight">{heroTitle}</h1>
          <p className="mt-3 text-lg muted">{heroSubtitle}</p>
          <Link href={ctaLink} className="inline-block mt-6 px-5 py-3 rounded-full bg-brand text-white hover:bg-brand-dark transition">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
