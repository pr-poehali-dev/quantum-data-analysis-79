import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const expertiseAreas = [
  {
    title: "Лестницы из массива",
    description: "Маршевые, винтовые, на больцах — изготавливаем любые конструкции из дуба, ясеня, бука и сосны. Срок службы — десятилетия.",
    iconName: "Stairs",
  },
  {
    title: "Столярные изделия",
    description:
      "Двери, перила, балясины, подоконники, мебель на заказ. Всё из натурального дерева, с обработкой маслами или лаками.",
    iconName: "Hammer",
  },
  {
    title: "Замер и проектирование",
    description:
      "Выезжаем на объект, снимаем точные замеры, разрабатываем 3D-эскиз. Вы видите результат ещё до начала работ.",
    iconName: "Ruler",
  },
  {
    title: "Монтаж и гарантия",
    description:
      "Устанавливаем силами собственной бригады. Даём гарантию на все работы и материалы. После сдачи — поддержка при необходимости.",
    iconName: "ShieldCheck",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Услуги</HighlightedText>, проверенные
            <br />
            годами
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Более 10 лет изготавливаем деревянные лестницы и столярные изделия. Каждый проект — от замера до монтажа — под ключ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`relative pl-8 border-l border-border transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`transition-all duration-1000 ${
                  visibleItems.includes(index) ? "animate-draw-stroke" : ""
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <Icon name={area.iconName} size={40} className="mb-4 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-4">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}