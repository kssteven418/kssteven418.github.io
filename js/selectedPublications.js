import { publications } from "./publicationsData.js";

document.addEventListener("DOMContentLoaded", () => {
  const allPublications = document.getElementById("publications-container");
  const selectedPublications = document.getElementById(
    "selected-publications-container"
  );

  if (!allPublications || !selectedPublications) return;

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

  const publicationFragment = document.createDocumentFragment();

  publications.forEach((publication, index) => {
    const article = document.createElement("article");
    article.className = "publication-row";
    article.innerHTML = `
      <div class="publication-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>
      <div class="publication-main">
        <h3><a href="${publication.pdfLink}" target="_blank" rel="noopener">${publication.title}</a></h3>
        <p>${highlightAuthorName(publication.authors)}</p>
      </div>
      <div class="publication-meta">
        <p>${publication.conference}</p>
        <div class="publication-links">${renderLinks(publication)}</div>
      </div>
    `;
    publicationFragment.appendChild(article);
  });

  allPublications.appendChild(publicationFragment);

  const selectedFragment = document.createDocumentFragment();

  publications
    .filter((publication) => publication.selected)
    .forEach((publication) => {
      const article = document.createElement("article");
      article.className = "selected-card";
      article.innerHTML = `
        <img src="${publication.imagePath}" alt="" loading="lazy">
        <div class="selected-card-copy">
          <h3><a href="${publication.pdfLink}" target="_blank" rel="noopener">${publication.title}</a></h3>
          <p>${highlightAuthorName(publication.authors)}</p>
          <p class="selected-card-venue">${publication.conference}</p>
          <div class="publication-links">${renderLinks(publication)}</div>
        </div>
      `;
      selectedFragment.appendChild(article);
    });

  selectedPublications.appendChild(selectedFragment);
});
