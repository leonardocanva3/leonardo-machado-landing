type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="text-[15px] font-semibold tracking-[0.28em] text-sky-100 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[clamp(2rem,4.6vw,3.2rem)] font-semibold tracking-tight text-white">
        {title}
      </h2>
      <p className="mt-5 text-[17px] leading-8 text-slate-200 sm:text-[19px]">
        {description}
      </p>
    </div>
  );
}
