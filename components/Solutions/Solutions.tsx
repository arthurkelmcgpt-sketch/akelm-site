import { Network, Code, Cloud, Cpu } from "lucide-react";

const solutions = [
  {
    icon: Network,
    title: "Gestão de Redes",
    link: "#redes",
    description:
      "Monitoramento, infraestrutura e suporte técnico especializado para empresas que dependem de redes estáveis.",
  },
  {
    icon: Code,
    title: "Desenvolvimento de Sistemas",
    link: "#sistemas",
    description:
      "Criação de sistemas sob medida para automação de processos e digitalização de operações empresariais.",
  },
  {
    icon: Cloud,
    title: "Plataformas SaaS",
    link: "#saas",
    description:
      "Desenvolvimento de plataformas web escaláveis com foco em multiusuários, cloud e alta disponibilidade.",
  },
  {
    icon: Cpu,
    title: "Sistemas Dedicados",
    link: "#dedicados",
    description:
      "Software corporativo desenvolvido especificamente para atender demandas exclusivas de cada empresa.",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="w-full py-28 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
          Soluções tecnológicas para empresas
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          A Akelm Tecnologia atua no desenvolvimento de sistemas,
          plataformas SaaS e gestão de infraestrutura de redes,
          oferecendo soluções completas para empresas.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                className="group block bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-50 group-hover:bg-red-100 transition">
                    <Icon className="text-[#EF4444]" size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#111827]">
                    {item.title}
                  </h3>

                </div>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  {item.description}
                </p>

              </a>
            );
          })}

        </div>

      </div>
    </section>
  );
}