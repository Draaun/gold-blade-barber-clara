import content from "../content/content.json"

export default function Gallery(){
  return (
    <section className="container py-14">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Galería</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {content.gallery.map((g,i)=>(
          <div key={i} className="card overflow-hidden">
            <img src={g.src} alt={g.alt} className="w-full h-48 object-cover"/>
            <div className="p-3 text-sm muted">{g.alt}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
