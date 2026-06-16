import { lineData } from "../../data/mockData";
import { ContentCard } from "../ContentCard";

export function LineSection() {
  return (
    <div className="section-grid line-grid">
      <ContentCard className="map-card" label="01" title="Cities">
        <div className="mini-map">
          <svg viewBox="0 0 320 180" aria-hidden="true">
            <path d="M24 122 C86 58 118 152 174 82 C224 20 245 112 296 48" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 10" />
            {lineData.cities.map((city, index) => (
              <g key={city} transform={`translate(${38 + index * 62} ${index % 2 ? 96 : 64})`}>
                <circle r="7" />
                <text
                  x={index === lineData.cities.length - 1 ? -10 : 12}
                  y={index === lineData.cities.length - 1 ? -13 : 5}
                  textAnchor={index === lineData.cities.length - 1 ? "end" : "start"}
                >
                  {city}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </ContentCard>

      <ContentCard className="photo-card" label="02" title="Images">
        <div className="photo-grid">
          {lineData.photos.map((photo, index) => (
            <div className="photo-tile" key={photo}>
              <span>{photo}</span>
              <i>{String(index + 1).padStart(2, "0")}</i>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard className="issues-card" label="03" title="Issues">
        <div className="issue-list">
          {lineData.issues.map((issue) => (
            <article key={issue.title}>
              <strong>{issue.title}</strong>
              <p>{issue.text}</p>
            </article>
          ))}
        </div>
      </ContentCard>

      <ContentCard className="market-card" label="04" title="Market">
        <div className="market-list">
          {lineData.market.map(([label, text]) => (
            <div key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </ContentCard>
    </div>
  );
}
