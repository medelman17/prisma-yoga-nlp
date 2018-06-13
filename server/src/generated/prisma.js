const { makePrismaBindingClass } = require('prisma-binding')


/**
 * Type Defs
*/

const typeDefs = `type AggregatePost {
  count: Int!
}

type AggregatePostEntity {
  count: Int!
}

type AggregatePostEntityEdge {
  count: Int!
}

type AggregatePostKeyPhrase {
  count: Int!
}

type AggregatePostKeyPhraseEdge {
  count: Int!
}

type AggregatePostSentiment {
  count: Int!
}

type AggregateSentimentScore {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

enum EntityType {
  LOCATION
  QUANTITY
  PERSON
  ORGANIZATION
  COMMERCIAL_ITEM
  EVENT
  DATE
  TITLE
  OTHER
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  createPostEntity(data: PostEntityCreateInput!): PostEntity!
  createPostEntityEdge(data: PostEntityEdgeCreateInput!): PostEntityEdge!
  createPostKeyPhrase(data: PostKeyPhraseCreateInput!): PostKeyPhrase!
  createPostKeyPhraseEdge(data: PostKeyPhraseEdgeCreateInput!): PostKeyPhraseEdge!
  createPostSentiment(data: PostSentimentCreateInput!): PostSentiment!
  createSentimentScore(data: SentimentScoreCreateInput!): SentimentScore!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updatePostEntity(data: PostEntityUpdateInput!, where: PostEntityWhereUniqueInput!): PostEntity
  updatePostEntityEdge(data: PostEntityEdgeUpdateInput!, where: PostEntityEdgeWhereUniqueInput!): PostEntityEdge
  updatePostKeyPhrase(data: PostKeyPhraseUpdateInput!, where: PostKeyPhraseWhereUniqueInput!): PostKeyPhrase
  updatePostKeyPhraseEdge(data: PostKeyPhraseEdgeUpdateInput!, where: PostKeyPhraseEdgeWhereUniqueInput!): PostKeyPhraseEdge
  updatePostSentiment(data: PostSentimentUpdateInput!, where: PostSentimentWhereUniqueInput!): PostSentiment
  deletePost(where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  deletePostEntity(where: PostEntityWhereUniqueInput!): PostEntity
  deletePostEntityEdge(where: PostEntityEdgeWhereUniqueInput!): PostEntityEdge
  deletePostKeyPhrase(where: PostKeyPhraseWhereUniqueInput!): PostKeyPhrase
  deletePostKeyPhraseEdge(where: PostKeyPhraseEdgeWhereUniqueInput!): PostKeyPhraseEdge
  deletePostSentiment(where: PostSentimentWhereUniqueInput!): PostSentiment
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertPostEntity(where: PostEntityWhereUniqueInput!, create: PostEntityCreateInput!, update: PostEntityUpdateInput!): PostEntity!
  upsertPostEntityEdge(where: PostEntityEdgeWhereUniqueInput!, create: PostEntityEdgeCreateInput!, update: PostEntityEdgeUpdateInput!): PostEntityEdge!
  upsertPostKeyPhrase(where: PostKeyPhraseWhereUniqueInput!, create: PostKeyPhraseCreateInput!, update: PostKeyPhraseUpdateInput!): PostKeyPhrase!
  upsertPostKeyPhraseEdge(where: PostKeyPhraseEdgeWhereUniqueInput!, create: PostKeyPhraseEdgeCreateInput!, update: PostKeyPhraseEdgeUpdateInput!): PostKeyPhraseEdge!
  upsertPostSentiment(where: PostSentimentWhereUniqueInput!, create: PostSentimentCreateInput!, update: PostSentimentUpdateInput!): PostSentiment!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyPostEntities(data: PostEntityUpdateInput!, where: PostEntityWhereInput): BatchPayload!
  updateManyPostEntityEdges(data: PostEntityEdgeUpdateInput!, where: PostEntityEdgeWhereInput): BatchPayload!
  updateManyPostKeyPhrases(data: PostKeyPhraseUpdateInput!, where: PostKeyPhraseWhereInput): BatchPayload!
  updateManyPostKeyPhraseEdges(data: PostKeyPhraseEdgeUpdateInput!, where: PostKeyPhraseEdgeWhereInput): BatchPayload!
  updateManyPostSentiments(data: PostSentimentUpdateInput!, where: PostSentimentWhereInput): BatchPayload!
  updateManySentimentScores(data: SentimentScoreUpdateInput!, where: SentimentScoreWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyPostEntities(where: PostEntityWhereInput): BatchPayload!
  deleteManyPostEntityEdges(where: PostEntityEdgeWhereInput): BatchPayload!
  deleteManyPostKeyPhrases(where: PostKeyPhraseWhereInput): BatchPayload!
  deleteManyPostKeyPhraseEdges(where: PostKeyPhraseEdgeWhereInput): BatchPayload!
  deleteManyPostSentiments(where: PostSentimentWhereInput): BatchPayload!
  deleteManySentimentScores(where: SentimentScoreWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String
  author(where: UserWhereInput): User
  entities(where: PostEntityEdgeWhereInput, orderBy: PostEntityEdgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostEntityEdge!]
  keyPhrases(where: PostKeyPhraseEdgeWhereInput, orderBy: PostKeyPhraseEdgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostKeyPhraseEdge!]
  sentiment(where: PostSentimentWhereInput): PostSentiment
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String
  author: UserCreateOneWithoutPostsInput
  entities: PostEntityEdgeCreateManyWithoutPostInput
  keyPhrases: PostKeyPhraseEdgeCreateManyWithoutPostInput
  sentiment: PostSentimentCreateOneInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateOneWithoutEntitiesInput {
  create: PostCreateWithoutEntitiesInput
  connect: PostWhereUniqueInput
}

input PostCreateOneWithoutKeyPhrasesInput {
  create: PostCreateWithoutKeyPhrasesInput
  connect: PostWhereUniqueInput
}

input PostCreateWithoutAuthorInput {
  title: String
  entities: PostEntityEdgeCreateManyWithoutPostInput
  keyPhrases: PostKeyPhraseEdgeCreateManyWithoutPostInput
  sentiment: PostSentimentCreateOneInput
}

input PostCreateWithoutEntitiesInput {
  title: String
  author: UserCreateOneWithoutPostsInput
  keyPhrases: PostKeyPhraseEdgeCreateManyWithoutPostInput
  sentiment: PostSentimentCreateOneInput
}

input PostCreateWithoutKeyPhrasesInput {
  title: String
  author: UserCreateOneWithoutPostsInput
  entities: PostEntityEdgeCreateManyWithoutPostInput
  sentiment: PostSentimentCreateOneInput
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

type PostEntity implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  post(where: PostEntityEdgeWhereInput, orderBy: PostEntityEdgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostEntityEdge!]
}

"""A connection to a list of items."""
type PostEntityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEntityEdge]!
  aggregate: AggregatePostEntity!
}

input PostEntityCreateInput {
  name: String!
  post: PostEntityEdgeCreateManyWithoutEntityInput
}

input PostEntityCreateOneWithoutPostInput {
  create: PostEntityCreateWithoutPostInput
  connect: PostEntityWhereUniqueInput
}

input PostEntityCreateWithoutPostInput {
  name: String!
}

type PostEntityEdge implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  post(where: PostWhereInput): Post!
  entity(where: PostEntityWhereInput): PostEntity!
  score: Float
  type: EntityType
  beginOffset: Int
  endOffset: Int
}

"""A connection to a list of items."""
type PostEntityEdgeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEntityEdgeEdge]!
  aggregate: AggregatePostEntityEdge!
}

input PostEntityEdgeCreateInput {
  score: Float
  type: EntityType
  beginOffset: Int
  endOffset: Int
  post: PostCreateOneWithoutEntitiesInput!
  entity: PostEntityCreateOneWithoutPostInput!
}

input PostEntityEdgeCreateManyWithoutEntityInput {
  create: [PostEntityEdgeCreateWithoutEntityInput!]
  connect: [PostEntityEdgeWhereUniqueInput!]
}

input PostEntityEdgeCreateManyWithoutPostInput {
  create: [PostEntityEdgeCreateWithoutPostInput!]
  connect: [PostEntityEdgeWhereUniqueInput!]
}

input PostEntityEdgeCreateWithoutEntityInput {
  score: Float
  type: EntityType
  beginOffset: Int
  endOffset: Int
  post: PostCreateOneWithoutEntitiesInput!
}

input PostEntityEdgeCreateWithoutPostInput {
  score: Float
  type: EntityType
  beginOffset: Int
  endOffset: Int
  entity: PostEntityCreateOneWithoutPostInput!
}

"""An edge in a connection."""
type PostEntityEdgeEdge {
  """The item at the end of the edge."""
  node: PostEntityEdge!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostEntityEdgeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  score_ASC
  score_DESC
  type_ASC
  type_DESC
  beginOffset_ASC
  beginOffset_DESC
  endOffset_ASC
  endOffset_DESC
}

type PostEntityEdgePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  score: Float
  type: EntityType
  beginOffset: Int
  endOffset: Int
}

type PostEntityEdgeSubscriptionPayload {
  mutation: MutationType!
  node: PostEntityEdge
  updatedFields: [String!]
  previousValues: PostEntityEdgePreviousValues
}

input PostEntityEdgeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostEntityEdgeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostEntityEdgeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostEntityEdgeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostEntityEdgeWhereInput
}

input PostEntityEdgeUpdateInput {
  score: Float
  type: EntityType
  beginOffset: Int
  endOffset: Int
  post: PostUpdateOneWithoutEntitiesInput
  entity: PostEntityUpdateOneWithoutPostInput
}

input PostEntityEdgeUpdateManyWithoutEntityInput {
  create: [PostEntityEdgeCreateWithoutEntityInput!]
  connect: [PostEntityEdgeWhereUniqueInput!]
  disconnect: [PostEntityEdgeWhereUniqueInput!]
  delete: [PostEntityEdgeWhereUniqueInput!]
  update: [PostEntityEdgeUpdateWithWhereUniqueWithoutEntityInput!]
  upsert: [PostEntityEdgeUpsertWithWhereUniqueWithoutEntityInput!]
}

input PostEntityEdgeUpdateManyWithoutPostInput {
  create: [PostEntityEdgeCreateWithoutPostInput!]
  connect: [PostEntityEdgeWhereUniqueInput!]
  disconnect: [PostEntityEdgeWhereUniqueInput!]
  delete: [PostEntityEdgeWhereUniqueInput!]
  update: [PostEntityEdgeUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [PostEntityEdgeUpsertWithWhereUniqueWithoutPostInput!]
}

input PostEntityEdgeUpdateWithoutEntityDataInput {
  score: Float
  type: EntityType
  beginOffset: Int
  endOffset: Int
  post: PostUpdateOneWithoutEntitiesInput
}

input PostEntityEdgeUpdateWithoutPostDataInput {
  score: Float
  type: EntityType
  beginOffset: Int
  endOffset: Int
  entity: PostEntityUpdateOneWithoutPostInput
}

input PostEntityEdgeUpdateWithWhereUniqueWithoutEntityInput {
  where: PostEntityEdgeWhereUniqueInput!
  data: PostEntityEdgeUpdateWithoutEntityDataInput!
}

input PostEntityEdgeUpdateWithWhereUniqueWithoutPostInput {
  where: PostEntityEdgeWhereUniqueInput!
  data: PostEntityEdgeUpdateWithoutPostDataInput!
}

input PostEntityEdgeUpsertWithWhereUniqueWithoutEntityInput {
  where: PostEntityEdgeWhereUniqueInput!
  update: PostEntityEdgeUpdateWithoutEntityDataInput!
  create: PostEntityEdgeCreateWithoutEntityInput!
}

input PostEntityEdgeUpsertWithWhereUniqueWithoutPostInput {
  where: PostEntityEdgeWhereUniqueInput!
  update: PostEntityEdgeUpdateWithoutPostDataInput!
  create: PostEntityEdgeCreateWithoutPostInput!
}

input PostEntityEdgeWhereInput {
  """Logical AND on all given filters."""
  AND: [PostEntityEdgeWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostEntityEdgeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostEntityEdgeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  score: Float

  """All values that are not equal to given value."""
  score_not: Float

  """All values that are contained in given list."""
  score_in: [Float!]

  """All values that are not contained in given list."""
  score_not_in: [Float!]

  """All values less than the given value."""
  score_lt: Float

  """All values less than or equal the given value."""
  score_lte: Float

  """All values greater than the given value."""
  score_gt: Float

  """All values greater than or equal the given value."""
  score_gte: Float
  type: EntityType

  """All values that are not equal to given value."""
  type_not: EntityType

  """All values that are contained in given list."""
  type_in: [EntityType!]

  """All values that are not contained in given list."""
  type_not_in: [EntityType!]
  beginOffset: Int

  """All values that are not equal to given value."""
  beginOffset_not: Int

  """All values that are contained in given list."""
  beginOffset_in: [Int!]

  """All values that are not contained in given list."""
  beginOffset_not_in: [Int!]

  """All values less than the given value."""
  beginOffset_lt: Int

  """All values less than or equal the given value."""
  beginOffset_lte: Int

  """All values greater than the given value."""
  beginOffset_gt: Int

  """All values greater than or equal the given value."""
  beginOffset_gte: Int
  endOffset: Int

  """All values that are not equal to given value."""
  endOffset_not: Int

  """All values that are contained in given list."""
  endOffset_in: [Int!]

  """All values that are not contained in given list."""
  endOffset_not_in: [Int!]

  """All values less than the given value."""
  endOffset_lt: Int

  """All values less than or equal the given value."""
  endOffset_lte: Int

  """All values greater than the given value."""
  endOffset_gt: Int

  """All values greater than or equal the given value."""
  endOffset_gte: Int
  post: PostWhereInput
  entity: PostEntityWhereInput
}

input PostEntityEdgeWhereUniqueInput {
  id: ID
}

enum PostEntityOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type PostEntityPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type PostEntitySubscriptionPayload {
  mutation: MutationType!
  node: PostEntity
  updatedFields: [String!]
  previousValues: PostEntityPreviousValues
}

input PostEntitySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostEntitySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostEntitySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostEntitySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostEntityWhereInput
}

input PostEntityUpdateInput {
  name: String
  post: PostEntityEdgeUpdateManyWithoutEntityInput
}

input PostEntityUpdateOneWithoutPostInput {
  create: PostEntityCreateWithoutPostInput
  connect: PostEntityWhereUniqueInput
  delete: Boolean
  update: PostEntityUpdateWithoutPostDataInput
  upsert: PostEntityUpsertWithoutPostInput
}

input PostEntityUpdateWithoutPostDataInput {
  name: String
}

input PostEntityUpsertWithoutPostInput {
  update: PostEntityUpdateWithoutPostDataInput!
  create: PostEntityCreateWithoutPostInput!
}

input PostEntityWhereInput {
  """Logical AND on all given filters."""
  AND: [PostEntityWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostEntityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostEntityWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  post_every: PostEntityEdgeWhereInput
  post_some: PostEntityEdgeWhereInput
  post_none: PostEntityEdgeWhereInput
}

input PostEntityWhereUniqueInput {
  id: ID
  name: String
}

type PostKeyPhrase implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  post(where: PostKeyPhraseEdgeWhereInput, orderBy: PostKeyPhraseEdgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostKeyPhraseEdge!]
}

"""A connection to a list of items."""
type PostKeyPhraseConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostKeyPhraseEdge]!
  aggregate: AggregatePostKeyPhrase!
}

input PostKeyPhraseCreateInput {
  name: String!
  post: PostKeyPhraseEdgeCreateManyWithoutKeyPhraseInput
}

input PostKeyPhraseCreateOneWithoutPostInput {
  create: PostKeyPhraseCreateWithoutPostInput
  connect: PostKeyPhraseWhereUniqueInput
}

input PostKeyPhraseCreateWithoutPostInput {
  name: String!
}

type PostKeyPhraseEdge implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  post(where: PostWhereInput): Post!
  keyPhrase(where: PostKeyPhraseWhereInput): PostKeyPhrase!
  score: Float
  beginOffset: Int
  endOffset: Int
}

"""A connection to a list of items."""
type PostKeyPhraseEdgeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostKeyPhraseEdgeEdge]!
  aggregate: AggregatePostKeyPhraseEdge!
}

input PostKeyPhraseEdgeCreateInput {
  score: Float
  beginOffset: Int
  endOffset: Int
  post: PostCreateOneWithoutKeyPhrasesInput!
  keyPhrase: PostKeyPhraseCreateOneWithoutPostInput!
}

input PostKeyPhraseEdgeCreateManyWithoutKeyPhraseInput {
  create: [PostKeyPhraseEdgeCreateWithoutKeyPhraseInput!]
  connect: [PostKeyPhraseEdgeWhereUniqueInput!]
}

input PostKeyPhraseEdgeCreateManyWithoutPostInput {
  create: [PostKeyPhraseEdgeCreateWithoutPostInput!]
  connect: [PostKeyPhraseEdgeWhereUniqueInput!]
}

input PostKeyPhraseEdgeCreateWithoutKeyPhraseInput {
  score: Float
  beginOffset: Int
  endOffset: Int
  post: PostCreateOneWithoutKeyPhrasesInput!
}

input PostKeyPhraseEdgeCreateWithoutPostInput {
  score: Float
  beginOffset: Int
  endOffset: Int
  keyPhrase: PostKeyPhraseCreateOneWithoutPostInput!
}

"""An edge in a connection."""
type PostKeyPhraseEdgeEdge {
  """The item at the end of the edge."""
  node: PostKeyPhraseEdge!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostKeyPhraseEdgeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  score_ASC
  score_DESC
  beginOffset_ASC
  beginOffset_DESC
  endOffset_ASC
  endOffset_DESC
}

type PostKeyPhraseEdgePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  score: Float
  beginOffset: Int
  endOffset: Int
}

type PostKeyPhraseEdgeSubscriptionPayload {
  mutation: MutationType!
  node: PostKeyPhraseEdge
  updatedFields: [String!]
  previousValues: PostKeyPhraseEdgePreviousValues
}

input PostKeyPhraseEdgeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostKeyPhraseEdgeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostKeyPhraseEdgeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostKeyPhraseEdgeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostKeyPhraseEdgeWhereInput
}

input PostKeyPhraseEdgeUpdateInput {
  score: Float
  beginOffset: Int
  endOffset: Int
  post: PostUpdateOneWithoutKeyPhrasesInput
  keyPhrase: PostKeyPhraseUpdateOneWithoutPostInput
}

input PostKeyPhraseEdgeUpdateManyWithoutKeyPhraseInput {
  create: [PostKeyPhraseEdgeCreateWithoutKeyPhraseInput!]
  connect: [PostKeyPhraseEdgeWhereUniqueInput!]
  disconnect: [PostKeyPhraseEdgeWhereUniqueInput!]
  delete: [PostKeyPhraseEdgeWhereUniqueInput!]
  update: [PostKeyPhraseEdgeUpdateWithWhereUniqueWithoutKeyPhraseInput!]
  upsert: [PostKeyPhraseEdgeUpsertWithWhereUniqueWithoutKeyPhraseInput!]
}

input PostKeyPhraseEdgeUpdateManyWithoutPostInput {
  create: [PostKeyPhraseEdgeCreateWithoutPostInput!]
  connect: [PostKeyPhraseEdgeWhereUniqueInput!]
  disconnect: [PostKeyPhraseEdgeWhereUniqueInput!]
  delete: [PostKeyPhraseEdgeWhereUniqueInput!]
  update: [PostKeyPhraseEdgeUpdateWithWhereUniqueWithoutPostInput!]
  upsert: [PostKeyPhraseEdgeUpsertWithWhereUniqueWithoutPostInput!]
}

input PostKeyPhraseEdgeUpdateWithoutKeyPhraseDataInput {
  score: Float
  beginOffset: Int
  endOffset: Int
  post: PostUpdateOneWithoutKeyPhrasesInput
}

input PostKeyPhraseEdgeUpdateWithoutPostDataInput {
  score: Float
  beginOffset: Int
  endOffset: Int
  keyPhrase: PostKeyPhraseUpdateOneWithoutPostInput
}

input PostKeyPhraseEdgeUpdateWithWhereUniqueWithoutKeyPhraseInput {
  where: PostKeyPhraseEdgeWhereUniqueInput!
  data: PostKeyPhraseEdgeUpdateWithoutKeyPhraseDataInput!
}

input PostKeyPhraseEdgeUpdateWithWhereUniqueWithoutPostInput {
  where: PostKeyPhraseEdgeWhereUniqueInput!
  data: PostKeyPhraseEdgeUpdateWithoutPostDataInput!
}

input PostKeyPhraseEdgeUpsertWithWhereUniqueWithoutKeyPhraseInput {
  where: PostKeyPhraseEdgeWhereUniqueInput!
  update: PostKeyPhraseEdgeUpdateWithoutKeyPhraseDataInput!
  create: PostKeyPhraseEdgeCreateWithoutKeyPhraseInput!
}

input PostKeyPhraseEdgeUpsertWithWhereUniqueWithoutPostInput {
  where: PostKeyPhraseEdgeWhereUniqueInput!
  update: PostKeyPhraseEdgeUpdateWithoutPostDataInput!
  create: PostKeyPhraseEdgeCreateWithoutPostInput!
}

input PostKeyPhraseEdgeWhereInput {
  """Logical AND on all given filters."""
  AND: [PostKeyPhraseEdgeWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostKeyPhraseEdgeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostKeyPhraseEdgeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  score: Float

  """All values that are not equal to given value."""
  score_not: Float

  """All values that are contained in given list."""
  score_in: [Float!]

  """All values that are not contained in given list."""
  score_not_in: [Float!]

  """All values less than the given value."""
  score_lt: Float

  """All values less than or equal the given value."""
  score_lte: Float

  """All values greater than the given value."""
  score_gt: Float

  """All values greater than or equal the given value."""
  score_gte: Float
  beginOffset: Int

  """All values that are not equal to given value."""
  beginOffset_not: Int

  """All values that are contained in given list."""
  beginOffset_in: [Int!]

  """All values that are not contained in given list."""
  beginOffset_not_in: [Int!]

  """All values less than the given value."""
  beginOffset_lt: Int

  """All values less than or equal the given value."""
  beginOffset_lte: Int

  """All values greater than the given value."""
  beginOffset_gt: Int

  """All values greater than or equal the given value."""
  beginOffset_gte: Int
  endOffset: Int

  """All values that are not equal to given value."""
  endOffset_not: Int

  """All values that are contained in given list."""
  endOffset_in: [Int!]

  """All values that are not contained in given list."""
  endOffset_not_in: [Int!]

  """All values less than the given value."""
  endOffset_lt: Int

  """All values less than or equal the given value."""
  endOffset_lte: Int

  """All values greater than the given value."""
  endOffset_gt: Int

  """All values greater than or equal the given value."""
  endOffset_gte: Int
  post: PostWhereInput
  keyPhrase: PostKeyPhraseWhereInput
}

input PostKeyPhraseEdgeWhereUniqueInput {
  id: ID
}

enum PostKeyPhraseOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type PostKeyPhrasePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type PostKeyPhraseSubscriptionPayload {
  mutation: MutationType!
  node: PostKeyPhrase
  updatedFields: [String!]
  previousValues: PostKeyPhrasePreviousValues
}

input PostKeyPhraseSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostKeyPhraseSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostKeyPhraseSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostKeyPhraseSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostKeyPhraseWhereInput
}

input PostKeyPhraseUpdateInput {
  name: String
  post: PostKeyPhraseEdgeUpdateManyWithoutKeyPhraseInput
}

input PostKeyPhraseUpdateOneWithoutPostInput {
  create: PostKeyPhraseCreateWithoutPostInput
  connect: PostKeyPhraseWhereUniqueInput
  delete: Boolean
  update: PostKeyPhraseUpdateWithoutPostDataInput
  upsert: PostKeyPhraseUpsertWithoutPostInput
}

input PostKeyPhraseUpdateWithoutPostDataInput {
  name: String
}

input PostKeyPhraseUpsertWithoutPostInput {
  update: PostKeyPhraseUpdateWithoutPostDataInput!
  create: PostKeyPhraseCreateWithoutPostInput!
}

input PostKeyPhraseWhereInput {
  """Logical AND on all given filters."""
  AND: [PostKeyPhraseWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostKeyPhraseWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostKeyPhraseWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  post_every: PostKeyPhraseEdgeWhereInput
  post_some: PostKeyPhraseEdgeWhereInput
  post_none: PostKeyPhraseEdgeWhereInput
}

input PostKeyPhraseWhereUniqueInput {
  id: ID
  name: String
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String
}

type PostSentiment implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  sentiment: String!
  sentimentScore(where: SentimentScoreWhereInput): SentimentScore
}

"""A connection to a list of items."""
type PostSentimentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostSentimentEdge]!
  aggregate: AggregatePostSentiment!
}

input PostSentimentCreateInput {
  sentiment: String!
  sentimentScore: SentimentScoreCreateOneInput
}

input PostSentimentCreateOneInput {
  create: PostSentimentCreateInput
  connect: PostSentimentWhereUniqueInput
}

"""An edge in a connection."""
type PostSentimentEdge {
  """The item at the end of the edge."""
  node: PostSentiment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostSentimentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  sentiment_ASC
  sentiment_DESC
}

type PostSentimentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  sentiment: String!
}

type PostSentimentSubscriptionPayload {
  mutation: MutationType!
  node: PostSentiment
  updatedFields: [String!]
  previousValues: PostSentimentPreviousValues
}

input PostSentimentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSentimentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSentimentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSentimentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostSentimentWhereInput
}

input PostSentimentUpdateDataInput {
  sentiment: String
  sentimentScore: SentimentScoreUpdateOneInput
}

input PostSentimentUpdateInput {
  sentiment: String
  sentimentScore: SentimentScoreUpdateOneInput
}

input PostSentimentUpdateOneInput {
  create: PostSentimentCreateInput
  connect: PostSentimentWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PostSentimentUpdateDataInput
  upsert: PostSentimentUpsertNestedInput
}

input PostSentimentUpsertNestedInput {
  update: PostSentimentUpdateDataInput!
  create: PostSentimentCreateInput!
}

input PostSentimentWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSentimentWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSentimentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSentimentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  sentiment: String

  """All values that are not equal to given value."""
  sentiment_not: String

  """All values that are contained in given list."""
  sentiment_in: [String!]

  """All values that are not contained in given list."""
  sentiment_not_in: [String!]

  """All values less than the given value."""
  sentiment_lt: String

  """All values less than or equal the given value."""
  sentiment_lte: String

  """All values greater than the given value."""
  sentiment_gt: String

  """All values greater than or equal the given value."""
  sentiment_gte: String

  """All values containing the given string."""
  sentiment_contains: String

  """All values not containing the given string."""
  sentiment_not_contains: String

  """All values starting with the given string."""
  sentiment_starts_with: String

  """All values not starting with the given string."""
  sentiment_not_starts_with: String

  """All values ending with the given string."""
  sentiment_ends_with: String

  """All values not ending with the given string."""
  sentiment_not_ends_with: String
  sentimentScore: SentimentScoreWhereInput
}

input PostSentimentWhereUniqueInput {
  id: ID
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  title: String
  author: UserUpdateOneWithoutPostsInput
  entities: PostEntityEdgeUpdateManyWithoutPostInput
  keyPhrases: PostKeyPhraseEdgeUpdateManyWithoutPostInput
  sentiment: PostSentimentUpdateOneInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateOneWithoutEntitiesInput {
  create: PostCreateWithoutEntitiesInput
  connect: PostWhereUniqueInput
  delete: Boolean
  update: PostUpdateWithoutEntitiesDataInput
  upsert: PostUpsertWithoutEntitiesInput
}

input PostUpdateOneWithoutKeyPhrasesInput {
  create: PostCreateWithoutKeyPhrasesInput
  connect: PostWhereUniqueInput
  delete: Boolean
  update: PostUpdateWithoutKeyPhrasesDataInput
  upsert: PostUpsertWithoutKeyPhrasesInput
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  entities: PostEntityEdgeUpdateManyWithoutPostInput
  keyPhrases: PostKeyPhraseEdgeUpdateManyWithoutPostInput
  sentiment: PostSentimentUpdateOneInput
}

input PostUpdateWithoutEntitiesDataInput {
  title: String
  author: UserUpdateOneWithoutPostsInput
  keyPhrases: PostKeyPhraseEdgeUpdateManyWithoutPostInput
  sentiment: PostSentimentUpdateOneInput
}

input PostUpdateWithoutKeyPhrasesDataInput {
  title: String
  author: UserUpdateOneWithoutPostsInput
  entities: PostEntityEdgeUpdateManyWithoutPostInput
  sentiment: PostSentimentUpdateOneInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithoutEntitiesInput {
  update: PostUpdateWithoutEntitiesDataInput!
  create: PostCreateWithoutEntitiesInput!
}

input PostUpsertWithoutKeyPhrasesInput {
  update: PostUpdateWithoutKeyPhrasesDataInput!
  create: PostCreateWithoutKeyPhrasesInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  author: UserWhereInput
  entities_every: PostEntityEdgeWhereInput
  entities_some: PostEntityEdgeWhereInput
  entities_none: PostEntityEdgeWhereInput
  keyPhrases_every: PostKeyPhraseEdgeWhereInput
  keyPhrases_some: PostKeyPhraseEdgeWhereInput
  keyPhrases_none: PostKeyPhraseEdgeWhereInput
  sentiment: PostSentimentWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  postEntities(where: PostEntityWhereInput, orderBy: PostEntityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostEntity]!
  postEntityEdges(where: PostEntityEdgeWhereInput, orderBy: PostEntityEdgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostEntityEdge]!
  postKeyPhrases(where: PostKeyPhraseWhereInput, orderBy: PostKeyPhraseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostKeyPhrase]!
  postKeyPhraseEdges(where: PostKeyPhraseEdgeWhereInput, orderBy: PostKeyPhraseEdgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostKeyPhraseEdge]!
  postSentiments(where: PostSentimentWhereInput, orderBy: PostSentimentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PostSentiment]!
  sentimentScores(where: SentimentScoreWhereInput, orderBy: SentimentScoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SentimentScore]!
  post(where: PostWhereUniqueInput!): Post
  user(where: UserWhereUniqueInput!): User
  postEntity(where: PostEntityWhereUniqueInput!): PostEntity
  postEntityEdge(where: PostEntityEdgeWhereUniqueInput!): PostEntityEdge
  postKeyPhrase(where: PostKeyPhraseWhereUniqueInput!): PostKeyPhrase
  postKeyPhraseEdge(where: PostKeyPhraseEdgeWhereUniqueInput!): PostKeyPhraseEdge
  postSentiment(where: PostSentimentWhereUniqueInput!): PostSentiment
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  postEntitiesConnection(where: PostEntityWhereInput, orderBy: PostEntityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostEntityConnection!
  postEntityEdgesConnection(where: PostEntityEdgeWhereInput, orderBy: PostEntityEdgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostEntityEdgeConnection!
  postKeyPhrasesConnection(where: PostKeyPhraseWhereInput, orderBy: PostKeyPhraseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostKeyPhraseConnection!
  postKeyPhraseEdgesConnection(where: PostKeyPhraseEdgeWhereInput, orderBy: PostKeyPhraseEdgeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostKeyPhraseEdgeConnection!
  postSentimentsConnection(where: PostSentimentWhereInput, orderBy: PostSentimentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostSentimentConnection!
  sentimentScoresConnection(where: SentimentScoreWhereInput, orderBy: SentimentScoreOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SentimentScoreConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type SentimentScore {
  positive: Float
  negative: Float
  neutral: Float
  mixed: Float
}

"""A connection to a list of items."""
type SentimentScoreConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SentimentScoreEdge]!
  aggregate: AggregateSentimentScore!
}

input SentimentScoreCreateInput {
  positive: Float
  negative: Float
  neutral: Float
  mixed: Float
}

input SentimentScoreCreateOneInput {
  create: SentimentScoreCreateInput
}

"""An edge in a connection."""
type SentimentScoreEdge {
  """The item at the end of the edge."""
  node: SentimentScore!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SentimentScoreOrderByInput {
  positive_ASC
  positive_DESC
  negative_ASC
  negative_DESC
  neutral_ASC
  neutral_DESC
  mixed_ASC
  mixed_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SentimentScorePreviousValues {
  positive: Float
  negative: Float
  neutral: Float
  mixed: Float
}

type SentimentScoreSubscriptionPayload {
  mutation: MutationType!
  node: SentimentScore
  updatedFields: [String!]
  previousValues: SentimentScorePreviousValues
}

input SentimentScoreSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SentimentScoreSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SentimentScoreSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SentimentScoreSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SentimentScoreWhereInput
}

input SentimentScoreUpdateDataInput {
  positive: Float
  negative: Float
  neutral: Float
  mixed: Float
}

input SentimentScoreUpdateInput {
  positive: Float
  negative: Float
  neutral: Float
  mixed: Float
}

input SentimentScoreUpdateOneInput {
  create: SentimentScoreCreateInput
  disconnect: Boolean
  delete: Boolean
  update: SentimentScoreUpdateDataInput
  upsert: SentimentScoreUpsertNestedInput
}

input SentimentScoreUpsertNestedInput {
  update: SentimentScoreUpdateDataInput!
  create: SentimentScoreCreateInput!
}

input SentimentScoreWhereInput {
  """Logical AND on all given filters."""
  AND: [SentimentScoreWhereInput!]

  """Logical OR on all given filters."""
  OR: [SentimentScoreWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SentimentScoreWhereInput!]
  positive: Float

  """All values that are not equal to given value."""
  positive_not: Float

  """All values that are contained in given list."""
  positive_in: [Float!]

  """All values that are not contained in given list."""
  positive_not_in: [Float!]

  """All values less than the given value."""
  positive_lt: Float

  """All values less than or equal the given value."""
  positive_lte: Float

  """All values greater than the given value."""
  positive_gt: Float

  """All values greater than or equal the given value."""
  positive_gte: Float
  negative: Float

  """All values that are not equal to given value."""
  negative_not: Float

  """All values that are contained in given list."""
  negative_in: [Float!]

  """All values that are not contained in given list."""
  negative_not_in: [Float!]

  """All values less than the given value."""
  negative_lt: Float

  """All values less than or equal the given value."""
  negative_lte: Float

  """All values greater than the given value."""
  negative_gt: Float

  """All values greater than or equal the given value."""
  negative_gte: Float
  neutral: Float

  """All values that are not equal to given value."""
  neutral_not: Float

  """All values that are contained in given list."""
  neutral_in: [Float!]

  """All values that are not contained in given list."""
  neutral_not_in: [Float!]

  """All values less than the given value."""
  neutral_lt: Float

  """All values less than or equal the given value."""
  neutral_lte: Float

  """All values greater than the given value."""
  neutral_gt: Float

  """All values greater than or equal the given value."""
  neutral_gte: Float
  mixed: Float

  """All values that are not equal to given value."""
  mixed_not: Float

  """All values that are contained in given list."""
  mixed_in: [Float!]

  """All values that are not contained in given list."""
  mixed_not_in: [Float!]

  """All values less than the given value."""
  mixed_lt: Float

  """All values less than or equal the given value."""
  mixed_lte: Float

  """All values greater than the given value."""
  mixed_gt: Float

  """All values greater than or equal the given value."""
  mixed_gte: Float
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  postEntity(where: PostEntitySubscriptionWhereInput): PostEntitySubscriptionPayload
  postEntityEdge(where: PostEntityEdgeSubscriptionWhereInput): PostEntityEdgeSubscriptionPayload
  postKeyPhrase(where: PostKeyPhraseSubscriptionWhereInput): PostKeyPhraseSubscriptionPayload
  postKeyPhraseEdge(where: PostKeyPhraseEdgeSubscriptionWhereInput): PostKeyPhraseEdgeSubscriptionPayload
  postSentiment(where: PostSentimentSubscriptionWhereInput): PostSentimentSubscriptionPayload
  sentimentScore(where: SentimentScoreSubscriptionWhereInput): SentimentScoreSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  name: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutPostsDataInput {
  name: String
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
}
`

const Prisma = makePrismaBindingClass({ typeDefs })
module.exports = { Prisma }
