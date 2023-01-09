import { gql } from "@apollo/client";

const aarweaveQuery = gql`
  query {
    transactions(
      first: 1
      tags: [
        { name: "App-Name", values: ["MirrorXYZ"] }
        {
          name: "Original-Content-Digest"
          values: ["GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw"]
        }
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

export default aarweaveQuery;
