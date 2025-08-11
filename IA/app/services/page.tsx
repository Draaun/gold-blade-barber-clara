import Services from "../../components/Services"

export default function ServicesPage(){
  return (
    <section className="min-h-[60vh]">
      <div className="container pt-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Servicios & Precios</h1>
        <p className="muted mb-6">Charlote, NC · Atención con cita previa</p>
      </div>
      <Services/>
    </section>
  )
}
