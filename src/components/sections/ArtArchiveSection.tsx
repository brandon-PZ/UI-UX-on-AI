import { archiveData } from "../../data/mockData";
import { ContentCard } from "../ContentCard";
import { RecordPlayer } from "../RecordPlayer";

export function ArtArchiveSection() {
  return (
    <div className="section-grid archive-grid">
      <ContentCard className="songs-card" label="01" title="Recently loved songs">
        <ol className="song-list">
          {archiveData.songs.map(([title, artist], index) => (
            <li key={title}>
              <span className="cover-token">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <strong>{title}</strong>
                <small>{artist}</small>
              </span>
            </li>
          ))}
        </ol>
      </ContentCard>

      <ContentCard className="books-card" label="02" title="Favorite books">
        <div className="book-stack">
          {archiveData.books.map((book) => (
            <div className="book-card" key={book.title}>
              <span>{book.author}</span>
              <strong>{book.title}</strong>
              <p>{book.note}</p>
            </div>
          ))}
        </div>
      </ContentCard>

      <ContentCard className="quotes-card" label="03" title="Quotes">
        {archiveData.quotes.map((quote) => (
          <blockquote key={quote.source}>
            <p>{quote.quote}</p>
            <cite>{quote.source} · {quote.comment}</cite>
          </blockquote>
        ))}
      </ContentCard>

      <ContentCard className="film-card" label="04" title="Film frames">
        <div className="film-frame-grid">
          {archiveData.frames.map((frame, index) => (
            <div className="film-frame" key={frame}>
              <span>{frame}</span>
              <i>{index + 1}</i>
            </div>
          ))}
        </div>
      </ContentCard>

      <RecordPlayer />
    </div>
  );
}
