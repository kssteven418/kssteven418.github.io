import { publications } from "./publicationsData.js?v=20260925-2";

const renderPublications = () => {
  const container = document.getElementById("publications-container");
  if (!container) return;

  // Keep the renderer idempotent when a preview tool restores a cached page.
  container.replaceChildren();

  const getYear = (publication) =>
    publication.conference.match(/\b(?:19|20)\d{2}\b/)?.[0] ?? "Other";

  const years = [...new Set(publications.map(getYear))];

  const highlightAuthorName = (authors) =>
    authors.replace(
      /<b>(Sehoon Kim\*?)<\/b>|(Sehoon Kim\*?)/g,
      (_, boldName, plainName) =>
        `<strong class="publication-author-name">${boldName || plainName}</strong>`
    );

  const renderLinks = (publication) => {
    const links = [
      ["Paper", publication.pdfLink],
      ...Object.entries(publication.codeLinks),
    ];

    return links
      .map(
        ([label, url]) =>
          `<a class="publication-link" href="${url}" target="_blank" rel="noopener">${label}<span aria-hidden="true">↗</span></a>`
      )
      .join("");
  };

  const fragment = document.createDocumentFragment();

  years.forEach((year) => {
    const yearGroup = document.createElement("section");
    yearGroup.className = "year-group";
    yearGroup.setAttribute("aria-labelledby", `publication-year-${year}`);

    const yearHeading = document.createElement("h3");
    yearHeading.id = `publication-year-${year}`;
    yearHeading.textContent = year;
    yearGroup.appendChild(yearHeading);

    const publicationList = document.createElement("div");
    publicationList.className = "publication-list";

    publications
      .filter((publication) => getYear(publication) === year)
      .forEach((publication) => {
        const article = document.createElement("article");
        article.className = "publication-row";
        article.innerHTML = `
          <div class="publication-main">
            <h4>${publication.title}</h4>
            <p>${highlightAuthorName(publication.authors)}</p>
          </div>
          <div class="publication-meta">
            <span>${publication.conference}</span>
            <div class="publication-links">${renderLinks(publication)}</div>
          </div>
        `;
        publicationList.appendChild(article);
      });

    yearGroup.appendChild(publicationList);
    fragment.appendChild(yearGroup);
  });

  const note = document.createElement("p");
  note.className = "publication-note";
  note.textContent = "* indicates equal contribution.";
  fragment.appendChild(note);

  container.appendChild(fragment);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderPublications, { once: true });
} else {
  renderPublications();
}
