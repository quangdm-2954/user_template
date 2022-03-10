const _$ = document.querySelector.bind(document);
const _$$ = document.querySelectorAll.bind(document);

const main = {
  el: _$('#main'),
  render: function (html) {
    let r = `
      <div class="main-content" style="background-image: linear-gradient(to bottom, var(--dark), 1%, var(--light-black));">
        ${html}
      </div>
    `;

    this.el.innerHTML = r;
  }
}

const sidebar = {
  unactiveMenuItems: function () {
    _$$('.menu-item').forEach(e => {
      e.classList.remove('c-active');
    });
  }
}

const uri = {
  updateQueryStringParameter: function (cx) {
    const { key, value } = cx;
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
  }
}
