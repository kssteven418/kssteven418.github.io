import { publications } from "./publicationsData.js";

document.addEventListener("DOMContentLoaded", function () {
  function addPublication(item) {
    const container = document.getElementById(
      "selected-publications-container"
    );
    const codeLinksButton = Object.entries(item.codeLinks)
      .map(
        ([key, url]) =>
          `<a class="btn btn-outline-primary btn-page-header" href="${url}" target="_blank" rel="noopener">${key}</a>`
      )
      .join("\n");

    const htmlContent = `
            <div class="flex-row">
                <div class="flex-item flex-item-stretch flex-column">
                    <img class="image max-width-500" src="${item.imagePath}">
                </div>
                <div class="flex-item flex-item-stretch-3 flex-column">
                    <p class="text-large" style="margin-bottom:0;">
                        <a href="${item.pdfLink}"><b>${item.title}</b></a>
                    </p>
                    <p class="text" style="margin:0; padding-top:0; font-size:11pt">
                        ${item.authors}<br>
                    </p>
                    <p class="text" style="margin:0; padding-top:0;">
                        ${item.conference}
                    </p>
                    <div class="button-container">
                        ${codeLinksButton}
                    </div>

                </div>
            </div>
            <div><p class="text"></p></div>
            <div><p class="text"></p></div>
        `;
    container.innerHTML += htmlContent;
  }

  publications.filter((pub) => pub.selected).forEach(addPublication);

  const container2 = document.getElementById("publications-container"); // Ensure you have a div with this ID in your HTML
  const fragment = document.createDocumentFragment();
  publications.forEach((publication) => {
    const div = document.createElement("div");
    const publicationHtml = `
        <p class="text-large" style="margin-bottom:0;">
            <a href="${publication.pdfLink}">
                <b>${publication.title}</b></a>
        </p>
        <p class="text" style="margin:0; padding-top:0; font-size:11pt">
            ${publication.authors}<br>
        </p>
        <p class="text" style="margin:0; padding-top:0;">
            ${publication.conference}
        </p>
        ${Object.entries(publication.codeLinks)
          .map(
            ([key, url]) =>
              `<a class="btn btn-outline-primary btn-page-header" href="${url}" target="_blank" rel="noopener">${key}</a>`
          )
          .join("\n")}

    `;
    div.innerHTML = publicationHtml;
    fragment.appendChild(div);
  });
  container2.appendChild(fragment);
});
