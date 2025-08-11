import content from "../../content/content.json"

export default function AboutPage(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Nosotros</h1>
      <h2 className="text-xl font-semibold mb-2">{content.about.title}</h2>
      <p className="max-w-3xl text-lg">{content.about.body}</p>
    </section>
  )
}
