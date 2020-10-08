const setupGuides = (guides) => {
  if (guides.length) {
    let html = ``;
    let i = 0;
    guides.forEach((guide) => {
      console.log(i);
      const card = `
        <div class="card">
          <div class="card-header">
            <h2 class="mb-0">
              <button
                class="btn btn-block text-left"
                type="button" 
                data-toggle="collapse"
                data-target="#collapse${i}"
                aria-expanded="true"
                aria-controls="collapse${i}"
              >
                ${guide.data().title}
              </button>
            </h2>
          </div>

          <div
            id="collapse${i}"
            class="collapse"
            data-parent="#accordionParent"
          >
            <div class="card-body">
              ${guide.data().content}
            </div>
          </div>
        </div>
  `;

      html += card;
      i++;
    });

    renderGuidz(html);
  } else {
    renderGuidz(
      `<h4 class="text-center text-muted">Login to view the guides</h4>`
    );
  }
};

const renderGuidz = (htmlTemplate) => {
  const guidzWrapper = document.querySelector("#accordionParent");
  guidzWrapper.innerHTML = htmlTemplate;
};
