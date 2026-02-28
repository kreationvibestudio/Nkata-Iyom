import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { PageBanner } from "@/components/layout/PageBanner";

export const metadata = {
  title: "Board of Trustees & Board of Advisors",
  description:
    "Our leadership philosophy and members of the Board of Trustees and Board of Advisors of Nkata Ndi Inyom Igbo.",
};

const boardImages = [
  { src: "/board/dr-anne-okigbo.png", name: "Dr. Anne Okigbo", role: "Board of Trustees", bio: "Dr. Anne Okigbo brings extensive experience in leadership and development to the Board of Trustees." },
  { src: "/board/IMG-20231016-WA0014.jpg", name: "Board Member", role: "Board of Trustees", bio: "Committed to the mission of Nkata Ndi Inyom Igbo and partnering for development." },
  { src: "/board/IMG_20231019_112001_729.jpg", name: "Board Member", role: "Board of Trustees", bio: "Committed to the mission of Nkata Ndi Inyom Igbo and partnering for development." },
  { src: "/board/IMG_20231019_112018_820.jpg", name: "Board Member", role: "Board of Trustees", bio: "Committed to the mission of Nkata Ndi Inyom Igbo and partnering for development." },
  { src: "/board/IMG_20231019_112034_668.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
  { src: "/board/IMG_20231019_112048_954.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
  { src: "/board/IMG_20231019_112103_979.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
  { src: "/board/IMG_20231019_112114_822.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
  { src: "/board/IMG_20231019_112126_214.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
  { src: "/board/IMG_20231019_112134_976.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
  { src: "/board/IMG_20231019_112143_350.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
  { src: "/board/IMG_20231019_112156_833.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
  { src: "/board/IMG_20231019_112209_688.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
  { src: "/board/IMG_20231019_112220_355.jpg", name: "Board Member", role: "Board of Advisors", bio: "Providing strategic guidance and complementary experience to advance NNII's goals." },
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

      <Section variant="primary-subtle">
        <h2 className="font-display text-display-sm text-brand-900 mb-8">Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {boardImages.map((member) => (
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
                <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                  {member.role}
                </p>
                <h3 className="font-display text-lg text-brand-900 mt-1">{member.name}</h3>
                <p className="mt-2 text-sm text-brand-700 leading-relaxed flex-1">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
