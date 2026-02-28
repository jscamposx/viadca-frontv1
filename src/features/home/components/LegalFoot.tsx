import { Link } from "react-router-dom";
import { LEGAL_CONTENT, LEGAL_FOOTER_UI } from "../data/legalfoot.data";

type LegalSegment = { text: string; link?: string };

const Segments = ({ segments }: { segments: LegalSegment[] }) => (
  <>
    {segments.map((segment) =>
      segment.link ? (
        <Link
          key={segment.text}
          to={segment.link}
          className="text-foreground underline decoration-muted/40 hover:text-brand hover:decoration-brand transition-colors"
        >
          {segment.text}
        </Link>
      ) : (
        <span key={segment.text}>{segment.text}</span>
      )
    )}
  </>
);

const LegalFoot = () => {
  return (
    <aside
      aria-label={LEGAL_FOOTER_UI.ariaLabel}
      className="w-full bg-background px-6 md:px-12 border-t border-surface py-8 md:py-12 transition-colors duration-300"
    >
      <div className="max-w-315 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-xs leading-relaxed text-muted">
        <div className="text-justify space-y-2">
          {LEGAL_CONTENT.column1.map((item) => (
            <p key={item.id}>
              <Segments segments={item.segments} />
            </p>
          ))}
        </div>

        <div className="text-justify space-y-2">
          {LEGAL_CONTENT.column2.map((item) => (
            <p key={item.id}>
              <Segments segments={item.segments} />
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default LegalFoot;
