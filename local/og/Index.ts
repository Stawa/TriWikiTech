import { OpenGraph as OpenGraphImageFirstCode } from "local/og/JavaScript/FirstCode";
import { OpenGraph as OpenGraphImageSetup } from "local/og/JavaScript/Setup";
import { OpenGraph as OpenGraphIndex } from "local/og/JavaScript/Index";

export const OpenGraphs = {
  Index: {
    og: OpenGraphIndex,
    type: "JS",
  },
  FirstCode: {
    og: OpenGraphImageFirstCode,
    type: "JS",
  },
  Setup: {
    og: OpenGraphImageSetup,
    type: "JS",
  },
};
