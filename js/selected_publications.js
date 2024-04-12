document.addEventListener("DOMContentLoaded", function () {
  const publications = [
    {
      imagePath: "img/thumbnails/llmcompiler.png",
      title: "An LLM Compiler for Parallel Function Calling",
      pdfLink: "https://arxiv.org/pdf/2312.04511.pdf",
      codeLink: "https://github.com/SqueezeAILab/LLMCompiler",
      authors:
        "<b>Sehoon Kim*</b>, Suhong Moon*, Ryan Tabrizi, Nicholas Lee, Michael W. Mahoney, Kurt Keutzer, Amir Gholami",
      conference: "Preprint, 2023",
    },
    {
      imagePath: "img/thumbnails/sqllm.png",
      title: "SqueezeLLM: Dense-and-Sparse Quantization",
      pdfLink: "https://arxiv.org/pdf/2306.07629.pdf",
      codeLink: "https://github.com/SqueezeAILab/SqueezeLLM",
      authors:
        "<b>Sehoon Kim*</b>, Coleman Hooper*, Amir Gholami*, Zhen Dong, Xiuyu Li, Sheng Shen, Michael W. Mahoney, Kurt Keutzer",
      conference: "Preprint, 2023",
    },
    {
      imagePath: "img/thumbnails/bild.png",
      title: "Speculative Decoding with Big Little Decoder",
      pdfLink: "https://arxiv.org/pdf/2302.07863.pdf",
      codeLink: "https://github.com/kssteven418/BigLittleDecoder",
      authors:
        "<b>Sehoon Kim</b>, Karttikeya Mangalam, Suhong Moon, Jitendra Malik, Michael W. Mahoney, Amir Gholami, Kurt Keutzer",
      conference:
        "Conference on Neural Information Processing Systems (NeurIPS), 2023",
    },
    {
      imagePath: "img/thumbnails/sqfm.png",
      title:
        "Squeezeformer: An Efficient Transformer for Automatic Speech Recognition",
      pdfLink: "https://arxiv.org/pdf/2206.00888.pdf",
      codeLink: "https://github.com/kssteven418/Squeezeformer",
      authors:
        "<b>Sehoon Kim*</b>, Amir Gholami*, Albert Shaw†, Nicholas Lee†, Karttikeya Mangalam, Jitendra Malik, Michael W. Mahoney, Kurt Keutzer",
      conference:
        "Conference on Neural Information Processing Systems (NeurIPS), 2022",
    },
    {
      imagePath: "img/thumbnails/ptp.png",
      title: "A Fast Post-Training Pruning Framework for Transformers",
      pdfLink: "https://arxiv.org/pdf/2204.09656.pdf",
      codeLink: "https://github.com/WoosukKwon/retraining-free-pruning",
      authors:
        "Woosuk Kwon*, <b>Sehoon Kim*</b>, Michael W. Mahoney, Joseph Hassoun, Kurt Keutzer, Amir Gholami",
      conference:
        "Conference on Neural Information Processing Systems (NeurIPS), 2022",
    },
    {
      imagePath: "img/thumbnails/ltp.png",
      title: "Learned Token Pruning for Transformers",
      pdfLink: "https://arxiv.org/pdf/2107.00910.pdf",
      codeLink: "https://github.com/kssteven418/LTP",
      authors:
        "<b>Sehoon Kim*</b>, Sheng Shen*, David Thorsley*, Amir Gholami*, Woosuk Kwon, Joseph Hassoun, Kurt Keutzer",
      conference:
        "Conference on Knowledge Discovery and Data Mining (KDD), 2022",
    },
    {
      imagePath: "img/thumbnails/q-asr.png",
      title:
        "Integer-only Zero-shot Quantization for Efficient Speech Recognition",
      pdfLink: "https://arxiv.org/pdf/2103.16827.pdf",
      codeLink: "https://github.com/kssteven418/Q-ASR",
      authors:
        "<b>Sehoon Kim</b>, Amir Gholami, Zhewei Yao, Nicholas Lee, Patrick Wang, Anirudda Nrusimha, Bohan Zhai, Tianren Gao, Michael W. Mahoney, Kurt Keutzer",
      conference:
        "International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2022",
    },
    {
      imagePath: "img/thumbnails/i-bert.png",
      title: "I-BERT: Integer-only BERT Quantization",
      pdfLink: "http://proceedings.mlr.press/v139/kim21d/kim21d.pdf",
      codeLink: "https://github.com/kssteven418/I-BERT",
      authors:
        "<b>Sehoon Kim*</b>, Amir Gholami*, Zhewei Yao*, Michael W. Mahoney, Kurt Keutzer",
      conference:
        "International Conference on Machine Learning (ICML, <b>Oral</b>), 2021",
    },
    // Add more entries as needed
  ];

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

  publications.forEach(addPublication);
});
