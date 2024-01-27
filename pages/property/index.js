import React, { useContext } from "react";
import ProjectListingLayout from "../../Layouts/ProjectListingLayout/ProjectListingLayout";
import { ListingContext } from "../../ContextApi/userinterface/ListingContextApi";
import { fillterdProjetcs } from "../../Actions/projectActions";

export default function PropertyListingPage({ initialProject }) {
  const { allListing, setallListing, loadingProject, setloadingProject } =
    useContext(ListingContext);

  setallListing(initialProject);

  console.log(allListing);

  return (
    <ProjectListingLayout>
      <h1>Property Listing page</h1>
    </ProjectListingLayout>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps(context) {
  try {
    const queryObj = context.query;
    const result = await fillterdProjetcs(queryObj);
    console.log(result);

    if (result.data.status === "success") {
      return {
        props: {
          initialProject: result.data.result,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      initialProject: {},
    },
  };
}
