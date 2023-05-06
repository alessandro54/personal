import { defineConfig} from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/schemas/index"

const config = defineConfig({
  name: "portfolio",
  projectId: "e78mn16t",
  dataset: "development",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  }
});

export default config;
