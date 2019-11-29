import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure, addParameters } from "@storybook/react";
// addDecorator(
//   withInfo({
//     inline: true,
//     header: false
//   })
// );
addDecorator(withKnobs);

const req = require.context("../src", true, /\.stories\.ts(x)?$/);

function loadStories() {
  req
    .keys()
    .sort()
    .forEach(filename => req(filename));
}

configure(loadStories, module);
