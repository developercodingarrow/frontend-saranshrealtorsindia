import {
  genericSingleImageHandler,
  genericUploadGalleryHandler,
  genericDataHandler,
} from "../generichandler/genericImagehandlers";
import {
  ProjectUploadThumblin,
  ProjectUploadCoverImages,
  deleteProjectCoverImages,
  ProjectFloorPlanImages,
  deleteProjectFloorPlanImages,
  deleteProjectThumblinImages,
} from "../../Actions/projectActions";

export const handelUploadThumblin = genericSingleImageHandler(
  ProjectUploadThumblin
);

export const handelUploadProjectCoverImages = genericUploadGalleryHandler(
  ProjectUploadCoverImages
);

export const handelUploadFloorPlanImages = genericUploadGalleryHandler(
  ProjectFloorPlanImages
);

export const handelDeleteCoverImage = genericDataHandler(
  deleteProjectCoverImages
);

export const handelDeleteFloorImage = genericDataHandler(
  deleteProjectFloorPlanImages
);

export const handelDeleteThumblinImage = genericDataHandler(
  deleteProjectThumblinImages
);
