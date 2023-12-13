import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "scroll-container": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "scroll-page": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}