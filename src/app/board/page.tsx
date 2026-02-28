import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata = {
  title: "Board of Trustees & Board of Advisors",
  description:
    "Our leadership philosophy and members of the Board of Trustees and Board of Advisors of Nkata Ndi Inyom Igbo.",
};

const boardOfTrustees = [
  { src: "/board/IMG_20231019_112001_729.jpg", name: "Dr. Regina Amadi Njoku", title: "Chairman" },
  { src: "/board/IMG-20231016-WA0014.jpg", name: "Iyom Josephine Anenih, Esq. FNIM, mni, SCN", title: "Founder / President General" },
  { src: "/board/dr-anne-okigbo.png", name: "Dr. Anne Okigbo", title: "Board Secretary / Vice President" },
  { src: "/board/IMG_20231019_112018_820.jpg", name: "Dr. Grace Okudo, AIG", title: "Member" },
  { src: "/about/prof-joy-ezeilo-150x150-42c428f2-11b9-44dc-94b7-197dbe0c1683.png", name: "Prof. Joy Ngozi Ezeilo (SAN), OON" },
  { src: "/about/H.-E.-Prof-Uche-Azikiwe-150x150-cde06f24-cd32-4570-8487-dfa035689977.png", name: "Prof. Uche Azikiwe, MFR" },
  { src: "/about/justice-ukeje-150x150-6e4235b9-e92a-44b7-81df-c1f5b60c9838.png", name: "Hon. Justice Rose N. Ukeje, OFR" },
  { src: "/about/amb-nkem-anyawu-150x150-f0153a6e-b605-4884-bf76-76b49be3cde9.png", name: "Amb. Nkem Wadibia Anyanwu" },
];

const boardOfAdvisors = [
  { src: "/board/IMG_20231019_112134_976.jpg", name: "Prof. Barth Nnaji", title: "Chairman" },
  { src: "/board/IMG_20231019_112143_350.jpg", name: "Patrick Okigbo III" },
  { src: "/board/IMG_20231019_112156_833.jpg", name: "Agubuzu" },
  { src: "/board/IMG_20231019_112209_688.jpg", name: "Gen. Abel Obi Umahi, Rtd." },
  { src: "/board/IMG_20231019_112220_355.jpg", name: "Dike Chukwumerije" },
];

export default function BoardPage() {
  return (
    <>
      <PageBanner
        variant="about"
        title="Board of Trustees & Board of Advisors"
        description="Leadership rooted in purpose, balance, and shared responsibility."
      />

      <Section variant="muted">
        <div className="max-w-3xl min-w-0 space-y-6 text-brand-700 leading-relaxed">
          <h2 className="font-display text-display-sm text-brand-900">Our Leadership Philosophy</h2>
          <p>
            At Nkata Ndi Inyom Igbo, leadership is rooted in purpose, balance, and shared responsibility.
          </p>
          <p>
            Guided by our motto, &ldquo;Partnering for Development,&rdquo; we operate a distinctive governance style where the Board of Trustees is predominantly women, reflecting our commitment to elevating female leadership, while the Board of Advisers is composed of men, providing complementary strategic guidance and experience.
          </p>
          <p>
            This structure is not symbolic. It reflects our conviction that sustainable development is best achieved through collaboration, respect for diversity of thought, and inclusive decision-making.
          </p>
          <p>
            We are committed to shared leadership as a foundation for long-term social and economic progress. By bringing women and men together in aligned but clearly defined roles, Nkata promotes stability, accountability, and strategic continuity in all our programmes.
          </p>
          <p>
            Through this model, we demonstrate that development is strongest when leadership is balanced, intentional, and focused on collective impact.
          </p>
        </div>
      </Section>

      <Section variant="primary-subtle" id="board-of-trustees">
        <h2 className="font-display text-display-sm text-brand-900 mb-8">Board of Trustees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardOfTrustees.map((member) => (
            <article
              key={member.src}
              className="flex flex-col rounded-xl border border-brand-200/60 bg-surface overflow-hidden shadow-sm"
            >
              <div className="relative aspect-[3/4] bg-brand-100">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                {member.title && (
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    {member.title}
                  </p>
                )}
                <h3 className="font-display text-lg text-brand-900 mt-1">{member.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted" id="board-of-advisors">
        <h2 className="font-display text-display-sm text-brand-900 mb-8">Board of Advisors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {boardOfAdvisors.map((member) => (
            <article
              key={member.src}
              className="flex flex-col rounded-xl border border-brand-200/60 bg-surface overflow-hidden shadow-sm"
            >
              <div className="relative aspect-[3/4] bg-brand-100">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                {member.title && (
                  <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                    {member.title}
                  </p>
                )}
                <h3 className="font-display text-lg text-brand-900 mt-1">{member.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
