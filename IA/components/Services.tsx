import content from "../content/content.json"

export default function Services(){
  return (
    <section className="container py-14">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Servicios</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {content.services.map((s,i)=>(
          <div key={i} className="card p-6">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="mt-3 text-xl font-medium">{s.title}</h3>
            <p className="muted mt-1">{s.desc}</p>
            <p className="mt-3 font-semibold">${"{s.price.toFixed(2)}"}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
