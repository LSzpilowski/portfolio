export function FooterCTA() {
  return (
    <div className="flex flex-col items-center justify-center lg:w-1/2">
      <div className="flex flex-col gap-6 pt-4">
        <h2 className="text-4xl md:text-8xl font-bold tracking-tight leading-none">
          Let&apos;s work<br />together
        </h2>
        <p className="text-foreground/60 max-w-sm leading-relaxed text-lg">
          I&apos;m currently open to frontend opportunities – product teams,
          SaaS platforms, and content-driven applications.
        </p>
        <div className="flex items-center gap-6 pt-2">
          <a
            href="mailto:lszpilowski@gmail.com"
            className="btn-fill text-xl font-medium px-5 py-2 rounded-md border border-foreground/20 text-foreground/70 transition-colors duration-300"
          >
            Get in touch
          </a>
          <a
            href="/LS_CV.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="text-md font-bold uppercase tracking-widest text-foreground/50 underline-ltr hover:text-foreground transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
