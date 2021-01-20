import React from "react";
import StyleDecorator from "stories/decorators/style-decorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => <StyleDecorator><Story/></StyleDecorator>];
