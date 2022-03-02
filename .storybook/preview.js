import { setCompodocJson } from "@storybook/addon-docs/angular";
import { addParameters } from "@storybook/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

import '!style-loader!css-loader!sass-loader!../projects/demo/src/styles/index.scss';

const tokenContext = require.context(
  '!!raw-loader!../projects/demo/src/styles',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  designToken: {
    files: tokenFiles
  }
}


addParameters({
  options: {
    showRoots: true
  }
})

addParameters({
  viewport: {
    viewports: {
      small: {
        name: 'Small (40em)',
        styles: {
          width: 40 * 16 + 'px',
          height: '100%'
        }
      },
      medium: {
        name: 'Medium (56em)',
        styles: {
          width: 56 * 16 + 'px',
          height: '100%'
        }
      },
      large: {
        name: 'Large (64em)',
        styles: {
          width: 64 * 16 + 'px',
          height: '100%'
        }
      },
      responsive: {
        name: 'Responsive',
        styles: {
          width: '100%',
          height: '100%'
        }
      }
    },
    defaultViewport: 'Small Mobile'
  }
})