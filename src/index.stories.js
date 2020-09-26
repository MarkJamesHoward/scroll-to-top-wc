import "./index.ts";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => html`
  <head>
    <style>
      :root {
        --scroll-top-background-color: blue;
      }
    </style>
  </head>
  <div style="height:1500px;width: 500px;background: #BADA55;">test</div>
  <scroll-to-top-wc></scroll-to-top-wc>
`;
