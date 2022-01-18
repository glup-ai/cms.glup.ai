import { SiProbot } from "react-icons/md";

export default {
  name: "kunstigModel",
  title: "Kunstig modell",
  type: "document",
  icon: SiProbot,
  fields: [
    {
      name: "displayName",
      title: "Display name",
      type: "string",
      description: "The display name of the model",
    },
    {
      name: "name",
      title: "Short name",
      type: "string",
      description:
        "The short name of the model, must not contain symbols or spaces",
    },
    {
      name: "model",
      title: "Model file",
      type: "slug",
      type: "file",
      description: "The .pkl file containing the model",
    },
  ],
  preview: {
    select: { title: "displayName" },
  },
};
