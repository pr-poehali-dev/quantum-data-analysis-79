import Icon from "@/components/ui/icon"
import { HighlightedText } from "./HighlightedText"

const works = [
  { icon: "DoorOpen", title: "Двери и арки", desc: "Межкомнатные и входные двери, арочные проёмы из массива дерева на заказ." },
  { icon: "Sofa", title: "Мебель на заказ", desc: "Шкафы, комоды, тумбы, кухонные гарнитуры — под размеры и стиль вашего интерьера." },

]

export function Carpentry() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Столярные работы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            Лестницы — не <HighlightedText>единственное</HighlightedText>,
            <br />
            что мы делаем
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы занимаемся всеми видами столярных работ. Если задача связана с деревом — мы её выполним.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((item) => (
            <div key={item.title} className="p-8 rounded-2xl border border-border bg-background hover:shadow-md transition-shadow">
              <Icon name={item.icon} size={36} className="mb-5 text-foreground" />
              <h3 className="text-lg font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}