import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Из каких пород дерева вы делаете лестницы?",
    answer:
      "Работаем с дубом, ясенем, буком, сосной и лиственницей. Дуб и ясень — самые популярные: прочные, красивые, хорошо поддаются обработке. Сосна — более доступный вариант. Поможем подобрать породу под ваш бюджет и стиль интерьера.",
  },
  {
    question: "Сколько времени занимает изготовление лестницы?",
    answer:
      "В среднем от 3 до 6 недель с момента утверждения проекта. Сроки зависят от сложности конструкции и загруженности мастерской. Мы всегда оговариваем точные даты в договоре и строго их соблюдаем.",
  },
  {
    question: "Вы работаете под ключ или только изготавливаете?",
    answer:
      "Работаем полностью под ключ: замер, проектирование, изготовление и монтаж. Также возможно только изготовление по готовым чертежам, если у вас есть свои монтажники.",
  },
  {
    question: "Какие конструкции лестниц вы делаете?",
    answer:
      "Изготавливаем маршевые (прямые и поворотные), винтовые, на больцах, консольные лестницы. Также делаем перила, балясины, ступени для замены в существующих конструкциях.",
  },
  {
    question: "Даёте ли вы гарантию на работу?",
    answer:
      "Да, даём гарантию 2 года на все работы и материалы. Если в гарантийный период что-то потребует коррекции — приедем и устраним за свой счёт.",
  },
  {
    question: "Как начать работу с вами?",
    answer:
      "Напишите или позвоните нам. Мы согласуем время выезда мастера на замер, разработаем эскиз и рассчитаем стоимость. Первичная консультация и замер — бесплатно.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}