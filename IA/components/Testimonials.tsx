import content from "../content/content.json"

export default function Testimonials(){
  return (
    <section className="container py-14">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonios</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {content.testimonials.map((t,i)=>(
          <div key={i} className="card p-6">
            <p className="italic">“{t.quote}”</p>
            <p className="mt-3 font-semibold">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
