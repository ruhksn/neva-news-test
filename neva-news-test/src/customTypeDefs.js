// custom type definitions
const typeDefs = `
  type Query {
    hello: String,
    count: Int,
    user_average_age: Float,
	published_at_date: timestamp
  }

  type Mutation {
    increment_counter: MutationResp
  }

  type MutationResp {
    new_count: Int
  }
`;

export default typeDefs;
