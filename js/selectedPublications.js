import { publications } from "./publicationsData.js";

document.addEventListener("DOMContentLoaded", function () {
  function addPublication(item) {
    const container = document.getElementById(
      "selected-publications-container"
    );
    const codeLinksHtml = Object.entries(item.codeLinks)
      .map(([key, url]) => `<a href="${url}">[${key}]</a>`)
      .join(" ");

    const htmlContent = `
            <div class="flex-row">
                <div class="flex-item flex-item-stretch flex-column">
                    <img class="image max-width-500" src="${item.imagePath}">
                </div>
                <div class="flex-item flex-item-stretch-3 flex-column">
                    <p class="text-large" style="margin-bottom:0;">
                        <a href="${item.pdfLink}"><b>${item.title}</b></a>
                        ${codeLinksHtml}
                    </p>
                    <p class="text" style="margin:0; padding-top:0;">
                        ${item.authors}<br>
                        <i>${item.conference}</i>
                    </p>
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
            ${Object.entries(publication.codeLinks)
              .map(([key, url]) => `<a href="${url}">[${key}]</a>`)
              .join(" ")}
        </p>
        <p class="text" style="margin : 0; padding-top:0;">
            ${publication.authors}<br>
            <i>${publication.conference}</i>
        </p>
    `;
    div.innerHTML = publicationHtml;
    fragment.appendChild(div);
  });
  container2.appendChild(fragment);

  // publications.forEach((publication) => {
  //   const publicationHtml = `
  //               <p class="text-large" style="margin-bottom:0;">
  //                   <a href="${publication.pdfLink}">
  //                       <b>${publication.title}</b></a>
  //                   ${Object.entries(publication.codeLinks)
  //                     .map(([key, url]) => `<a href="${url}">[${key}]</a>`)
  //                     .join(" ")}
  //               </p>
  //               <p class="text" style="margin : 0; padding-top:0;">
  //                   ${publication.authors}<br>
  //                   <i>${publication.conference}</i>
  //               </p>
  //           `;

  //   // Create a div to hold the publication HTML
  //   const div = document.createElement("div");
  //   div.innerHTML = publicationHtml;
  //   container2.appendChild(div);
  // });
});
