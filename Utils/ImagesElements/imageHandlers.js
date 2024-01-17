import {
  genericSingleImageHandler,
  genericUploadGalleryHandler,
  genericDataHandler,
} from "../generichandler/genericImagehandlers";
import {
  ProjectUploadThumblin,
  ProjectUploadCoverImages,
  deleteProjectCoverImages,
} from "../../Actions/projectActions";

export const handelUploadThumblin = genericSingleImageHandler(
  ProjectUploadThumblin
);

export const handelUploadProjectCoverImages = genericUploadGalleryHandler(
  ProjectUploadCoverImages
);

export const handelDeleteCoverImage = genericDataHandler(
  deleteProjectCoverImages
);
