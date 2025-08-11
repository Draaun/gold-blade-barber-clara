import content from "../content/content.json"

export default function ContactCard(){
  const c = content.contact
  return (
    <div className="card p-6 space-y-2">
      <h3 className="text-xl font-semibold">Contacto</h3>
      <p>📞 {c.phone}</p>
      <p>✉️ {c.email}</p>
      <p>📍 {c.address}</p>
      <a href={c.whatsapp} className="inline-block mt-2 text-brand underline">Reservar por WhatsApp</a>
    </div>
  )
}
