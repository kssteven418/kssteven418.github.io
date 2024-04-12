import { publications } from "./publicationsData.js";

document.addEventListener("DOMContentLoaded", function () {
  function addPublication(item) {
    const container = document.getElementById("publications-container");
    const htmlContent = `
            <div class="flex-row">
                <div class="flex-item flex-item-stretch flex-column">
                    <img class="image max-width-500" src="${item.imagePath}">
                </div>
                <div class="flex-item flex-item-stretch-3 flex-column">
                    <p class="text-large" style="margin-bottom:0;">
                        <a href="${item.pdfLink}"><b>${item.title}</b></a>
                        ${
                          item.codeLink
                            ? `<a href="${item.codeLink}">[Code]</a>`
                            : ""
                        }
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
});
