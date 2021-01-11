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
        --scroll-top-background-color: #BADA55;
      }
      .text {
      height:200vh;
      width: 500px;
      background: #C55;
      display:flex;
      align-items:center;
      flex-direction:column;
      }

      p {
      margin: 1rem;
      }

    </style>
  </head>
  <div class="text">
  <p>
  Scroll down in order for the button to display
  </p>
  <p>
  This one is set to the default scroll distance before displaying the scroll to top button
  </p>
  </div>
  <scroll-to-top-wc></scroll-to-top-wc>
`;
