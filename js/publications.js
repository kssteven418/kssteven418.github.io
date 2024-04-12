import { publications } from "./publicationsData.js";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("publications-container"); // Ensure you have a div with this ID in your HTML

  publications.forEach((publication) => {
    const publicationHtml = `
                <p class="text-large" style="margin-bottom:0;">
                    <a href="${publication.pdfLink}">
                        <b>${publication.title}</b></a>
                    ${Object.entries(publication.codeLinks)
                      .map(([key, url]) => `<a href="${url}">[${key}]</a>`)
                      .join(" ")}
                </p>
                <p class="text" style="margin : 0; padding-top:0;">
                    ${publication.authors}<br>
                    <i>${publication.conference}</i>
                </p>
            `;

    // Create a div to hold the publication HTML
    const div = document.createElement("div");
    div.innerHTML = publicationHtml;
    container.appendChild(div);
  });
});
