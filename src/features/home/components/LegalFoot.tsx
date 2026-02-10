import { Link } from "react-router-dom";
import { LEGAL_CONTENT } from "../data/legalfoot.data";

const LegalFoot = () => {
  const renderSegments = (segments: typeof LEGAL_CONTENT.column1[0]['segments']) => {
    return segments.map((segment, index) => {
      if (segment.link) {
        return (
          <Link
            key={index}
            to={segment.link}
            className="text-foreground underline decoration-muted/40 hover:text-brand hover:decoration-brand transition-colors"
          >
            {segment.text}
          </Link>
        );
      }
      return <span key={index}>{segment.text}</span>;
    });
  };

  return (
    <aside
      aria-label="Notas legales"
      className="w-full bg-background px-6 md:px-12 border-t border-surface py-8 md:py-12 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-xs leading-relaxed text-muted">
        <div className="text-justify space-y-2">
          {LEGAL_CONTENT.column1.map((item) => (
            <p key={item.id}>
              {renderSegments(item.segments)}
            </p>
          ))}
        </div>

        <div className="text-justify space-y-2">
          {LEGAL_CONTENT.column2.map((item) => (
            <p key={item.id}>
              {renderSegments(item.segments)}
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default LegalFoot;