import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { AboutBanner } from "@/components/about/AboutBanner";

export const metadata = {
  title: "About Us",
  description:
    "Nkata Ndi Inyom Igbo (NNII), founded by Iyom Josephine Anenih in 2020. Our story, key pillars, membership, and how to support us. Partnering for development.",
};

export default function AboutPage() {
  return (
    <>
      <AboutBanner />

      <Section variant="muted">
        <div className="max-w-3xl space-y-6 text-brand-700 leading-relaxed">
          <p className="text-lg">
            Nkata Ndi Inyom Igbo (NNII) is an organization founded by a lawyer, socio-cultural historian, women leader, gender/civil rights activist and former Minister of Women Affairs, <strong className="text-brand-900">Iyom Josephine Anenih</strong>. Founded on the <strong className="text-brand-900">26th of August, 2020</strong> as a platform for women to return to the much-valued Igbo RoundTable Conversations, rooted in the idea that conversations from the family unit, kindred up to the larger community signpost the integrative means of getting everyone to contribute ideas, energy and resources to the development of society. Membership is open to all women of Igbo ancestry and/or marriage willing to join forces for the development of the region and indeed, the Nigerian nation as daughters, sisters, wives and mothers.
          </p>
          <p>
            The group aspires to return the society to the pristine times when both genders complemented each other politically, economically, socio-culturally and even spiritually, in ways that saw women share the burden of leadership with the men for better and more accelerated development. NNII wants to tap into both the historical and global trends that have seen women excel in their traditional, leadership and professional duties. We want to galvanize our varied ideas and strength to complement the efforts of the men to develop the region and indeed the whole country.
          </p>
          <p>
            History, both oral and written, documents for us the contributions of women in leadership in precolonial times when women’s contributions validated the plural vision of development in the society. Women had always been visible and contributed to development in ways that confirmed their natural roles as nurturers and builders. Realizing that the mono leadership of our men has become both burdensome for them as well as arrested development, NNII as a body is inspired to return our society to the good old days of shared leadership—seeing that women feel more the impact of underdevelopment in a world ruled by ideas and technology, both of which are not gender sensitive. Our women are ready to sit at the table to contribute their quota.
          </p>
          <p>
            Our motto is <strong className="text-brand-900">Partnering for Development</strong>. In these three words lie the soul of Nkata Ndi Inyom Igbo (NNII). We the women will no longer be satisfied ‘observers’ of the colonial legacy of mono-governance given the history and present realities in leadership in Africa. We realize the value of <em>Nkata</em> in Igbo cosmic history: Nkata is semantically a metaphor for communal roundtable discussion which is very inclusive and not gender sensitive but progressively beneficial. We are willing to partner, not compete, with our men. Partnership naturally comes with unobtrusive shared responsibility that is as productive as it is mutually beneficial.
          </p>
          <p>
            We, as a group, are willing and able to partner—beyond our men—with any individual, group, corporate organization or agencies in Nigeria or in the diaspora that would assist us to serve our people in a world that thrives on the shared value of our humanity. As women, we know our capacity and the impact of underdevelopment on women and children. We want to work together as a bloc that feels more the impact of the political, economic, sociocultural and even spiritual inequities, injustice and the resultant underdevelopment. On a global scale, women and girls have been battling a myriad of challenges and we at NNII wear the shoes and know where it pinches; we are well positioned through private and professional experiences to begin this hopefully unending and valued partnership with all people of goodwill around the world.
          </p>
          <p>
            We want to tap into the core values that unite our common humanity through the simple but effective tools of conversations, dialogue and community organising. NNII is all-embracing as we believe in the Igbo social mantra of <strong className="text-brand-900">‘Igwe bu ike’</strong>—in unity lies strength. We are not an elitist group as we believe that leadership and development come when every individual input is galvanised and redirected for progress and development. We equally want to reintegrate the old socio-economic values of female mentorship of the younger girls through advocacies and actual involvement in education and training for skill acquisition through the world-renowned Igbo apprenticeship scheme, where values of diligence and industry are imparted through both formal and informal ways.
          </p>
        </div>
      </Section>

      <Section variant="primary-subtle" id="pillars">
        <h2 className="font-display text-display-md text-brand-900 heading-balance mb-8">
          Our Key Pillars
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <article className="p-6 rounded-xl bg-surface border border-brand-200/60">
            <h3 className="font-display text-display-sm text-brand-900">Dialogue & Conversations</h3>
            <p className="mt-3 text-brand-700 leading-relaxed">
              At NNII, we understand the power of dialogue and conversations. We believe that open and inclusive discussions are essential for understanding diverse perspectives, fostering unity, and finding innovative solutions to complex challenges. Through meaningful dialogue, we create spaces where everyone's voice is heard, valued, and respected. It's about coming together, sharing ideas, and building consensus for positive change.
            </p>
          </article>
          <article className="p-6 rounded-xl bg-surface border border-brand-200/60">
            <h3 className="font-display text-display-sm text-brand-900">Equity</h3>
            <p className="mt-3 text-brand-700 leading-relaxed">
              Here at NNII, we are all about fairness and balance. We believe in shared gender partnership and governance where men and women contribute their quota towards sustainable development.
            </p>
          </article>
          <article className="p-6 rounded-xl bg-surface border border-brand-200/60">
            <h3 className="font-display text-display-sm text-brand-900">Empowerment</h3>
            <p className="mt-3 text-brand-700 leading-relaxed">
              Empowering women is at the heart of what we do at NNII. Through education, mentorship, and advocacy, we provide women with the tools and resources they need to realize their full potential and make meaningful contributions to society. By investing in women's empowerment, we not only transform individual lives but also drive positive change for entire communities.
            </p>
          </article>
          <article className="p-6 rounded-xl bg-surface border border-brand-200/60">
            <h3 className="font-display text-display-sm text-brand-900">Partnership</h3>
            <p className="mt-3 text-brand-700 leading-relaxed">
              We are firm believers in the power of collaboration as encapsulated in our motto, “Partnering for development.” By working together across genders and sectors, we maximize our collective impact and address the challenges facing our communities. Through shared responsibility and mutual support, we build a stronger and more resilient society for all.
            </p>
          </article>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-display-sm text-brand-900">Our Mission</h2>
            <p className="mt-3 text-brand-700 leading-relaxed">
              To empower Igbo women through cultural preservation, leadership development, and community support, ensuring their voices and wisdom shape the future of our communities.
            </p>
          </div>
          <div>
            <h2 className="font-display text-display-sm text-brand-900">Our Vision</h2>
            <p className="mt-3 text-brand-700 leading-relaxed">
              A world where Igbo women lead with confidence, culture thrives across generations, and communities are strengthened by the collective wisdom of women.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="primary-subtle" id="membership">
        <h2 className="font-display text-display-md text-brand-900 heading-balance mb-6">
          Membership
        </h2>
        <p className="text-brand-700 leading-relaxed mb-6">
          Nkata Ndi Inyom Igbo is all about equipping women and young girls to realise their full potential. An empowered woman is a force of resilience, determination and compassion, and we must collectively supply our women with all the resources they need to thrive. The importance of female participation in leadership, governance, and development cannot be over-emphasized, with the rising number of women recording success in these areas globally. To this effect, there is an urgent need for long-term and sustained support to widen the leadership space for women and to prepare our women for governance, commerce and decision-making positions.
        </p>
        <p className="text-brand-700 font-medium mb-2">Membership is available to:</p>
        <ul className="list-disc list-inside text-brand-700 space-y-1">
          <li>Females aged 18 and above</li>
          <li>Those who have the empowerment of women and gender equality at heart</li>
          <li>Those interested in and aligned with the mission and vision of NNII</li>
        </ul>
        <div className="mt-8">
          <ButtonLink href="/contact">Join or Inquire</ButtonLink>
        </div>
      </Section>

      <Section variant="muted" id="donate">
        <h2 className="font-display text-display-md text-brand-900 heading-balance mb-6">
          Support Us
        </h2>
        <p className="text-brand-700 leading-relaxed mb-8 max-w-2xl">
          Kindly deposit your donations into the following account. Your support helps us equip women and young girls to realise their full potential and widen the leadership space for women.
        </p>
        <div className="rounded-xl border border-brand-200 bg-primary-50/50 p-6 max-w-md">
          <p className="text-sm font-medium text-brand-600 uppercase tracking-wider mb-4">Bank details</p>
          <dl className="space-y-2 text-brand-800">
            <div>
              <dt className="text-sm text-brand-600">Account Name</dt>
              <dd className="font-medium">Nkata Ndi Inyom Igbo Foundation</dd>
            </div>
            <div>
              <dt className="text-sm text-brand-600">Account Number</dt>
              <dd className="font-medium font-mono">1024346943</dd>
            </div>
            <div>
              <dt className="text-sm text-brand-600">Bank</dt>
              <dd className="font-medium">UBA Plc.</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section variant="primary-subtle">
        <div className="text-center">
          <p className="text-brand-700 mb-6">Ready to join or learn more?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact">Contact Us</ButtonLink>
            <ButtonLink href="/offerings" variant="outline">Our Offerings</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
