import React from "react";
import { ProviderDecorator, StyleDecorator } from "stories/decorators";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
  (Story) =>
    <ProviderDecorator>
      <StyleDecorator>
        <Story />
      </StyleDecorator>
    </ProviderDecorator>
];
