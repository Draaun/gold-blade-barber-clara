import MenuList from "../../components/MenuList"

export default function MenuPage(){
  return (
    <section className="min-h-[60vh]">
      <div className="container pt-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">Menú</h1>
        <p className="opacity-70 mb-6">Todos nuestros precios incluyen impuestos.</p>
      </div>
      <MenuList/>
    </section>
  )
}
