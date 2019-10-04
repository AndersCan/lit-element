import { html, LitElement } from '../../index.mjs';

export class SomeElement extends LitElement {
  constructor() {
    super();
    throw Error('no construct');
  }

  render() {
    return html`
      <p>some-static-element</p>
    `;
  }
}

if (!globalThis.customElements.get('some-static-element')) {
  globalThis.customElements.define('some-static-element', SomeElement);
}
