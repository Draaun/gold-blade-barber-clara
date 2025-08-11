import content from "../content/content.json"

export default function MenuList(){
  return (
    <div className="container py-12">
      {content.menu.sections.map((sec, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{sec.name}</h2>
          <ul className="divide-y">
            {sec.items.map((it: any, idx: number) => (
              <li key={idx} className="py-3 flex items-start justify-between">
                <div>
                  <p className="font-medium">{it.name}</p>
                  <p className="text-sm opacity-70">{it.desc}</p>
                </div>
                <span className="font-semibold">${"{it.price.toFixed(2)}"}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
