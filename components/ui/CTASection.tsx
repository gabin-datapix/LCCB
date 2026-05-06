import AnimatedReveal from "./AnimatedReveal";
import Button from "./Button";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  centered?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  primaryCta = { label: "Demander une étude", href: "/contact" },
  secondaryCta,
  dark = true,
  centered = true,
}: CTASectionProps) {
  const bg = dark ? "bg-[#1F3A2E]" : "bg-[#F5F1EA]";
  const textColor = dark ? "text-[#F5F1EA]" : "text-[#111111]";
  const subColor = dark ? "text-[#A7B89A]" : "text-[#8A8378]";
  const align = centered ? "text-center items-center" : "text-left items-start";

  return (
    <section className={`${bg} py-28 px-6`}>
      <div className={`max-w-3xl mx-auto flex flex-col ${align} gap-8`}>
        <AnimatedReveal>
          <h2 className={`font-serif text-display-md leading-tight ${textColor} ${centered ? "text-center" : ""}`}>
            {title}
          </h2>
        </AnimatedReveal>

        {subtitle && (
          <AnimatedReveal delay={0.1}>
            <p className={`text-base leading-relaxed font-sans ${subColor} ${centered ? "text-center" : ""} max-w-xl`}>
              {subtitle}
            </p>
          </AnimatedReveal>
        )}

        <AnimatedReveal delay={0.2}>
          <div className={`flex flex-wrap gap-4 ${centered ? "justify-center" : ""}`}>
            {dark ? (
              <>
                <Button
                  href={primaryCta.href}
                  size="lg"
                  className="bg-[#B8793E] hover:bg-[#F5F1EA] hover:text-[#111111]"
                >
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="secondary"
                    size="lg"
                    className="border-[#F5F1EA]/40 text-[#F5F1EA] hover:bg-[#F5F1EA] hover:text-[#111111] hover:border-[#F5F1EA]"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </>
            ) : (
              <>
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="secondary" size="lg">
                    {secondaryCta.label}
                  </Button>
                )}
              </>
            )}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
