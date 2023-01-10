import { gql } from "@apollo/client";

const query = gql`
  query ContributorQuery($contributor: String!, $first: Int!, $after: String) {
    transactions(
      first: $first
      after: $after
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

export default query;
