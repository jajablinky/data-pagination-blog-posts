import { gql } from "graphql-request";

const query = gql`
  query ContributorQuery(
    $contributor: String! = "0xB618aaCb9DcDc21Ca69D310A6fC04674D293A193"
    $first: Int! = 3
  ) {
    transactions(
      first: $first

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
