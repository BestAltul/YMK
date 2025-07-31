import PersonalFields from "./specific-fields/PersonalFields";
import BusinessFields from "./specific-fields/BusinessFields";
import TemporaryFields from "./specific-fields/OtherFields";
import React from "react";

export default function SpecificFields({ type }) {
  switch (type) {
    case "PERSONAL":
      return <PersonalFields />;
    case "BUSINESS":
      return <BusinessFields />;
    case "TEMPORARY":
      return <TemporaryFields />;
    default:
      return null;
  }
}
