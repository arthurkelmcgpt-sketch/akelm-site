import { Network, Code, Cloud, Cpu } from "lucide-react";

const solutions = [
  {
    icon: Network,
    title: "Gestão de Redes",
    link: "#redes",
    description:
      "Gestão de redes para empresas em Caçapava do Sul e região, com monitoramento, infraestrutura e suporte técnico especializado para manter estabilidade, segurança e desempenho.",
  },
  {
    icon: Code,
    title: "Desenvolvimento de Sistemas",
    link: "#sistemas",
    description:
      "Desenvolvimento de sistemas sob medida para automatizar processos, digitalizar operações empresariais e criar fluxos mais eficientes.",
  },
  {
    icon: Cloud,
    title: "Plataformas SaaS",
    link: "#saas",
    description:
      "Plataformas SaaS escaláveis para empresas, com foco em multiusuários, cloud, alta disponibilidade e crescimento sustentável.",
  },
  {
    icon: Cpu,
    title: "Sistemas Dedicados",
    link: "#dedicados",
    description:
      "Software corporativo desenvolvido especificamente para atender demandas exclusivas de cada empresa, com fluxos personalizados.",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="w-full bg-[#F3F4F6] py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2
          className="text-4xl font-bold tracking-tight text-[#111827] md:text-5xl"
          data-reveal
          data-reveal-delay={40}
          data-reveal-origin="up"
        >
          Soluções tecnológicas para empresas
        </h2>

        <p
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-600"
          data-reveal
          data-reveal-delay={100}
          data-reveal-origin="up"
        >
          A Akelm Tecnologia atua com gestão de redes, desenvolvimento de
          sistemas, plataformas SaaS e sistemas dedicados para empresas que
          precisam de soluções em T.I claras, estáveis e sob medida.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.link}
                className="group block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                data-reveal
                data-reveal-delay={140 + index * 70}
                data-reveal-origin={index % 2 === 0 ? "left" : "right"}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 transition group-hover:bg-red-100">
                    <Icon className="text-[#EF4444]" size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#111827]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-5 text-left leading-relaxed text-gray-600">
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
