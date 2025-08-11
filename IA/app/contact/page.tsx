import ContactCard from "../../components/ContactCard"
import content from "../../content/content.json"

export default function ContactPage(){
  return (
    <section className="container py-12 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Reserva o escríbenos</h1>
        <form className="card p-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
          <input className="w-full border rounded-xl px-4 py-3" placeholder="Nombre" required/>
          <input className="w-full border rounded-xl px-4 py-3" placeholder="Email" type="email" required/>
          <textarea className="w-full border rounded-xl px-4 py-3 min-h-32" placeholder="Mensaje"></textarea>
          <button className="px-5 py-3 rounded-full bg-brand text-white hover:bg-brand-dark transition" type="submit">
            Enviar
          </button>
        </form>
      </div>
      <div className="space-y-6">
        <ContactCard/>
        <iframe
          className="w-full h-64 rounded-2xl border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={content.contact.mapEmbed}>
        </iframe>
      </div>
    </section>
  )
}
