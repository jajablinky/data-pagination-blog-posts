import { gql } from "@apollo/client";

const AARWEAVE_QUERY = gql`
  query ContributorQuery($contributor: String!) {
    transactions(
      tags: [
        { name: "App-Name", values: ["MirrorXYZ"] }
        { name: "Contributor", values: [$contributor] }
      ]
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export default AARWEAVE_QUERY;
