import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateCategory {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregateCustomizeSite {
  count: Int!
}

type AggregateGallery {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregatePricing {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductType {
  count: Int!
}

type AggregateSite {
  count: Int!
}

type AggregateSlug {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateThemeColor {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

type Category implements Node {
  id: ID!
  name: String!
  description: String!
  slug(where: SlugWhereInput): Slug!
  productType(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductType!]
  site(where: SiteWhereInput): Site!
}

"""
A connection to a list of items.
"""
type CategoryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String!
  description: String!
  slug: SlugCreateOneWithoutCategoryInput!
  productType: ProductTypeCreateManyWithoutCategoryInput
  site: SiteCreateOneWithoutCategoryInput!
}

input CategoryCreateManyWithoutSiteInput {
  create: [CategoryCreateWithoutSiteInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateOneWithoutProductTypeInput {
  create: CategoryCreateWithoutProductTypeInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateOneWithoutSlugInput {
  create: CategoryCreateWithoutSlugInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateWithoutProductTypeInput {
  name: String!
  description: String!
  slug: SlugCreateOneWithoutCategoryInput!
  site: SiteCreateOneWithoutCategoryInput!
}

input CategoryCreateWithoutSiteInput {
  name: String!
  description: String!
  slug: SlugCreateOneWithoutCategoryInput!
  productType: ProductTypeCreateManyWithoutCategoryInput
}

input CategoryCreateWithoutSlugInput {
  name: String!
  description: String!
  productType: ProductTypeCreateManyWithoutCategoryInput
  site: SiteCreateOneWithoutCategoryInput!
}

"""
An edge in a connection.
"""
type CategoryEdge {
  """
  The item at the end of the edge.
  """
  node: Category!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String!
  description: String!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CategorySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CategorySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CategorySubscriptionWhereInput!]
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
  node: CategoryWhereInput
}

input CategoryUpdateInput {
  name: String
  description: String
  slug: SlugUpdateOneWithoutCategoryInput
  productType: ProductTypeUpdateManyWithoutCategoryInput
  site: SiteUpdateOneWithoutCategoryInput
}

input CategoryUpdateManyWithoutSiteInput {
  create: [CategoryCreateWithoutSiteInput!]
  connect: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  delete: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutSiteInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutSiteInput!]
}

input CategoryUpdateOneWithoutProductTypeInput {
  create: CategoryCreateWithoutProductTypeInput
  connect: CategoryWhereUniqueInput
  delete: Boolean
  update: CategoryUpdateWithoutProductTypeDataInput
  upsert: CategoryUpsertWithoutProductTypeInput
}

input CategoryUpdateOneWithoutSlugInput {
  create: CategoryCreateWithoutSlugInput
  connect: CategoryWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CategoryUpdateWithoutSlugDataInput
  upsert: CategoryUpsertWithoutSlugInput
}

input CategoryUpdateWithoutProductTypeDataInput {
  name: String
  description: String
  slug: SlugUpdateOneWithoutCategoryInput
  site: SiteUpdateOneWithoutCategoryInput
}

input CategoryUpdateWithoutSiteDataInput {
  name: String
  description: String
  slug: SlugUpdateOneWithoutCategoryInput
  productType: ProductTypeUpdateManyWithoutCategoryInput
}

input CategoryUpdateWithoutSlugDataInput {
  name: String
  description: String
  productType: ProductTypeUpdateManyWithoutCategoryInput
  site: SiteUpdateOneWithoutCategoryInput
}

input CategoryUpdateWithWhereUniqueWithoutSiteInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutSiteDataInput!
}

input CategoryUpsertWithoutProductTypeInput {
  update: CategoryUpdateWithoutProductTypeDataInput!
  create: CategoryCreateWithoutProductTypeInput!
}

input CategoryUpsertWithoutSlugInput {
  update: CategoryUpdateWithoutSlugDataInput!
  create: CategoryCreateWithoutSlugInput!
}

input CategoryUpsertWithWhereUniqueWithoutSiteInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutSiteDataInput!
  create: CategoryCreateWithoutSiteInput!
}

input CategoryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CategoryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CategoryWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CategoryWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  slug: SlugWhereInput
  productType_every: ProductTypeWhereInput
  productType_some: ProductTypeWhereInput
  productType_none: ProductTypeWhereInput
  site: SiteWhereInput
}

input CategoryWhereUniqueInput {
  id: ID
}

type Company implements Node {
  id: ID!
  name: String!
  slug(where: SlugWhereInput): Slug!
  sites(where: SiteWhereInput, orderBy: SiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Site!]
}

"""
A connection to a list of items.
"""
type CompanyConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  name: String!
  slug: SlugCreateOneWithoutCompanyInput!
  sites: SiteCreateManyWithoutCompanyInput
}

input CompanyCreateOneWithoutSitesInput {
  create: CompanyCreateWithoutSitesInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateOneWithoutSlugInput {
  create: CompanyCreateWithoutSlugInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutSitesInput {
  name: String!
  slug: SlugCreateOneWithoutCompanyInput!
}

input CompanyCreateWithoutSlugInput {
  name: String!
  sites: SiteCreateManyWithoutCompanyInput
}

"""
An edge in a connection.
"""
type CompanyEdge {
  """
  The item at the end of the edge.
  """
  node: Company!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CompanyPreviousValues {
  id: ID!
  name: String!
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CompanySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CompanySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CompanySubscriptionWhereInput!]
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
  node: CompanyWhereInput
}

input CompanyUpdateInput {
  name: String
  slug: SlugUpdateOneWithoutCompanyInput
  sites: SiteUpdateManyWithoutCompanyInput
}

input CompanyUpdateOneWithoutSitesInput {
  create: CompanyCreateWithoutSitesInput
  connect: CompanyWhereUniqueInput
  delete: Boolean
  update: CompanyUpdateWithoutSitesDataInput
  upsert: CompanyUpsertWithoutSitesInput
}

input CompanyUpdateOneWithoutSlugInput {
  create: CompanyCreateWithoutSlugInput
  connect: CompanyWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CompanyUpdateWithoutSlugDataInput
  upsert: CompanyUpsertWithoutSlugInput
}

input CompanyUpdateWithoutSitesDataInput {
  name: String
  slug: SlugUpdateOneWithoutCompanyInput
}

input CompanyUpdateWithoutSlugDataInput {
  name: String
  sites: SiteUpdateManyWithoutCompanyInput
}

input CompanyUpsertWithoutSitesInput {
  update: CompanyUpdateWithoutSitesDataInput!
  create: CompanyCreateWithoutSitesInput!
}

input CompanyUpsertWithoutSlugInput {
  update: CompanyUpdateWithoutSlugDataInput!
  create: CompanyCreateWithoutSlugInput!
}

input CompanyWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CompanyWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CompanyWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CompanyWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  slug: SlugWhereInput
  sites_every: SiteWhereInput
  sites_some: SiteWhereInput
  sites_none: SiteWhereInput
}

input CompanyWhereUniqueInput {
  id: ID
}

type CustomizeSite implements Node {
  id: ID!
  headerText: String
  headerImage: String
  theme(where: ThemeColorWhereInput): ThemeColor
}

"""
A connection to a list of items.
"""
type CustomizeSiteConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CustomizeSiteEdge]!
  aggregate: AggregateCustomizeSite!
}

input CustomizeSiteCreateInput {
  headerText: String
  headerImage: String
  theme: ThemeColorCreateOneInput
}

input CustomizeSiteCreateOneInput {
  create: CustomizeSiteCreateInput
  connect: CustomizeSiteWhereUniqueInput
}

"""
An edge in a connection.
"""
type CustomizeSiteEdge {
  """
  The item at the end of the edge.
  """
  node: CustomizeSite!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CustomizeSiteOrderByInput {
  id_ASC
  id_DESC
  headerText_ASC
  headerText_DESC
  headerImage_ASC
  headerImage_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CustomizeSitePreviousValues {
  id: ID!
  headerText: String
  headerImage: String
}

type CustomizeSiteSubscriptionPayload {
  mutation: MutationType!
  node: CustomizeSite
  updatedFields: [String!]
  previousValues: CustomizeSitePreviousValues
}

input CustomizeSiteSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CustomizeSiteSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CustomizeSiteSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CustomizeSiteSubscriptionWhereInput!]
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
  node: CustomizeSiteWhereInput
}

input CustomizeSiteUpdateDataInput {
  headerText: String
  headerImage: String
  theme: ThemeColorUpdateOneInput
}

input CustomizeSiteUpdateInput {
  headerText: String
  headerImage: String
  theme: ThemeColorUpdateOneInput
}

input CustomizeSiteUpdateOneInput {
  create: CustomizeSiteCreateInput
  connect: CustomizeSiteWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CustomizeSiteUpdateDataInput
  upsert: CustomizeSiteUpsertNestedInput
}

input CustomizeSiteUpsertNestedInput {
  update: CustomizeSiteUpdateDataInput!
  create: CustomizeSiteCreateInput!
}

input CustomizeSiteWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CustomizeSiteWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CustomizeSiteWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CustomizeSiteWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  headerText: String
  """
  All values that are not equal to given value.
  """
  headerText_not: String
  """
  All values that are contained in given list.
  """
  headerText_in: [String!]
  """
  All values that are not contained in given list.
  """
  headerText_not_in: [String!]
  """
  All values less than the given value.
  """
  headerText_lt: String
  """
  All values less than or equal the given value.
  """
  headerText_lte: String
  """
  All values greater than the given value.
  """
  headerText_gt: String
  """
  All values greater than or equal the given value.
  """
  headerText_gte: String
  """
  All values containing the given string.
  """
  headerText_contains: String
  """
  All values not containing the given string.
  """
  headerText_not_contains: String
  """
  All values starting with the given string.
  """
  headerText_starts_with: String
  """
  All values not starting with the given string.
  """
  headerText_not_starts_with: String
  """
  All values ending with the given string.
  """
  headerText_ends_with: String
  """
  All values not ending with the given string.
  """
  headerText_not_ends_with: String
  headerImage: String
  """
  All values that are not equal to given value.
  """
  headerImage_not: String
  """
  All values that are contained in given list.
  """
  headerImage_in: [String!]
  """
  All values that are not contained in given list.
  """
  headerImage_not_in: [String!]
  """
  All values less than the given value.
  """
  headerImage_lt: String
  """
  All values less than or equal the given value.
  """
  headerImage_lte: String
  """
  All values greater than the given value.
  """
  headerImage_gt: String
  """
  All values greater than or equal the given value.
  """
  headerImage_gte: String
  """
  All values containing the given string.
  """
  headerImage_contains: String
  """
  All values not containing the given string.
  """
  headerImage_not_contains: String
  """
  All values starting with the given string.
  """
  headerImage_starts_with: String
  """
  All values not starting with the given string.
  """
  headerImage_not_starts_with: String
  """
  All values ending with the given string.
  """
  headerImage_ends_with: String
  """
  All values not ending with the given string.
  """
  headerImage_not_ends_with: String
  theme: ThemeColorWhereInput
}

input CustomizeSiteWhereUniqueInput {
  id: ID
}

type Gallery {
  url: String!
}

"""
A connection to a list of items.
"""
type GalleryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [GalleryEdge]!
  aggregate: AggregateGallery!
}

input GalleryCreateInput {
  url: String!
}

input GalleryCreateManyInput {
  create: [GalleryCreateInput!]
}

"""
An edge in a connection.
"""
type GalleryEdge {
  """
  The item at the end of the edge.
  """
  node: Gallery!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum GalleryOrderByInput {
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GalleryPreviousValues {
  url: String!
}

type GallerySubscriptionPayload {
  mutation: MutationType!
  node: Gallery
  updatedFields: [String!]
  previousValues: GalleryPreviousValues
}

input GallerySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [GallerySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [GallerySubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [GallerySubscriptionWhereInput!]
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
  node: GalleryWhereInput
}

input GalleryUpdateInput {
  url: String
}

input GalleryUpdateManyInput {
  create: [GalleryCreateInput!]
}

input GalleryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [GalleryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [GalleryWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [GalleryWhereInput!]
  url: String
  """
  All values that are not equal to given value.
  """
  url_not: String
  """
  All values that are contained in given list.
  """
  url_in: [String!]
  """
  All values that are not contained in given list.
  """
  url_not_in: [String!]
  """
  All values less than the given value.
  """
  url_lt: String
  """
  All values less than or equal the given value.
  """
  url_lte: String
  """
  All values greater than the given value.
  """
  url_gt: String
  """
  All values greater than or equal the given value.
  """
  url_gte: String
  """
  All values containing the given string.
  """
  url_contains: String
  """
  All values not containing the given string.
  """
  url_not_contains: String
  """
  All values starting with the given string.
  """
  url_starts_with: String
  """
  All values not starting with the given string.
  """
  url_not_starts_with: String
  """
  All values ending with the given string.
  """
  url_ends_with: String
  """
  All values not ending with the given string.
  """
  url_not_ends_with: String
}

type Image {
  url: String!
}

"""
A connection to a list of items.
"""
type ImageConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  url: String!
}

input ImageCreateOneInput {
  create: ImageCreateInput
}

"""
An edge in a connection.
"""
type ImageEdge {
  """
  The item at the end of the edge.
  """
  node: Image!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ImageOrderByInput {
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ImagePreviousValues {
  url: String!
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ImageSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ImageSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ImageSubscriptionWhereInput!]
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
  node: ImageWhereInput
}

input ImageUpdateDataInput {
  url: String
}

input ImageUpdateInput {
  url: String
}

input ImageUpdateOneInput {
  create: ImageCreateInput
  disconnect: Boolean
  delete: Boolean
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ImageWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ImageWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ImageWhereInput!]
  url: String
  """
  All values that are not equal to given value.
  """
  url_not: String
  """
  All values that are contained in given list.
  """
  url_in: [String!]
  """
  All values that are not contained in given list.
  """
  url_not_in: [String!]
  """
  All values less than the given value.
  """
  url_lt: String
  """
  All values less than or equal the given value.
  """
  url_lte: String
  """
  All values greater than the given value.
  """
  url_gt: String
  """
  All values greater than or equal the given value.
  """
  url_gte: String
  """
  All values containing the given string.
  """
  url_contains: String
  """
  All values not containing the given string.
  """
  url_not_contains: String
  """
  All values starting with the given string.
  """
  url_starts_with: String
  """
  All values not starting with the given string.
  """
  url_not_starts_with: String
  """
  All values ending with the given string.
  """
  url_ends_with: String
  """
  All values not ending with the given string.
  """
  url_not_ends_with: String
}

type Location implements Node {
  id: ID!
  lat: Float!
  lng: Float!
  site(where: SiteWhereInput): Site
  address: String!
}

"""
A connection to a list of items.
"""
type LocationConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  lat: Float!
  lng: Float!
  address: String!
  site: SiteCreateOneWithoutLocationInput
}

input LocationCreateOneWithoutSiteInput {
  create: LocationCreateWithoutSiteInput
  connect: LocationWhereUniqueInput
}

input LocationCreateWithoutSiteInput {
  lat: Float!
  lng: Float!
  address: String!
}

"""
An edge in a connection.
"""
type LocationEdge {
  """
  The item at the end of the edge.
  """
  node: Location!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
  address_ASC
  address_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LocationPreviousValues {
  id: ID!
  lat: Float!
  lng: Float!
  address: String!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LocationSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LocationSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LocationSubscriptionWhereInput!]
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
  node: LocationWhereInput
}

input LocationUpdateInput {
  lat: Float
  lng: Float
  address: String
  site: SiteUpdateOneWithoutLocationInput
}

input LocationUpdateOneWithoutSiteInput {
  create: LocationCreateWithoutSiteInput
  connect: LocationWhereUniqueInput
  delete: Boolean
  update: LocationUpdateWithoutSiteDataInput
  upsert: LocationUpsertWithoutSiteInput
}

input LocationUpdateWithoutSiteDataInput {
  lat: Float
  lng: Float
  address: String
}

input LocationUpsertWithoutSiteInput {
  update: LocationUpdateWithoutSiteDataInput!
  create: LocationCreateWithoutSiteInput!
}

input LocationWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LocationWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LocationWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LocationWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  lat: Float
  """
  All values that are not equal to given value.
  """
  lat_not: Float
  """
  All values that are contained in given list.
  """
  lat_in: [Float!]
  """
  All values that are not contained in given list.
  """
  lat_not_in: [Float!]
  """
  All values less than the given value.
  """
  lat_lt: Float
  """
  All values less than or equal the given value.
  """
  lat_lte: Float
  """
  All values greater than the given value.
  """
  lat_gt: Float
  """
  All values greater than or equal the given value.
  """
  lat_gte: Float
  lng: Float
  """
  All values that are not equal to given value.
  """
  lng_not: Float
  """
  All values that are contained in given list.
  """
  lng_in: [Float!]
  """
  All values that are not contained in given list.
  """
  lng_not_in: [Float!]
  """
  All values less than the given value.
  """
  lng_lt: Float
  """
  All values less than or equal the given value.
  """
  lng_lte: Float
  """
  All values greater than the given value.
  """
  lng_gt: Float
  """
  All values greater than or equal the given value.
  """
  lng_gte: Float
  address: String
  """
  All values that are not equal to given value.
  """
  address_not: String
  """
  All values that are contained in given list.
  """
  address_in: [String!]
  """
  All values that are not contained in given list.
  """
  address_not_in: [String!]
  """
  All values less than the given value.
  """
  address_lt: String
  """
  All values less than or equal the given value.
  """
  address_lte: String
  """
  All values greater than the given value.
  """
  address_gt: String
  """
  All values greater than or equal the given value.
  """
  address_gte: String
  """
  All values containing the given string.
  """
  address_contains: String
  """
  All values not containing the given string.
  """
  address_not_contains: String
  """
  All values starting with the given string.
  """
  address_starts_with: String
  """
  All values not starting with the given string.
  """
  address_not_starts_with: String
  """
  All values ending with the given string.
  """
  address_ends_with: String
  """
  All values not ending with the given string.
  """
  address_not_ends_with: String
  site: SiteWhereInput
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type Pricing implements Node {
  id: ID!
  product(where: ProductWhereInput): Product!
  rangePricing: Boolean!
  day: Int!
  week: Int!
  month: Int!
}

"""
A connection to a list of items.
"""
type PricingConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PricingEdge]!
  aggregate: AggregatePricing!
}

input PricingCreateInput {
  rangePricing: Boolean!
  day: Int!
  week: Int!
  month: Int!
  product: ProductCreateOneWithoutPricingInput!
}

input PricingCreateOneWithoutProductInput {
  create: PricingCreateWithoutProductInput
  connect: PricingWhereUniqueInput
}

input PricingCreateWithoutProductInput {
  rangePricing: Boolean!
  day: Int!
  week: Int!
  month: Int!
}

"""
An edge in a connection.
"""
type PricingEdge {
  """
  The item at the end of the edge.
  """
  node: Pricing!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PricingOrderByInput {
  id_ASC
  id_DESC
  rangePricing_ASC
  rangePricing_DESC
  day_ASC
  day_DESC
  week_ASC
  week_DESC
  month_ASC
  month_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PricingPreviousValues {
  id: ID!
  rangePricing: Boolean!
  day: Int!
  week: Int!
  month: Int!
}

type PricingSubscriptionPayload {
  mutation: MutationType!
  node: Pricing
  updatedFields: [String!]
  previousValues: PricingPreviousValues
}

input PricingSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PricingSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PricingSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PricingSubscriptionWhereInput!]
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
  node: PricingWhereInput
}

input PricingUpdateInput {
  rangePricing: Boolean
  day: Int
  week: Int
  month: Int
  product: ProductUpdateOneWithoutPricingInput
}

input PricingUpdateOneWithoutProductInput {
  create: PricingCreateWithoutProductInput
  connect: PricingWhereUniqueInput
  delete: Boolean
  update: PricingUpdateWithoutProductDataInput
  upsert: PricingUpsertWithoutProductInput
}

input PricingUpdateWithoutProductDataInput {
  rangePricing: Boolean
  day: Int
  week: Int
  month: Int
}

input PricingUpsertWithoutProductInput {
  update: PricingUpdateWithoutProductDataInput!
  create: PricingCreateWithoutProductInput!
}

input PricingWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PricingWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PricingWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PricingWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  rangePricing: Boolean
  """
  All values that are not equal to given value.
  """
  rangePricing_not: Boolean
  day: Int
  """
  All values that are not equal to given value.
  """
  day_not: Int
  """
  All values that are contained in given list.
  """
  day_in: [Int!]
  """
  All values that are not contained in given list.
  """
  day_not_in: [Int!]
  """
  All values less than the given value.
  """
  day_lt: Int
  """
  All values less than or equal the given value.
  """
  day_lte: Int
  """
  All values greater than the given value.
  """
  day_gt: Int
  """
  All values greater than or equal the given value.
  """
  day_gte: Int
  week: Int
  """
  All values that are not equal to given value.
  """
  week_not: Int
  """
  All values that are contained in given list.
  """
  week_in: [Int!]
  """
  All values that are not contained in given list.
  """
  week_not_in: [Int!]
  """
  All values less than the given value.
  """
  week_lt: Int
  """
  All values less than or equal the given value.
  """
  week_lte: Int
  """
  All values greater than the given value.
  """
  week_gt: Int
  """
  All values greater than or equal the given value.
  """
  week_gte: Int
  month: Int
  """
  All values that are not equal to given value.
  """
  month_not: Int
  """
  All values that are contained in given list.
  """
  month_in: [Int!]
  """
  All values that are not contained in given list.
  """
  month_not_in: [Int!]
  """
  All values less than the given value.
  """
  month_lt: Int
  """
  All values less than or equal the given value.
  """
  month_lte: Int
  """
  All values greater than the given value.
  """
  month_gt: Int
  """
  All values greater than or equal the given value.
  """
  month_gte: Int
  product: ProductWhereInput
}

input PricingWhereUniqueInput {
  id: ID
}

type Product implements Node {
  id: ID!
  name: String!
  shortDescription: String!
  longDescription: String!
  featuredImage(where: ImageWhereInput): Image!
  slug(where: SlugWhereInput): Slug!
  gallery(where: GalleryWhereInput, orderBy: GalleryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Gallery!]
  pricing(where: PricingWhereInput): Pricing!
  type(where: ProductTypeWhereInput): ProductType!
}

"""
A connection to a list of items.
"""
type ProductConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  shortDescription: String!
  longDescription: String!
  featuredImage: ImageCreateOneInput!
  slug: SlugCreateOneWithoutProductInput!
  gallery: GalleryCreateManyInput
  pricing: PricingCreateOneWithoutProductInput!
  type: ProductTypeCreateOneWithoutProductsInput!
}

input ProductCreateManyWithoutTypeInput {
  create: [ProductCreateWithoutTypeInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneWithoutPricingInput {
  create: ProductCreateWithoutPricingInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutSlugInput {
  create: ProductCreateWithoutSlugInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutPricingInput {
  name: String!
  shortDescription: String!
  longDescription: String!
  featuredImage: ImageCreateOneInput!
  slug: SlugCreateOneWithoutProductInput!
  gallery: GalleryCreateManyInput
  type: ProductTypeCreateOneWithoutProductsInput!
}

input ProductCreateWithoutSlugInput {
  name: String!
  shortDescription: String!
  longDescription: String!
  featuredImage: ImageCreateOneInput!
  gallery: GalleryCreateManyInput
  pricing: PricingCreateOneWithoutProductInput!
  type: ProductTypeCreateOneWithoutProductsInput!
}

input ProductCreateWithoutTypeInput {
  name: String!
  shortDescription: String!
  longDescription: String!
  featuredImage: ImageCreateOneInput!
  slug: SlugCreateOneWithoutProductInput!
  gallery: GalleryCreateManyInput
  pricing: PricingCreateOneWithoutProductInput!
}

"""
An edge in a connection.
"""
type ProductEdge {
  """
  The item at the end of the edge.
  """
  node: Product!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  shortDescription_ASC
  shortDescription_DESC
  longDescription_ASC
  longDescription_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  shortDescription: String!
  longDescription: String!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductSubscriptionWhereInput!]
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
  node: ProductWhereInput
}

type ProductType implements Node {
  id: ID!
  name: String!
  description: String!
  image(where: ImageWhereInput): Image
  slug(where: SlugWhereInput): Slug!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  category(where: CategoryWhereInput): Category!
  featured: Boolean!
}

"""
A connection to a list of items.
"""
type ProductTypeConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ProductTypeEdge]!
  aggregate: AggregateProductType!
}

input ProductTypeCreateInput {
  name: String!
  description: String!
  featured: Boolean
  image: ImageCreateOneInput
  slug: SlugCreateOneWithoutProductTypeInput!
  products: ProductCreateManyWithoutTypeInput
  category: CategoryCreateOneWithoutProductTypeInput!
}

input ProductTypeCreateManyWithoutCategoryInput {
  create: [ProductTypeCreateWithoutCategoryInput!]
  connect: [ProductTypeWhereUniqueInput!]
}

input ProductTypeCreateOneWithoutProductsInput {
  create: ProductTypeCreateWithoutProductsInput
  connect: ProductTypeWhereUniqueInput
}

input ProductTypeCreateOneWithoutSlugInput {
  create: ProductTypeCreateWithoutSlugInput
  connect: ProductTypeWhereUniqueInput
}

input ProductTypeCreateWithoutCategoryInput {
  name: String!
  description: String!
  featured: Boolean
  image: ImageCreateOneInput
  slug: SlugCreateOneWithoutProductTypeInput!
  products: ProductCreateManyWithoutTypeInput
}

input ProductTypeCreateWithoutProductsInput {
  name: String!
  description: String!
  featured: Boolean
  image: ImageCreateOneInput
  slug: SlugCreateOneWithoutProductTypeInput!
  category: CategoryCreateOneWithoutProductTypeInput!
}

input ProductTypeCreateWithoutSlugInput {
  name: String!
  description: String!
  featured: Boolean
  image: ImageCreateOneInput
  products: ProductCreateManyWithoutTypeInput
  category: CategoryCreateOneWithoutProductTypeInput!
}

"""
An edge in a connection.
"""
type ProductTypeEdge {
  """
  The item at the end of the edge.
  """
  node: ProductType!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ProductTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  featured_ASC
  featured_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductTypePreviousValues {
  id: ID!
  name: String!
  description: String!
  featured: Boolean!
}

type ProductTypeSubscriptionPayload {
  mutation: MutationType!
  node: ProductType
  updatedFields: [String!]
  previousValues: ProductTypePreviousValues
}

input ProductTypeSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductTypeSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductTypeSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductTypeSubscriptionWhereInput!]
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
  node: ProductTypeWhereInput
}

input ProductTypeUpdateInput {
  name: String
  description: String
  featured: Boolean
  image: ImageUpdateOneInput
  slug: SlugUpdateOneWithoutProductTypeInput
  products: ProductUpdateManyWithoutTypeInput
  category: CategoryUpdateOneWithoutProductTypeInput
}

input ProductTypeUpdateManyWithoutCategoryInput {
  create: [ProductTypeCreateWithoutCategoryInput!]
  connect: [ProductTypeWhereUniqueInput!]
  disconnect: [ProductTypeWhereUniqueInput!]
  delete: [ProductTypeWhereUniqueInput!]
  update: [ProductTypeUpdateWithWhereUniqueWithoutCategoryInput!]
  upsert: [ProductTypeUpsertWithWhereUniqueWithoutCategoryInput!]
}

input ProductTypeUpdateOneWithoutProductsInput {
  create: ProductTypeCreateWithoutProductsInput
  connect: ProductTypeWhereUniqueInput
  delete: Boolean
  update: ProductTypeUpdateWithoutProductsDataInput
  upsert: ProductTypeUpsertWithoutProductsInput
}

input ProductTypeUpdateOneWithoutSlugInput {
  create: ProductTypeCreateWithoutSlugInput
  connect: ProductTypeWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductTypeUpdateWithoutSlugDataInput
  upsert: ProductTypeUpsertWithoutSlugInput
}

input ProductTypeUpdateWithoutCategoryDataInput {
  name: String
  description: String
  featured: Boolean
  image: ImageUpdateOneInput
  slug: SlugUpdateOneWithoutProductTypeInput
  products: ProductUpdateManyWithoutTypeInput
}

input ProductTypeUpdateWithoutProductsDataInput {
  name: String
  description: String
  featured: Boolean
  image: ImageUpdateOneInput
  slug: SlugUpdateOneWithoutProductTypeInput
  category: CategoryUpdateOneWithoutProductTypeInput
}

input ProductTypeUpdateWithoutSlugDataInput {
  name: String
  description: String
  featured: Boolean
  image: ImageUpdateOneInput
  products: ProductUpdateManyWithoutTypeInput
  category: CategoryUpdateOneWithoutProductTypeInput
}

input ProductTypeUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductTypeWhereUniqueInput!
  data: ProductTypeUpdateWithoutCategoryDataInput!
}

input ProductTypeUpsertWithoutProductsInput {
  update: ProductTypeUpdateWithoutProductsDataInput!
  create: ProductTypeCreateWithoutProductsInput!
}

input ProductTypeUpsertWithoutSlugInput {
  update: ProductTypeUpdateWithoutSlugDataInput!
  create: ProductTypeCreateWithoutSlugInput!
}

input ProductTypeUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductTypeWhereUniqueInput!
  update: ProductTypeUpdateWithoutCategoryDataInput!
  create: ProductTypeCreateWithoutCategoryInput!
}

input ProductTypeWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductTypeWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductTypeWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductTypeWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  featured: Boolean
  """
  All values that are not equal to given value.
  """
  featured_not: Boolean
  image: ImageWhereInput
  slug: SlugWhereInput
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  category: CategoryWhereInput
}

input ProductTypeWhereUniqueInput {
  id: ID
}

input ProductUpdateInput {
  name: String
  shortDescription: String
  longDescription: String
  featuredImage: ImageUpdateOneInput
  slug: SlugUpdateOneWithoutProductInput
  gallery: GalleryUpdateManyInput
  pricing: PricingUpdateOneWithoutProductInput
  type: ProductTypeUpdateOneWithoutProductsInput
}

input ProductUpdateManyWithoutTypeInput {
  create: [ProductCreateWithoutTypeInput!]
  connect: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  delete: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutTypeInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutTypeInput!]
}

input ProductUpdateOneWithoutPricingInput {
  create: ProductCreateWithoutPricingInput
  connect: ProductWhereUniqueInput
  delete: Boolean
  update: ProductUpdateWithoutPricingDataInput
  upsert: ProductUpsertWithoutPricingInput
}

input ProductUpdateOneWithoutSlugInput {
  create: ProductCreateWithoutSlugInput
  connect: ProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductUpdateWithoutSlugDataInput
  upsert: ProductUpsertWithoutSlugInput
}

input ProductUpdateWithoutPricingDataInput {
  name: String
  shortDescription: String
  longDescription: String
  featuredImage: ImageUpdateOneInput
  slug: SlugUpdateOneWithoutProductInput
  gallery: GalleryUpdateManyInput
  type: ProductTypeUpdateOneWithoutProductsInput
}

input ProductUpdateWithoutSlugDataInput {
  name: String
  shortDescription: String
  longDescription: String
  featuredImage: ImageUpdateOneInput
  gallery: GalleryUpdateManyInput
  pricing: PricingUpdateOneWithoutProductInput
  type: ProductTypeUpdateOneWithoutProductsInput
}

input ProductUpdateWithoutTypeDataInput {
  name: String
  shortDescription: String
  longDescription: String
  featuredImage: ImageUpdateOneInput
  slug: SlugUpdateOneWithoutProductInput
  gallery: GalleryUpdateManyInput
  pricing: PricingUpdateOneWithoutProductInput
}

input ProductUpdateWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutTypeDataInput!
}

input ProductUpsertWithoutPricingInput {
  update: ProductUpdateWithoutPricingDataInput!
  create: ProductCreateWithoutPricingInput!
}

input ProductUpsertWithoutSlugInput {
  update: ProductUpdateWithoutSlugDataInput!
  create: ProductCreateWithoutSlugInput!
}

input ProductUpsertWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutTypeDataInput!
  create: ProductCreateWithoutTypeInput!
}

input ProductWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProductWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  shortDescription: String
  """
  All values that are not equal to given value.
  """
  shortDescription_not: String
  """
  All values that are contained in given list.
  """
  shortDescription_in: [String!]
  """
  All values that are not contained in given list.
  """
  shortDescription_not_in: [String!]
  """
  All values less than the given value.
  """
  shortDescription_lt: String
  """
  All values less than or equal the given value.
  """
  shortDescription_lte: String
  """
  All values greater than the given value.
  """
  shortDescription_gt: String
  """
  All values greater than or equal the given value.
  """
  shortDescription_gte: String
  """
  All values containing the given string.
  """
  shortDescription_contains: String
  """
  All values not containing the given string.
  """
  shortDescription_not_contains: String
  """
  All values starting with the given string.
  """
  shortDescription_starts_with: String
  """
  All values not starting with the given string.
  """
  shortDescription_not_starts_with: String
  """
  All values ending with the given string.
  """
  shortDescription_ends_with: String
  """
  All values not ending with the given string.
  """
  shortDescription_not_ends_with: String
  longDescription: String
  """
  All values that are not equal to given value.
  """
  longDescription_not: String
  """
  All values that are contained in given list.
  """
  longDescription_in: [String!]
  """
  All values that are not contained in given list.
  """
  longDescription_not_in: [String!]
  """
  All values less than the given value.
  """
  longDescription_lt: String
  """
  All values less than or equal the given value.
  """
  longDescription_lte: String
  """
  All values greater than the given value.
  """
  longDescription_gt: String
  """
  All values greater than or equal the given value.
  """
  longDescription_gte: String
  """
  All values containing the given string.
  """
  longDescription_contains: String
  """
  All values not containing the given string.
  """
  longDescription_not_contains: String
  """
  All values starting with the given string.
  """
  longDescription_starts_with: String
  """
  All values not starting with the given string.
  """
  longDescription_not_starts_with: String
  """
  All values ending with the given string.
  """
  longDescription_ends_with: String
  """
  All values not ending with the given string.
  """
  longDescription_not_ends_with: String
  featuredImage: ImageWhereInput
  slug: SlugWhereInput
  gallery_every: GalleryWhereInput
  gallery_some: GalleryWhereInput
  gallery_none: GalleryWhereInput
  pricing: PricingWhereInput
  type: ProductTypeWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Site implements Node {
  id: ID!
  name: String!
  location(where: LocationWhereInput): Location!
  slug(where: SlugWhereInput): Slug!
  company(where: CompanyWhereInput): Company!
  category(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
  team(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  custom(where: CustomizeSiteWhereInput): CustomizeSite
}

"""
A connection to a list of items.
"""
type SiteConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [SiteEdge]!
  aggregate: AggregateSite!
}

input SiteCreateInput {
  name: String!
  location: LocationCreateOneWithoutSiteInput!
  slug: SlugCreateOneWithoutSiteInput!
  company: CompanyCreateOneWithoutSitesInput!
  category: CategoryCreateManyWithoutSiteInput
  team: TeamCreateManyWithoutSiteInput
  custom: CustomizeSiteCreateOneInput
}

input SiteCreateManyWithoutCompanyInput {
  create: [SiteCreateWithoutCompanyInput!]
  connect: [SiteWhereUniqueInput!]
}

input SiteCreateOneWithoutCategoryInput {
  create: SiteCreateWithoutCategoryInput
  connect: SiteWhereUniqueInput
}

input SiteCreateOneWithoutLocationInput {
  create: SiteCreateWithoutLocationInput
  connect: SiteWhereUniqueInput
}

input SiteCreateOneWithoutSlugInput {
  create: SiteCreateWithoutSlugInput
  connect: SiteWhereUniqueInput
}

input SiteCreateOneWithoutTeamInput {
  create: SiteCreateWithoutTeamInput
  connect: SiteWhereUniqueInput
}

input SiteCreateWithoutCategoryInput {
  name: String!
  location: LocationCreateOneWithoutSiteInput!
  slug: SlugCreateOneWithoutSiteInput!
  company: CompanyCreateOneWithoutSitesInput!
  team: TeamCreateManyWithoutSiteInput
  custom: CustomizeSiteCreateOneInput
}

input SiteCreateWithoutCompanyInput {
  name: String!
  location: LocationCreateOneWithoutSiteInput!
  slug: SlugCreateOneWithoutSiteInput!
  category: CategoryCreateManyWithoutSiteInput
  team: TeamCreateManyWithoutSiteInput
  custom: CustomizeSiteCreateOneInput
}

input SiteCreateWithoutLocationInput {
  name: String!
  slug: SlugCreateOneWithoutSiteInput!
  company: CompanyCreateOneWithoutSitesInput!
  category: CategoryCreateManyWithoutSiteInput
  team: TeamCreateManyWithoutSiteInput
  custom: CustomizeSiteCreateOneInput
}

input SiteCreateWithoutSlugInput {
  name: String!
  location: LocationCreateOneWithoutSiteInput!
  company: CompanyCreateOneWithoutSitesInput!
  category: CategoryCreateManyWithoutSiteInput
  team: TeamCreateManyWithoutSiteInput
  custom: CustomizeSiteCreateOneInput
}

input SiteCreateWithoutTeamInput {
  name: String!
  location: LocationCreateOneWithoutSiteInput!
  slug: SlugCreateOneWithoutSiteInput!
  company: CompanyCreateOneWithoutSitesInput!
  category: CategoryCreateManyWithoutSiteInput
  custom: CustomizeSiteCreateOneInput
}

"""
An edge in a connection.
"""
type SiteEdge {
  """
  The item at the end of the edge.
  """
  node: Site!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum SiteOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SitePreviousValues {
  id: ID!
  name: String!
}

type SiteSubscriptionPayload {
  mutation: MutationType!
  node: Site
  updatedFields: [String!]
  previousValues: SitePreviousValues
}

input SiteSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [SiteSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [SiteSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [SiteSubscriptionWhereInput!]
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
  node: SiteWhereInput
}

input SiteUpdateInput {
  name: String
  location: LocationUpdateOneWithoutSiteInput
  slug: SlugUpdateOneWithoutSiteInput
  company: CompanyUpdateOneWithoutSitesInput
  category: CategoryUpdateManyWithoutSiteInput
  team: TeamUpdateManyWithoutSiteInput
  custom: CustomizeSiteUpdateOneInput
}

input SiteUpdateManyWithoutCompanyInput {
  create: [SiteCreateWithoutCompanyInput!]
  connect: [SiteWhereUniqueInput!]
  disconnect: [SiteWhereUniqueInput!]
  delete: [SiteWhereUniqueInput!]
  update: [SiteUpdateWithWhereUniqueWithoutCompanyInput!]
  upsert: [SiteUpsertWithWhereUniqueWithoutCompanyInput!]
}

input SiteUpdateOneWithoutCategoryInput {
  create: SiteCreateWithoutCategoryInput
  connect: SiteWhereUniqueInput
  delete: Boolean
  update: SiteUpdateWithoutCategoryDataInput
  upsert: SiteUpsertWithoutCategoryInput
}

input SiteUpdateOneWithoutLocationInput {
  create: SiteCreateWithoutLocationInput
  connect: SiteWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SiteUpdateWithoutLocationDataInput
  upsert: SiteUpsertWithoutLocationInput
}

input SiteUpdateOneWithoutSlugInput {
  create: SiteCreateWithoutSlugInput
  connect: SiteWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SiteUpdateWithoutSlugDataInput
  upsert: SiteUpsertWithoutSlugInput
}

input SiteUpdateOneWithoutTeamInput {
  create: SiteCreateWithoutTeamInput
  connect: SiteWhereUniqueInput
  delete: Boolean
  update: SiteUpdateWithoutTeamDataInput
  upsert: SiteUpsertWithoutTeamInput
}

input SiteUpdateWithoutCategoryDataInput {
  name: String
  location: LocationUpdateOneWithoutSiteInput
  slug: SlugUpdateOneWithoutSiteInput
  company: CompanyUpdateOneWithoutSitesInput
  team: TeamUpdateManyWithoutSiteInput
  custom: CustomizeSiteUpdateOneInput
}

input SiteUpdateWithoutCompanyDataInput {
  name: String
  location: LocationUpdateOneWithoutSiteInput
  slug: SlugUpdateOneWithoutSiteInput
  category: CategoryUpdateManyWithoutSiteInput
  team: TeamUpdateManyWithoutSiteInput
  custom: CustomizeSiteUpdateOneInput
}

input SiteUpdateWithoutLocationDataInput {
  name: String
  slug: SlugUpdateOneWithoutSiteInput
  company: CompanyUpdateOneWithoutSitesInput
  category: CategoryUpdateManyWithoutSiteInput
  team: TeamUpdateManyWithoutSiteInput
  custom: CustomizeSiteUpdateOneInput
}

input SiteUpdateWithoutSlugDataInput {
  name: String
  location: LocationUpdateOneWithoutSiteInput
  company: CompanyUpdateOneWithoutSitesInput
  category: CategoryUpdateManyWithoutSiteInput
  team: TeamUpdateManyWithoutSiteInput
  custom: CustomizeSiteUpdateOneInput
}

input SiteUpdateWithoutTeamDataInput {
  name: String
  location: LocationUpdateOneWithoutSiteInput
  slug: SlugUpdateOneWithoutSiteInput
  company: CompanyUpdateOneWithoutSitesInput
  category: CategoryUpdateManyWithoutSiteInput
  custom: CustomizeSiteUpdateOneInput
}

input SiteUpdateWithWhereUniqueWithoutCompanyInput {
  where: SiteWhereUniqueInput!
  data: SiteUpdateWithoutCompanyDataInput!
}

input SiteUpsertWithoutCategoryInput {
  update: SiteUpdateWithoutCategoryDataInput!
  create: SiteCreateWithoutCategoryInput!
}

input SiteUpsertWithoutLocationInput {
  update: SiteUpdateWithoutLocationDataInput!
  create: SiteCreateWithoutLocationInput!
}

input SiteUpsertWithoutSlugInput {
  update: SiteUpdateWithoutSlugDataInput!
  create: SiteCreateWithoutSlugInput!
}

input SiteUpsertWithoutTeamInput {
  update: SiteUpdateWithoutTeamDataInput!
  create: SiteCreateWithoutTeamInput!
}

input SiteUpsertWithWhereUniqueWithoutCompanyInput {
  where: SiteWhereUniqueInput!
  update: SiteUpdateWithoutCompanyDataInput!
  create: SiteCreateWithoutCompanyInput!
}

input SiteWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [SiteWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [SiteWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [SiteWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  location: LocationWhereInput
  slug: SlugWhereInput
  company: CompanyWhereInput
  category_every: CategoryWhereInput
  category_some: CategoryWhereInput
  category_none: CategoryWhereInput
  team_every: TeamWhereInput
  team_some: TeamWhereInput
  team_none: TeamWhereInput
  custom: CustomizeSiteWhereInput
}

input SiteWhereUniqueInput {
  id: ID
}

type Slug implements Node {
  id: ID!
  value: String!
  company(where: CompanyWhereInput): Company
  site(where: SiteWhereInput): Site
  category(where: CategoryWhereInput): Category
  productType(where: ProductTypeWhereInput): ProductType
  product(where: ProductWhereInput): Product
}

"""
A connection to a list of items.
"""
type SlugConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [SlugEdge]!
  aggregate: AggregateSlug!
}

input SlugCreateInput {
  value: String!
  company: CompanyCreateOneWithoutSlugInput
  site: SiteCreateOneWithoutSlugInput
  category: CategoryCreateOneWithoutSlugInput
  productType: ProductTypeCreateOneWithoutSlugInput
  product: ProductCreateOneWithoutSlugInput
}

input SlugCreateOneWithoutCategoryInput {
  create: SlugCreateWithoutCategoryInput
  connect: SlugWhereUniqueInput
}

input SlugCreateOneWithoutCompanyInput {
  create: SlugCreateWithoutCompanyInput
  connect: SlugWhereUniqueInput
}

input SlugCreateOneWithoutProductInput {
  create: SlugCreateWithoutProductInput
  connect: SlugWhereUniqueInput
}

input SlugCreateOneWithoutProductTypeInput {
  create: SlugCreateWithoutProductTypeInput
  connect: SlugWhereUniqueInput
}

input SlugCreateOneWithoutSiteInput {
  create: SlugCreateWithoutSiteInput
  connect: SlugWhereUniqueInput
}

input SlugCreateWithoutCategoryInput {
  value: String!
  company: CompanyCreateOneWithoutSlugInput
  site: SiteCreateOneWithoutSlugInput
  productType: ProductTypeCreateOneWithoutSlugInput
  product: ProductCreateOneWithoutSlugInput
}

input SlugCreateWithoutCompanyInput {
  value: String!
  site: SiteCreateOneWithoutSlugInput
  category: CategoryCreateOneWithoutSlugInput
  productType: ProductTypeCreateOneWithoutSlugInput
  product: ProductCreateOneWithoutSlugInput
}

input SlugCreateWithoutProductInput {
  value: String!
  company: CompanyCreateOneWithoutSlugInput
  site: SiteCreateOneWithoutSlugInput
  category: CategoryCreateOneWithoutSlugInput
  productType: ProductTypeCreateOneWithoutSlugInput
}

input SlugCreateWithoutProductTypeInput {
  value: String!
  company: CompanyCreateOneWithoutSlugInput
  site: SiteCreateOneWithoutSlugInput
  category: CategoryCreateOneWithoutSlugInput
  product: ProductCreateOneWithoutSlugInput
}

input SlugCreateWithoutSiteInput {
  value: String!
  company: CompanyCreateOneWithoutSlugInput
  category: CategoryCreateOneWithoutSlugInput
  productType: ProductTypeCreateOneWithoutSlugInput
  product: ProductCreateOneWithoutSlugInput
}

"""
An edge in a connection.
"""
type SlugEdge {
  """
  The item at the end of the edge.
  """
  node: Slug!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum SlugOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SlugPreviousValues {
  id: ID!
  value: String!
}

type SlugSubscriptionPayload {
  mutation: MutationType!
  node: Slug
  updatedFields: [String!]
  previousValues: SlugPreviousValues
}

input SlugSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [SlugSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [SlugSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [SlugSubscriptionWhereInput!]
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
  node: SlugWhereInput
}

input SlugUpdateInput {
  value: String
  company: CompanyUpdateOneWithoutSlugInput
  site: SiteUpdateOneWithoutSlugInput
  category: CategoryUpdateOneWithoutSlugInput
  productType: ProductTypeUpdateOneWithoutSlugInput
  product: ProductUpdateOneWithoutSlugInput
}

input SlugUpdateOneWithoutCategoryInput {
  create: SlugCreateWithoutCategoryInput
  connect: SlugWhereUniqueInput
  delete: Boolean
  update: SlugUpdateWithoutCategoryDataInput
  upsert: SlugUpsertWithoutCategoryInput
}

input SlugUpdateOneWithoutCompanyInput {
  create: SlugCreateWithoutCompanyInput
  connect: SlugWhereUniqueInput
  delete: Boolean
  update: SlugUpdateWithoutCompanyDataInput
  upsert: SlugUpsertWithoutCompanyInput
}

input SlugUpdateOneWithoutProductInput {
  create: SlugCreateWithoutProductInput
  connect: SlugWhereUniqueInput
  delete: Boolean
  update: SlugUpdateWithoutProductDataInput
  upsert: SlugUpsertWithoutProductInput
}

input SlugUpdateOneWithoutProductTypeInput {
  create: SlugCreateWithoutProductTypeInput
  connect: SlugWhereUniqueInput
  delete: Boolean
  update: SlugUpdateWithoutProductTypeDataInput
  upsert: SlugUpsertWithoutProductTypeInput
}

input SlugUpdateOneWithoutSiteInput {
  create: SlugCreateWithoutSiteInput
  connect: SlugWhereUniqueInput
  delete: Boolean
  update: SlugUpdateWithoutSiteDataInput
  upsert: SlugUpsertWithoutSiteInput
}

input SlugUpdateWithoutCategoryDataInput {
  value: String
  company: CompanyUpdateOneWithoutSlugInput
  site: SiteUpdateOneWithoutSlugInput
  productType: ProductTypeUpdateOneWithoutSlugInput
  product: ProductUpdateOneWithoutSlugInput
}

input SlugUpdateWithoutCompanyDataInput {
  value: String
  site: SiteUpdateOneWithoutSlugInput
  category: CategoryUpdateOneWithoutSlugInput
  productType: ProductTypeUpdateOneWithoutSlugInput
  product: ProductUpdateOneWithoutSlugInput
}

input SlugUpdateWithoutProductDataInput {
  value: String
  company: CompanyUpdateOneWithoutSlugInput
  site: SiteUpdateOneWithoutSlugInput
  category: CategoryUpdateOneWithoutSlugInput
  productType: ProductTypeUpdateOneWithoutSlugInput
}

input SlugUpdateWithoutProductTypeDataInput {
  value: String
  company: CompanyUpdateOneWithoutSlugInput
  site: SiteUpdateOneWithoutSlugInput
  category: CategoryUpdateOneWithoutSlugInput
  product: ProductUpdateOneWithoutSlugInput
}

input SlugUpdateWithoutSiteDataInput {
  value: String
  company: CompanyUpdateOneWithoutSlugInput
  category: CategoryUpdateOneWithoutSlugInput
  productType: ProductTypeUpdateOneWithoutSlugInput
  product: ProductUpdateOneWithoutSlugInput
}

input SlugUpsertWithoutCategoryInput {
  update: SlugUpdateWithoutCategoryDataInput!
  create: SlugCreateWithoutCategoryInput!
}

input SlugUpsertWithoutCompanyInput {
  update: SlugUpdateWithoutCompanyDataInput!
  create: SlugCreateWithoutCompanyInput!
}

input SlugUpsertWithoutProductInput {
  update: SlugUpdateWithoutProductDataInput!
  create: SlugCreateWithoutProductInput!
}

input SlugUpsertWithoutProductTypeInput {
  update: SlugUpdateWithoutProductTypeDataInput!
  create: SlugCreateWithoutProductTypeInput!
}

input SlugUpsertWithoutSiteInput {
  update: SlugUpdateWithoutSiteDataInput!
  create: SlugCreateWithoutSiteInput!
}

input SlugWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [SlugWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [SlugWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [SlugWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  value: String
  """
  All values that are not equal to given value.
  """
  value_not: String
  """
  All values that are contained in given list.
  """
  value_in: [String!]
  """
  All values that are not contained in given list.
  """
  value_not_in: [String!]
  """
  All values less than the given value.
  """
  value_lt: String
  """
  All values less than or equal the given value.
  """
  value_lte: String
  """
  All values greater than the given value.
  """
  value_gt: String
  """
  All values greater than or equal the given value.
  """
  value_gte: String
  """
  All values containing the given string.
  """
  value_contains: String
  """
  All values not containing the given string.
  """
  value_not_contains: String
  """
  All values starting with the given string.
  """
  value_starts_with: String
  """
  All values not starting with the given string.
  """
  value_not_starts_with: String
  """
  All values ending with the given string.
  """
  value_ends_with: String
  """
  All values not ending with the given string.
  """
  value_not_ends_with: String
  company: CompanyWhereInput
  site: SiteWhereInput
  category: CategoryWhereInput
  productType: ProductTypeWhereInput
  product: ProductWhereInput
}

input SlugWhereUniqueInput {
  id: ID
}

type Team implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  site(where: SiteWhereInput): Site!
  role: String!
}

"""
A connection to a list of items.
"""
type TeamConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  role: String!
  user: UserCreateOneWithoutTeamsInput!
  site: SiteCreateOneWithoutTeamInput!
}

input TeamCreateManyWithoutSiteInput {
  create: [TeamCreateWithoutSiteInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutUserInput {
  create: [TeamCreateWithoutUserInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutSiteInput {
  role: String!
  user: UserCreateOneWithoutTeamsInput!
}

input TeamCreateWithoutUserInput {
  role: String!
  site: SiteCreateOneWithoutTeamInput!
}

"""
An edge in a connection.
"""
type TeamEdge {
  """
  The item at the end of the edge.
  """
  node: Team!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TeamPreviousValues {
  id: ID!
  role: String!
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TeamSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TeamSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TeamSubscriptionWhereInput!]
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
  node: TeamWhereInput
}

input TeamUpdateInput {
  role: String
  user: UserUpdateOneWithoutTeamsInput
  site: SiteUpdateOneWithoutTeamInput
}

input TeamUpdateManyWithoutSiteInput {
  create: [TeamCreateWithoutSiteInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutSiteInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutSiteInput!]
}

input TeamUpdateManyWithoutUserInput {
  create: [TeamCreateWithoutUserInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutUserInput!]
}

input TeamUpdateWithoutSiteDataInput {
  role: String
  user: UserUpdateOneWithoutTeamsInput
}

input TeamUpdateWithoutUserDataInput {
  role: String
  site: SiteUpdateOneWithoutTeamInput
}

input TeamUpdateWithWhereUniqueWithoutSiteInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutSiteDataInput!
}

input TeamUpdateWithWhereUniqueWithoutUserInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutUserDataInput!
}

input TeamUpsertWithWhereUniqueWithoutSiteInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutSiteDataInput!
  create: TeamCreateWithoutSiteInput!
}

input TeamUpsertWithWhereUniqueWithoutUserInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutUserDataInput!
  create: TeamCreateWithoutUserInput!
}

input TeamWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TeamWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TeamWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TeamWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  role: String
  """
  All values that are not equal to given value.
  """
  role_not: String
  """
  All values that are contained in given list.
  """
  role_in: [String!]
  """
  All values that are not contained in given list.
  """
  role_not_in: [String!]
  """
  All values less than the given value.
  """
  role_lt: String
  """
  All values less than or equal the given value.
  """
  role_lte: String
  """
  All values greater than the given value.
  """
  role_gt: String
  """
  All values greater than or equal the given value.
  """
  role_gte: String
  """
  All values containing the given string.
  """
  role_contains: String
  """
  All values not containing the given string.
  """
  role_not_contains: String
  """
  All values starting with the given string.
  """
  role_starts_with: String
  """
  All values not starting with the given string.
  """
  role_not_starts_with: String
  """
  All values ending with the given string.
  """
  role_ends_with: String
  """
  All values not ending with the given string.
  """
  role_not_ends_with: String
  user: UserWhereInput
  site: SiteWhereInput
}

input TeamWhereUniqueInput {
  id: ID
}

type ThemeColor {
  color: String!
  shade: String!
}

"""
A connection to a list of items.
"""
type ThemeColorConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ThemeColorEdge]!
  aggregate: AggregateThemeColor!
}

input ThemeColorCreateInput {
  color: String!
  shade: String!
}

input ThemeColorCreateOneInput {
  create: ThemeColorCreateInput
}

"""
An edge in a connection.
"""
type ThemeColorEdge {
  """
  The item at the end of the edge.
  """
  node: ThemeColor!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ThemeColorOrderByInput {
  color_ASC
  color_DESC
  shade_ASC
  shade_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ThemeColorPreviousValues {
  color: String!
  shade: String!
}

type ThemeColorSubscriptionPayload {
  mutation: MutationType!
  node: ThemeColor
  updatedFields: [String!]
  previousValues: ThemeColorPreviousValues
}

input ThemeColorSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ThemeColorSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ThemeColorSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ThemeColorSubscriptionWhereInput!]
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
  node: ThemeColorWhereInput
}

input ThemeColorUpdateDataInput {
  color: String
  shade: String
}

input ThemeColorUpdateInput {
  color: String
  shade: String
}

input ThemeColorUpdateOneInput {
  create: ThemeColorCreateInput
  disconnect: Boolean
  delete: Boolean
  update: ThemeColorUpdateDataInput
  upsert: ThemeColorUpsertNestedInput
}

input ThemeColorUpsertNestedInput {
  update: ThemeColorUpdateDataInput!
  create: ThemeColorCreateInput!
}

input ThemeColorWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ThemeColorWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ThemeColorWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ThemeColorWhereInput!]
  color: String
  """
  All values that are not equal to given value.
  """
  color_not: String
  """
  All values that are contained in given list.
  """
  color_in: [String!]
  """
  All values that are not contained in given list.
  """
  color_not_in: [String!]
  """
  All values less than the given value.
  """
  color_lt: String
  """
  All values less than or equal the given value.
  """
  color_lte: String
  """
  All values greater than the given value.
  """
  color_gt: String
  """
  All values greater than or equal the given value.
  """
  color_gte: String
  """
  All values containing the given string.
  """
  color_contains: String
  """
  All values not containing the given string.
  """
  color_not_contains: String
  """
  All values starting with the given string.
  """
  color_starts_with: String
  """
  All values not starting with the given string.
  """
  color_not_starts_with: String
  """
  All values ending with the given string.
  """
  color_ends_with: String
  """
  All values not ending with the given string.
  """
  color_not_ends_with: String
  shade: String
  """
  All values that are not equal to given value.
  """
  shade_not: String
  """
  All values that are contained in given list.
  """
  shade_in: [String!]
  """
  All values that are not contained in given list.
  """
  shade_not_in: [String!]
  """
  All values less than the given value.
  """
  shade_lt: String
  """
  All values less than or equal the given value.
  """
  shade_lte: String
  """
  All values greater than the given value.
  """
  shade_gt: String
  """
  All values greater than or equal the given value.
  """
  shade_gte: String
  """
  All values containing the given string.
  """
  shade_contains: String
  """
  All values not containing the given string.
  """
  shade_not_contains: String
  """
  All values starting with the given string.
  """
  shade_starts_with: String
  """
  All values not starting with the given string.
  """
  shade_not_starts_with: String
  """
  All values ending with the given string.
  """
  shade_ends_with: String
  """
  All values not ending with the given string.
  """
  shade_not_ends_with: String
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  teams: TeamCreateManyWithoutUserInput
}

input UserCreateOneWithoutTeamsInput {
  create: UserCreateWithoutTeamsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTeamsInput {
  email: String!
  password: String!
  firstName: String!
  lastName: String!
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  firstName: String!
  lastName: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
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
  email: String
  password: String
  firstName: String
  lastName: String
  teams: TeamUpdateManyWithoutUserInput
}

input UserUpdateOneWithoutTeamsInput {
  create: UserCreateWithoutTeamsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutTeamsDataInput
  upsert: UserUpsertWithoutTeamsInput
}

input UserUpdateWithoutTeamsDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
}

input UserUpsertWithoutTeamsInput {
  update: UserUpdateWithoutTeamsDataInput!
  create: UserCreateWithoutTeamsInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  firstName: String
  """
  All values that are not equal to given value.
  """
  firstName_not: String
  """
  All values that are contained in given list.
  """
  firstName_in: [String!]
  """
  All values that are not contained in given list.
  """
  firstName_not_in: [String!]
  """
  All values less than the given value.
  """
  firstName_lt: String
  """
  All values less than or equal the given value.
  """
  firstName_lte: String
  """
  All values greater than the given value.
  """
  firstName_gt: String
  """
  All values greater than or equal the given value.
  """
  firstName_gte: String
  """
  All values containing the given string.
  """
  firstName_contains: String
  """
  All values not containing the given string.
  """
  firstName_not_contains: String
  """
  All values starting with the given string.
  """
  firstName_starts_with: String
  """
  All values not starting with the given string.
  """
  firstName_not_starts_with: String
  """
  All values ending with the given string.
  """
  firstName_ends_with: String
  """
  All values not ending with the given string.
  """
  firstName_not_ends_with: String
  lastName: String
  """
  All values that are not equal to given value.
  """
  lastName_not: String
  """
  All values that are contained in given list.
  """
  lastName_in: [String!]
  """
  All values that are not contained in given list.
  """
  lastName_not_in: [String!]
  """
  All values less than the given value.
  """
  lastName_lt: String
  """
  All values less than or equal the given value.
  """
  lastName_lte: String
  """
  All values greater than the given value.
  """
  lastName_gt: String
  """
  All values greater than or equal the given value.
  """
  lastName_gte: String
  """
  All values containing the given string.
  """
  lastName_contains: String
  """
  All values not containing the given string.
  """
  lastName_not_contains: String
  """
  All values starting with the given string.
  """
  lastName_starts_with: String
  """
  All values not starting with the given string.
  """
  lastName_not_starts_with: String
  """
  All values ending with the given string.
  """
  lastName_ends_with: String
  """
  All values not ending with the given string.
  """
  lastName_not_ends_with: String
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createCompany(data: CompanyCreateInput!): Company!
  createSite(data: SiteCreateInput!): Site!
  createCategory(data: CategoryCreateInput!): Category!
  createProductType(data: ProductTypeCreateInput!): ProductType!
  createProduct(data: ProductCreateInput!): Product!
  createLocation(data: LocationCreateInput!): Location!
  createTeam(data: TeamCreateInput!): Team!
  createPricing(data: PricingCreateInput!): Pricing!
  createImage(data: ImageCreateInput!): Image!
  createGallery(data: GalleryCreateInput!): Gallery!
  createSlug(data: SlugCreateInput!): Slug!
  createCustomizeSite(data: CustomizeSiteCreateInput!): CustomizeSite!
  createThemeColor(data: ThemeColorCreateInput!): ThemeColor!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateSite(data: SiteUpdateInput!, where: SiteWhereUniqueInput!): Site
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateProductType(data: ProductTypeUpdateInput!, where: ProductTypeWhereUniqueInput!): ProductType
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updatePricing(data: PricingUpdateInput!, where: PricingWhereUniqueInput!): Pricing
  updateSlug(data: SlugUpdateInput!, where: SlugWhereUniqueInput!): Slug
  updateCustomizeSite(data: CustomizeSiteUpdateInput!, where: CustomizeSiteWhereUniqueInput!): CustomizeSite
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteSite(where: SiteWhereUniqueInput!): Site
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteProductType(where: ProductTypeWhereUniqueInput!): ProductType
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deletePricing(where: PricingWhereUniqueInput!): Pricing
  deleteSlug(where: SlugWhereUniqueInput!): Slug
  deleteCustomizeSite(where: CustomizeSiteWhereUniqueInput!): CustomizeSite
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  upsertSite(where: SiteWhereUniqueInput!, create: SiteCreateInput!, update: SiteUpdateInput!): Site!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  upsertProductType(where: ProductTypeWhereUniqueInput!, create: ProductTypeCreateInput!, update: ProductTypeUpdateInput!): ProductType!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  upsertPricing(where: PricingWhereUniqueInput!, create: PricingCreateInput!, update: PricingUpdateInput!): Pricing!
  upsertSlug(where: SlugWhereUniqueInput!, create: SlugCreateInput!, update: SlugUpdateInput!): Slug!
  upsertCustomizeSite(where: CustomizeSiteWhereUniqueInput!, create: CustomizeSiteCreateInput!, update: CustomizeSiteUpdateInput!): CustomizeSite!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyCompanies(data: CompanyUpdateInput!, where: CompanyWhereInput): BatchPayload!
  updateManySites(data: SiteUpdateInput!, where: SiteWhereInput): BatchPayload!
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  updateManyProductTypes(data: ProductTypeUpdateInput!, where: ProductTypeWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyTeams(data: TeamUpdateInput!, where: TeamWhereInput): BatchPayload!
  updateManyPricings(data: PricingUpdateInput!, where: PricingWhereInput): BatchPayload!
  updateManyImages(data: ImageUpdateInput!, where: ImageWhereInput): BatchPayload!
  updateManyGalleries(data: GalleryUpdateInput!, where: GalleryWhereInput): BatchPayload!
  updateManySlugs(data: SlugUpdateInput!, where: SlugWhereInput): BatchPayload!
  updateManyCustomizeSites(data: CustomizeSiteUpdateInput!, where: CustomizeSiteWhereInput): BatchPayload!
  updateManyThemeColors(data: ThemeColorUpdateInput!, where: ThemeColorWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  deleteManySites(where: SiteWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  deleteManyProductTypes(where: ProductTypeWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  deleteManyPricings(where: PricingWhereInput): BatchPayload!
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  deleteManyGalleries(where: GalleryWhereInput): BatchPayload!
  deleteManySlugs(where: SlugWhereInput): BatchPayload!
  deleteManyCustomizeSites(where: CustomizeSiteWhereInput): BatchPayload!
  deleteManyThemeColors(where: ThemeColorWhereInput): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  sites(where: SiteWhereInput, orderBy: SiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Site]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  productTypes(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductType]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  pricings(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pricing]!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  galleries(where: GalleryWhereInput, orderBy: GalleryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Gallery]!
  slugs(where: SlugWhereInput, orderBy: SlugOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Slug]!
  customizeSites(where: CustomizeSiteWhereInput, orderBy: CustomizeSiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CustomizeSite]!
  themeColors(where: ThemeColorWhereInput, orderBy: ThemeColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ThemeColor]!
  user(where: UserWhereUniqueInput!): User
  company(where: CompanyWhereUniqueInput!): Company
  site(where: SiteWhereUniqueInput!): Site
  category(where: CategoryWhereUniqueInput!): Category
  productType(where: ProductTypeWhereUniqueInput!): ProductType
  product(where: ProductWhereUniqueInput!): Product
  location(where: LocationWhereUniqueInput!): Location
  team(where: TeamWhereUniqueInput!): Team
  pricing(where: PricingWhereUniqueInput!): Pricing
  slug(where: SlugWhereUniqueInput!): Slug
  customizeSite(where: CustomizeSiteWhereUniqueInput!): CustomizeSite
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  sitesConnection(where: SiteWhereInput, orderBy: SiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SiteConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  productTypesConnection(where: ProductTypeWhereInput, orderBy: ProductTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductTypeConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  pricingsConnection(where: PricingWhereInput, orderBy: PricingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PricingConnection!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  galleriesConnection(where: GalleryWhereInput, orderBy: GalleryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GalleryConnection!
  slugsConnection(where: SlugWhereInput, orderBy: SlugOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SlugConnection!
  customizeSitesConnection(where: CustomizeSiteWhereInput, orderBy: CustomizeSiteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CustomizeSiteConnection!
  themeColorsConnection(where: ThemeColorWhereInput, orderBy: ThemeColorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ThemeColorConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  site(where: SiteSubscriptionWhereInput): SiteSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  productType(where: ProductTypeSubscriptionWhereInput): ProductTypeSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  pricing(where: PricingSubscriptionWhereInput): PricingSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  gallery(where: GallerySubscriptionWhereInput): GallerySubscriptionPayload
  slug(where: SlugSubscriptionWhereInput): SlugSubscriptionPayload
  customizeSite(where: CustomizeSiteSubscriptionWhereInput): CustomizeSiteSubscriptionPayload
  themeColor(where: ThemeColorSubscriptionWhereInput): ThemeColorSubscriptionPayload
}
`

export type CompanyOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CategoryOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ThemeColorOrderByInput = 
  'color_ASC' |
  'color_DESC' |
  'shade_ASC' |
  'shade_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type GalleryOrderByInput = 
  'url_ASC' |
  'url_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SlugOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TeamOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SiteOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductTypeOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'featured_ASC' |
  'featured_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'shortDescription_ASC' |
  'shortDescription_DESC' |
  'longDescription_ASC' |
  'longDescription_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ImageOrderByInput = 
  'url_ASC' |
  'url_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CustomizeSiteOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'headerText_ASC' |
  'headerText_DESC' |
  'headerImage_ASC' |
  'headerImage_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export type LocationOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'lng_ASC' |
  'lng_DESC' |
  'address_ASC' |
  'address_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PricingOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'rangePricing_ASC' |
  'rangePricing_DESC' |
  'day_ASC' |
  'day_DESC' |
  'week_ASC' |
  'week_DESC' |
  'month_ASC' |
  'month_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface ProductTypeCreateInput {
  name: String
  description: String
  featured?: Boolean
  image?: ImageCreateOneInput
  slug: SlugCreateOneWithoutProductTypeInput
  products?: ProductCreateManyWithoutTypeInput
  category: CategoryCreateOneWithoutProductTypeInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  teams_every?: TeamWhereInput
  teams_some?: TeamWhereInput
  teams_none?: TeamWhereInput
}

export interface SlugCreateInput {
  value: String
  company?: CompanyCreateOneWithoutSlugInput
  site?: SiteCreateOneWithoutSlugInput
  category?: CategoryCreateOneWithoutSlugInput
  productType?: ProductTypeCreateOneWithoutSlugInput
  product?: ProductCreateOneWithoutSlugInput
}

export interface CustomizeSiteWhereInput {
  AND?: CustomizeSiteWhereInput[] | CustomizeSiteWhereInput
  OR?: CustomizeSiteWhereInput[] | CustomizeSiteWhereInput
  NOT?: CustomizeSiteWhereInput[] | CustomizeSiteWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  headerText?: String
  headerText_not?: String
  headerText_in?: String[] | String
  headerText_not_in?: String[] | String
  headerText_lt?: String
  headerText_lte?: String
  headerText_gt?: String
  headerText_gte?: String
  headerText_contains?: String
  headerText_not_contains?: String
  headerText_starts_with?: String
  headerText_not_starts_with?: String
  headerText_ends_with?: String
  headerText_not_ends_with?: String
  headerImage?: String
  headerImage_not?: String
  headerImage_in?: String[] | String
  headerImage_not_in?: String[] | String
  headerImage_lt?: String
  headerImage_lte?: String
  headerImage_gt?: String
  headerImage_gte?: String
  headerImage_contains?: String
  headerImage_not_contains?: String
  headerImage_starts_with?: String
  headerImage_not_starts_with?: String
  headerImage_ends_with?: String
  headerImage_not_ends_with?: String
  theme?: ThemeColorWhereInput
}

export interface ProductTypeCreateManyWithoutCategoryInput {
  create?: ProductTypeCreateWithoutCategoryInput[] | ProductTypeCreateWithoutCategoryInput
  connect?: ProductTypeWhereUniqueInput[] | ProductTypeWhereUniqueInput
}

export interface CustomizeSiteUpsertNestedInput {
  update: CustomizeSiteUpdateDataInput
  create: CustomizeSiteCreateInput
}

export interface ProductTypeCreateWithoutCategoryInput {
  name: String
  description: String
  featured?: Boolean
  image?: ImageCreateOneInput
  slug: SlugCreateOneWithoutProductTypeInput
  products?: ProductCreateManyWithoutTypeInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  teams?: TeamUpdateManyWithoutUserInput
}

export interface ImageCreateOneInput {
  create?: ImageCreateInput
}

export interface PricingWhereInput {
  AND?: PricingWhereInput[] | PricingWhereInput
  OR?: PricingWhereInput[] | PricingWhereInput
  NOT?: PricingWhereInput[] | PricingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  rangePricing?: Boolean
  rangePricing_not?: Boolean
  day?: Int
  day_not?: Int
  day_in?: Int[] | Int
  day_not_in?: Int[] | Int
  day_lt?: Int
  day_lte?: Int
  day_gt?: Int
  day_gte?: Int
  week?: Int
  week_not?: Int
  week_in?: Int[] | Int
  week_not_in?: Int[] | Int
  week_lt?: Int
  week_lte?: Int
  week_gt?: Int
  week_gte?: Int
  month?: Int
  month_not?: Int
  month_in?: Int[] | Int
  month_not_in?: Int[] | Int
  month_lt?: Int
  month_lte?: Int
  month_gt?: Int
  month_gte?: Int
  product?: ProductWhereInput
}

export interface ImageCreateInput {
  url: String
}

export interface CustomizeSiteSubscriptionWhereInput {
  AND?: CustomizeSiteSubscriptionWhereInput[] | CustomizeSiteSubscriptionWhereInput
  OR?: CustomizeSiteSubscriptionWhereInput[] | CustomizeSiteSubscriptionWhereInput
  NOT?: CustomizeSiteSubscriptionWhereInput[] | CustomizeSiteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CustomizeSiteWhereInput
}

export interface SlugCreateOneWithoutProductTypeInput {
  create?: SlugCreateWithoutProductTypeInput
  connect?: SlugWhereUniqueInput
}

export interface GallerySubscriptionWhereInput {
  AND?: GallerySubscriptionWhereInput[] | GallerySubscriptionWhereInput
  OR?: GallerySubscriptionWhereInput[] | GallerySubscriptionWhereInput
  NOT?: GallerySubscriptionWhereInput[] | GallerySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GalleryWhereInput
}

export interface SlugCreateWithoutProductTypeInput {
  value: String
  company?: CompanyCreateOneWithoutSlugInput
  site?: SiteCreateOneWithoutSlugInput
  category?: CategoryCreateOneWithoutSlugInput
  product?: ProductCreateOneWithoutSlugInput
}

export interface GalleryWhereInput {
  AND?: GalleryWhereInput[] | GalleryWhereInput
  OR?: GalleryWhereInput[] | GalleryWhereInput
  NOT?: GalleryWhereInput[] | GalleryWhereInput
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface ProductCreateOneWithoutSlugInput {
  create?: ProductCreateWithoutSlugInput
  connect?: ProductWhereUniqueInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  shortDescription?: String
  shortDescription_not?: String
  shortDescription_in?: String[] | String
  shortDescription_not_in?: String[] | String
  shortDescription_lt?: String
  shortDescription_lte?: String
  shortDescription_gt?: String
  shortDescription_gte?: String
  shortDescription_contains?: String
  shortDescription_not_contains?: String
  shortDescription_starts_with?: String
  shortDescription_not_starts_with?: String
  shortDescription_ends_with?: String
  shortDescription_not_ends_with?: String
  longDescription?: String
  longDescription_not?: String
  longDescription_in?: String[] | String
  longDescription_not_in?: String[] | String
  longDescription_lt?: String
  longDescription_lte?: String
  longDescription_gt?: String
  longDescription_gte?: String
  longDescription_contains?: String
  longDescription_not_contains?: String
  longDescription_starts_with?: String
  longDescription_not_starts_with?: String
  longDescription_ends_with?: String
  longDescription_not_ends_with?: String
  featuredImage?: ImageWhereInput
  slug?: SlugWhereInput
  gallery_every?: GalleryWhereInput
  gallery_some?: GalleryWhereInput
  gallery_none?: GalleryWhereInput
  pricing?: PricingWhereInput
  type?: ProductTypeWhereInput
}

export interface ProductCreateWithoutSlugInput {
  name: String
  shortDescription: String
  longDescription: String
  featuredImage: ImageCreateOneInput
  gallery?: GalleryCreateManyInput
  pricing: PricingCreateOneWithoutProductInput
  type: ProductTypeCreateOneWithoutProductsInput
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocationWhereInput
}

export interface GalleryCreateManyInput {
  create?: GalleryCreateInput[] | GalleryCreateInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface GalleryCreateInput {
  url: String
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CategoryWhereInput
}

export interface PricingCreateOneWithoutProductInput {
  create?: PricingCreateWithoutProductInput
  connect?: PricingWhereUniqueInput
}

export interface ProductTypeWhereInput {
  AND?: ProductTypeWhereInput[] | ProductTypeWhereInput
  OR?: ProductTypeWhereInput[] | ProductTypeWhereInput
  NOT?: ProductTypeWhereInput[] | ProductTypeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  featured?: Boolean
  featured_not?: Boolean
  image?: ImageWhereInput
  slug?: SlugWhereInput
  products_every?: ProductWhereInput
  products_some?: ProductWhereInput
  products_none?: ProductWhereInput
  category?: CategoryWhereInput
}

export interface PricingCreateWithoutProductInput {
  rangePricing: Boolean
  day: Int
  week: Int
  month: Int
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface ProductTypeCreateOneWithoutProductsInput {
  create?: ProductTypeCreateWithoutProductsInput
  connect?: ProductTypeWhereUniqueInput
}

export interface CompanyWhereInput {
  AND?: CompanyWhereInput[] | CompanyWhereInput
  OR?: CompanyWhereInput[] | CompanyWhereInput
  NOT?: CompanyWhereInput[] | CompanyWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  slug?: SlugWhereInput
  sites_every?: SiteWhereInput
  sites_some?: SiteWhereInput
  sites_none?: SiteWhereInput
}

export interface ProductTypeCreateWithoutProductsInput {
  name: String
  description: String
  featured?: Boolean
  image?: ImageCreateOneInput
  slug: SlugCreateOneWithoutProductTypeInput
  category: CategoryCreateOneWithoutProductTypeInput
}

export interface ThemeColorUpdateInput {
  color?: String
  shade?: String
}

export interface CategoryCreateOneWithoutProductTypeInput {
  create?: CategoryCreateWithoutProductTypeInput
  connect?: CategoryWhereUniqueInput
}

export interface SiteWhereInput {
  AND?: SiteWhereInput[] | SiteWhereInput
  OR?: SiteWhereInput[] | SiteWhereInput
  NOT?: SiteWhereInput[] | SiteWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  location?: LocationWhereInput
  slug?: SlugWhereInput
  company?: CompanyWhereInput
  category_every?: CategoryWhereInput
  category_some?: CategoryWhereInput
  category_none?: CategoryWhereInput
  team_every?: TeamWhereInput
  team_some?: TeamWhereInput
  team_none?: TeamWhereInput
  custom?: CustomizeSiteWhereInput
}

export interface CategoryCreateWithoutProductTypeInput {
  name: String
  description: String
  slug: SlugCreateOneWithoutCategoryInput
  site: SiteCreateOneWithoutCategoryInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface SiteCreateOneWithoutCategoryInput {
  create?: SiteCreateWithoutCategoryInput
  connect?: SiteWhereUniqueInput
}

export interface SiteWhereUniqueInput {
  id?: ID_Input
}

export interface SiteCreateWithoutCategoryInput {
  name: String
  location: LocationCreateOneWithoutSiteInput
  slug: SlugCreateOneWithoutSiteInput
  company: CompanyCreateOneWithoutSitesInput
  team?: TeamCreateManyWithoutSiteInput
  custom?: CustomizeSiteCreateOneInput
}

export interface ProductTypeWhereUniqueInput {
  id?: ID_Input
}

export interface TeamCreateManyWithoutSiteInput {
  create?: TeamCreateWithoutSiteInput[] | TeamCreateWithoutSiteInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface TeamCreateWithoutSiteInput {
  role: String
  user: UserCreateOneWithoutTeamsInput
}

export interface PricingWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput
}

export interface CustomizeSiteWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutTeamsInput {
  email: String
  password: String
  firstName: String
  lastName: String
}

export interface ImageUpdateInput {
  url?: String
}

export interface CustomizeSiteCreateOneInput {
  create?: CustomizeSiteCreateInput
  connect?: CustomizeSiteWhereUniqueInput
}

export interface SlugUpdateInput {
  value?: String
  company?: CompanyUpdateOneWithoutSlugInput
  site?: SiteUpdateOneWithoutSlugInput
  category?: CategoryUpdateOneWithoutSlugInput
  productType?: ProductTypeUpdateOneWithoutSlugInput
  product?: ProductUpdateOneWithoutSlugInput
}

export interface CustomizeSiteCreateInput {
  headerText?: String
  headerImage?: String
  theme?: ThemeColorCreateOneInput
}

export interface ProductUpdateWithoutPricingDataInput {
  name?: String
  shortDescription?: String
  longDescription?: String
  featuredImage?: ImageUpdateOneInput
  slug?: SlugUpdateOneWithoutProductInput
  gallery?: GalleryUpdateManyInput
  type?: ProductTypeUpdateOneWithoutProductsInput
}

export interface ThemeColorCreateOneInput {
  create?: ThemeColorCreateInput
}

export interface PricingUpdateInput {
  rangePricing?: Boolean
  day?: Int
  week?: Int
  month?: Int
  product?: ProductUpdateOneWithoutPricingInput
}

export interface ThemeColorCreateInput {
  color: String
  shade: String
}

export interface SiteUpsertWithoutLocationInput {
  update: SiteUpdateWithoutLocationDataInput
  create: SiteCreateWithoutLocationInput
}

export interface ProductCreateManyWithoutTypeInput {
  create?: ProductCreateWithoutTypeInput[] | ProductCreateWithoutTypeInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
}

export interface SiteUpdateOneWithoutLocationInput {
  create?: SiteCreateWithoutLocationInput
  connect?: SiteWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SiteUpdateWithoutLocationDataInput
  upsert?: SiteUpsertWithoutLocationInput
}

export interface ProductCreateWithoutTypeInput {
  name: String
  shortDescription: String
  longDescription: String
  featuredImage: ImageCreateOneInput
  slug: SlugCreateOneWithoutProductInput
  gallery?: GalleryCreateManyInput
  pricing: PricingCreateOneWithoutProductInput
}

export interface ProductUpdateInput {
  name?: String
  shortDescription?: String
  longDescription?: String
  featuredImage?: ImageUpdateOneInput
  slug?: SlugUpdateOneWithoutProductInput
  gallery?: GalleryUpdateManyInput
  pricing?: PricingUpdateOneWithoutProductInput
  type?: ProductTypeUpdateOneWithoutProductsInput
}

export interface SlugCreateOneWithoutProductInput {
  create?: SlugCreateWithoutProductInput
  connect?: SlugWhereUniqueInput
}

export interface CategoryUpdateInput {
  name?: String
  description?: String
  slug?: SlugUpdateOneWithoutCategoryInput
  productType?: ProductTypeUpdateManyWithoutCategoryInput
  site?: SiteUpdateOneWithoutCategoryInput
}

export interface SlugCreateWithoutProductInput {
  value: String
  company?: CompanyCreateOneWithoutSlugInput
  site?: SiteCreateOneWithoutSlugInput
  category?: CategoryCreateOneWithoutSlugInput
  productType?: ProductTypeCreateOneWithoutSlugInput
}

export interface CompanyUpdateInput {
  name?: String
  slug?: SlugUpdateOneWithoutCompanyInput
  sites?: SiteUpdateManyWithoutCompanyInput
}

export interface ProductTypeCreateOneWithoutSlugInput {
  create?: ProductTypeCreateWithoutSlugInput
  connect?: ProductTypeWhereUniqueInput
}

export interface SiteUpsertWithoutTeamInput {
  update: SiteUpdateWithoutTeamDataInput
  create: SiteCreateWithoutTeamInput
}

export interface ProductTypeCreateWithoutSlugInput {
  name: String
  description: String
  featured?: Boolean
  image?: ImageCreateOneInput
  products?: ProductCreateManyWithoutTypeInput
  category: CategoryCreateOneWithoutProductTypeInput
}

export interface CompanyUpsertWithoutSlugInput {
  update: CompanyUpdateWithoutSlugDataInput
  create: CompanyCreateWithoutSlugInput
}

export interface CompanyCreateInput {
  name: String
  slug: SlugCreateOneWithoutCompanyInput
  sites?: SiteCreateManyWithoutCompanyInput
}

export interface CategoryUpsertWithWhereUniqueWithoutSiteInput {
  where: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutSiteDataInput
  create: CategoryCreateWithoutSiteInput
}

export interface SiteCreateInput {
  name: String
  location: LocationCreateOneWithoutSiteInput
  slug: SlugCreateOneWithoutSiteInput
  company: CompanyCreateOneWithoutSitesInput
  category?: CategoryCreateManyWithoutSiteInput
  team?: TeamCreateManyWithoutSiteInput
  custom?: CustomizeSiteCreateOneInput
}

export interface SiteUpsertWithoutSlugInput {
  update: SiteUpdateWithoutSlugDataInput
  create: SiteCreateWithoutSlugInput
}

export interface CategoryCreateInput {
  name: String
  description: String
  slug: SlugCreateOneWithoutCategoryInput
  productType?: ProductTypeCreateManyWithoutCategoryInput
  site: SiteCreateOneWithoutCategoryInput
}

export interface SlugUpsertWithoutCompanyInput {
  update: SlugUpdateWithoutCompanyDataInput
  create: SlugCreateWithoutCompanyInput
}

export interface CategoryUpsertWithoutProductTypeInput {
  update: CategoryUpdateWithoutProductTypeDataInput
  create: CategoryCreateWithoutProductTypeInput
}

export interface ProductTypeUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductTypeWhereUniqueInput
  update: ProductTypeUpdateWithoutCategoryDataInput
  create: ProductTypeCreateWithoutCategoryInput
}

export interface ProductCreateInput {
  name: String
  shortDescription: String
  longDescription: String
  featuredImage: ImageCreateOneInput
  slug: SlugCreateOneWithoutProductInput
  gallery?: GalleryCreateManyInput
  pricing: PricingCreateOneWithoutProductInput
  type: ProductTypeCreateOneWithoutProductsInput
}

export interface SlugUpsertWithoutProductInput {
  update: SlugUpdateWithoutProductDataInput
  create: SlugCreateWithoutProductInput
}

export interface LocationCreateInput {
  lat: Float
  lng: Float
  address: String
  site?: SiteCreateOneWithoutLocationInput
}

export interface ProductTypeUpdateWithoutSlugDataInput {
  name?: String
  description?: String
  featured?: Boolean
  image?: ImageUpdateOneInput
  products?: ProductUpdateManyWithoutTypeInput
  category?: CategoryUpdateOneWithoutProductTypeInput
}

export interface SiteCreateOneWithoutLocationInput {
  create?: SiteCreateWithoutLocationInput
  connect?: SiteWhereUniqueInput
}

export interface SlugUpdateWithoutProductDataInput {
  value?: String
  company?: CompanyUpdateOneWithoutSlugInput
  site?: SiteUpdateOneWithoutSlugInput
  category?: CategoryUpdateOneWithoutSlugInput
  productType?: ProductTypeUpdateOneWithoutSlugInput
}

export interface SiteCreateWithoutLocationInput {
  name: String
  slug: SlugCreateOneWithoutSiteInput
  company: CompanyCreateOneWithoutSitesInput
  category?: CategoryCreateManyWithoutSiteInput
  team?: TeamCreateManyWithoutSiteInput
  custom?: CustomizeSiteCreateOneInput
}

export interface ProductUpdateWithoutTypeDataInput {
  name?: String
  shortDescription?: String
  longDescription?: String
  featuredImage?: ImageUpdateOneInput
  slug?: SlugUpdateOneWithoutProductInput
  gallery?: GalleryUpdateManyInput
  pricing?: PricingUpdateOneWithoutProductInput
}

export interface TeamCreateInput {
  role: String
  user: UserCreateOneWithoutTeamsInput
  site: SiteCreateOneWithoutTeamInput
}

export interface ProductUpdateManyWithoutTypeInput {
  create?: ProductCreateWithoutTypeInput[] | ProductCreateWithoutTypeInput
  connect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput[] | ProductWhereUniqueInput
  update?: ProductUpdateWithWhereUniqueWithoutTypeInput[] | ProductUpdateWithWhereUniqueWithoutTypeInput
  upsert?: ProductUpsertWithWhereUniqueWithoutTypeInput[] | ProductUpsertWithWhereUniqueWithoutTypeInput
}

export interface PricingCreateInput {
  rangePricing: Boolean
  day: Int
  week: Int
  month: Int
  product: ProductCreateOneWithoutPricingInput
}

export interface ProductUpsertWithoutSlugInput {
  update: ProductUpdateWithoutSlugDataInput
  create: ProductCreateWithoutSlugInput
}

export interface ProductCreateOneWithoutPricingInput {
  create?: ProductCreateWithoutPricingInput
  connect?: ProductWhereUniqueInput
}

export interface UserCreateInput {
  email: String
  password: String
  firstName: String
  lastName: String
  teams?: TeamCreateManyWithoutUserInput
}

export interface ProductCreateWithoutPricingInput {
  name: String
  shortDescription: String
  longDescription: String
  featuredImage: ImageCreateOneInput
  slug: SlugCreateOneWithoutProductInput
  gallery?: GalleryCreateManyInput
  type: ProductTypeCreateOneWithoutProductsInput
}

export interface TeamCreateWithoutUserInput {
  role: String
  site: SiteCreateOneWithoutTeamInput
}

export interface ThemeColorWhereInput {
  AND?: ThemeColorWhereInput[] | ThemeColorWhereInput
  OR?: ThemeColorWhereInput[] | ThemeColorWhereInput
  NOT?: ThemeColorWhereInput[] | ThemeColorWhereInput
  color?: String
  color_not?: String
  color_in?: String[] | String
  color_not_in?: String[] | String
  color_lt?: String
  color_lte?: String
  color_gt?: String
  color_gte?: String
  color_contains?: String
  color_not_contains?: String
  color_starts_with?: String
  color_not_starts_with?: String
  color_ends_with?: String
  color_not_ends_with?: String
  shade?: String
  shade_not?: String
  shade_in?: String[] | String
  shade_not_in?: String[] | String
  shade_lt?: String
  shade_lte?: String
  shade_gt?: String
  shade_gte?: String
  shade_contains?: String
  shade_not_contains?: String
  shade_starts_with?: String
  shade_not_starts_with?: String
  shade_ends_with?: String
  shade_not_ends_with?: String
}

export interface SiteCreateWithoutTeamInput {
  name: String
  location: LocationCreateOneWithoutSiteInput
  slug: SlugCreateOneWithoutSiteInput
  company: CompanyCreateOneWithoutSitesInput
  category?: CategoryCreateManyWithoutSiteInput
  custom?: CustomizeSiteCreateOneInput
}

export interface SiteUpsertWithoutCategoryInput {
  update: SiteUpdateWithoutCategoryDataInput
  create: SiteCreateWithoutCategoryInput
}

export interface LocationCreateWithoutSiteInput {
  lat: Float
  lng: Float
  address: String
}

export interface TeamUpdateManyWithoutUserInput {
  create?: TeamCreateWithoutUserInput[] | TeamCreateWithoutUserInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutUserInput[] | TeamUpdateWithWhereUniqueWithoutUserInput
  upsert?: TeamUpsertWithWhereUniqueWithoutUserInput[] | TeamUpsertWithWhereUniqueWithoutUserInput
}

export interface SlugCreateWithoutSiteInput {
  value: String
  company?: CompanyCreateOneWithoutSlugInput
  category?: CategoryCreateOneWithoutSlugInput
  productType?: ProductTypeCreateOneWithoutSlugInput
  product?: ProductCreateOneWithoutSlugInput
}

export interface TeamUpdateWithWhereUniqueWithoutUserInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutUserDataInput
}

export interface CompanyCreateWithoutSlugInput {
  name: String
  sites?: SiteCreateManyWithoutCompanyInput
}

export interface TeamUpdateWithoutUserDataInput {
  role?: String
  site?: SiteUpdateOneWithoutTeamInput
}

export interface SiteCreateWithoutCompanyInput {
  name: String
  location: LocationCreateOneWithoutSiteInput
  slug: SlugCreateOneWithoutSiteInput
  category?: CategoryCreateManyWithoutSiteInput
  team?: TeamCreateManyWithoutSiteInput
  custom?: CustomizeSiteCreateOneInput
}

export interface SiteUpdateOneWithoutTeamInput {
  create?: SiteCreateWithoutTeamInput
  connect?: SiteWhereUniqueInput
  delete?: Boolean
  update?: SiteUpdateWithoutTeamDataInput
  upsert?: SiteUpsertWithoutTeamInput
}

export interface CategoryCreateWithoutSiteInput {
  name: String
  description: String
  slug: SlugCreateOneWithoutCategoryInput
  productType?: ProductTypeCreateManyWithoutCategoryInput
}

export interface SiteUpdateWithoutTeamDataInput {
  name?: String
  location?: LocationUpdateOneWithoutSiteInput
  slug?: SlugUpdateOneWithoutSiteInput
  company?: CompanyUpdateOneWithoutSitesInput
  category?: CategoryUpdateManyWithoutSiteInput
  custom?: CustomizeSiteUpdateOneInput
}

export interface SlugCreateWithoutCategoryInput {
  value: String
  company?: CompanyCreateOneWithoutSlugInput
  site?: SiteCreateOneWithoutSlugInput
  productType?: ProductTypeCreateOneWithoutSlugInput
  product?: ProductCreateOneWithoutSlugInput
}

export interface LocationUpdateOneWithoutSiteInput {
  create?: LocationCreateWithoutSiteInput
  connect?: LocationWhereUniqueInput
  delete?: Boolean
  update?: LocationUpdateWithoutSiteDataInput
  upsert?: LocationUpsertWithoutSiteInput
}

export interface SiteCreateWithoutSlugInput {
  name: String
  location: LocationCreateOneWithoutSiteInput
  company: CompanyCreateOneWithoutSitesInput
  category?: CategoryCreateManyWithoutSiteInput
  team?: TeamCreateManyWithoutSiteInput
  custom?: CustomizeSiteCreateOneInput
}

export interface LocationUpdateWithoutSiteDataInput {
  lat?: Float
  lng?: Float
  address?: String
}

export interface CompanyCreateWithoutSitesInput {
  name: String
  slug: SlugCreateOneWithoutCompanyInput
}

export interface LocationUpsertWithoutSiteInput {
  update: LocationUpdateWithoutSiteDataInput
  create: LocationCreateWithoutSiteInput
}

export interface SlugCreateWithoutCompanyInput {
  value: String
  site?: SiteCreateOneWithoutSlugInput
  category?: CategoryCreateOneWithoutSlugInput
  productType?: ProductTypeCreateOneWithoutSlugInput
  product?: ProductCreateOneWithoutSlugInput
}

export interface SlugUpdateOneWithoutSiteInput {
  create?: SlugCreateWithoutSiteInput
  connect?: SlugWhereUniqueInput
  delete?: Boolean
  update?: SlugUpdateWithoutSiteDataInput
  upsert?: SlugUpsertWithoutSiteInput
}

export interface CategoryCreateWithoutSlugInput {
  name: String
  description: String
  productType?: ProductTypeCreateManyWithoutCategoryInput
  site: SiteCreateOneWithoutCategoryInput
}

export interface SlugUpdateWithoutSiteDataInput {
  value?: String
  company?: CompanyUpdateOneWithoutSlugInput
  category?: CategoryUpdateOneWithoutSlugInput
  productType?: ProductTypeUpdateOneWithoutSlugInput
  product?: ProductUpdateOneWithoutSlugInput
}

export interface ThemeColorSubscriptionWhereInput {
  AND?: ThemeColorSubscriptionWhereInput[] | ThemeColorSubscriptionWhereInput
  OR?: ThemeColorSubscriptionWhereInput[] | ThemeColorSubscriptionWhereInput
  NOT?: ThemeColorSubscriptionWhereInput[] | ThemeColorSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ThemeColorWhereInput
}

export interface CompanyUpdateOneWithoutSlugInput {
  create?: CompanyCreateWithoutSlugInput
  connect?: CompanyWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CompanyUpdateWithoutSlugDataInput
  upsert?: CompanyUpsertWithoutSlugInput
}

export interface ImageSubscriptionWhereInput {
  AND?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  OR?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  NOT?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ImageWhereInput
}

export interface CompanyUpdateWithoutSlugDataInput {
  name?: String
  sites?: SiteUpdateManyWithoutCompanyInput
}

export interface TeamSubscriptionWhereInput {
  AND?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput
  OR?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput
  NOT?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TeamWhereInput
}

export interface SiteUpdateManyWithoutCompanyInput {
  create?: SiteCreateWithoutCompanyInput[] | SiteCreateWithoutCompanyInput
  connect?: SiteWhereUniqueInput[] | SiteWhereUniqueInput
  disconnect?: SiteWhereUniqueInput[] | SiteWhereUniqueInput
  delete?: SiteWhereUniqueInput[] | SiteWhereUniqueInput
  update?: SiteUpdateWithWhereUniqueWithoutCompanyInput[] | SiteUpdateWithWhereUniqueWithoutCompanyInput
  upsert?: SiteUpsertWithWhereUniqueWithoutCompanyInput[] | SiteUpsertWithWhereUniqueWithoutCompanyInput
}

export interface ProductTypeSubscriptionWhereInput {
  AND?: ProductTypeSubscriptionWhereInput[] | ProductTypeSubscriptionWhereInput
  OR?: ProductTypeSubscriptionWhereInput[] | ProductTypeSubscriptionWhereInput
  NOT?: ProductTypeSubscriptionWhereInput[] | ProductTypeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductTypeWhereInput
}

export interface SiteUpdateWithWhereUniqueWithoutCompanyInput {
  where: SiteWhereUniqueInput
  data: SiteUpdateWithoutCompanyDataInput
}

export interface CompanySubscriptionWhereInput {
  AND?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput
  OR?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput
  NOT?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CompanyWhereInput
}

export interface SiteUpdateWithoutCompanyDataInput {
  name?: String
  location?: LocationUpdateOneWithoutSiteInput
  slug?: SlugUpdateOneWithoutSiteInput
  category?: CategoryUpdateManyWithoutSiteInput
  team?: TeamUpdateManyWithoutSiteInput
  custom?: CustomizeSiteUpdateOneInput
}

export interface SlugWhereInput {
  AND?: SlugWhereInput[] | SlugWhereInput
  OR?: SlugWhereInput[] | SlugWhereInput
  NOT?: SlugWhereInput[] | SlugWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  value?: String
  value_not?: String
  value_in?: String[] | String
  value_not_in?: String[] | String
  value_lt?: String
  value_lte?: String
  value_gt?: String
  value_gte?: String
  value_contains?: String
  value_not_contains?: String
  value_starts_with?: String
  value_not_starts_with?: String
  value_ends_with?: String
  value_not_ends_with?: String
  company?: CompanyWhereInput
  site?: SiteWhereInput
  category?: CategoryWhereInput
  productType?: ProductTypeWhereInput
  product?: ProductWhereInput
}

export interface CategoryUpdateManyWithoutSiteInput {
  create?: CategoryCreateWithoutSiteInput[] | CategoryCreateWithoutSiteInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  disconnect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  delete?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  update?: CategoryUpdateWithWhereUniqueWithoutSiteInput[] | CategoryUpdateWithWhereUniqueWithoutSiteInput
  upsert?: CategoryUpsertWithWhereUniqueWithoutSiteInput[] | CategoryUpsertWithWhereUniqueWithoutSiteInput
}

export interface TeamWhereInput {
  AND?: TeamWhereInput[] | TeamWhereInput
  OR?: TeamWhereInput[] | TeamWhereInput
  NOT?: TeamWhereInput[] | TeamWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  role?: String
  role_not?: String
  role_in?: String[] | String
  role_not_in?: String[] | String
  role_lt?: String
  role_lte?: String
  role_gt?: String
  role_gte?: String
  role_contains?: String
  role_not_contains?: String
  role_starts_with?: String
  role_not_starts_with?: String
  role_ends_with?: String
  role_not_ends_with?: String
  user?: UserWhereInput
  site?: SiteWhereInput
}

export interface CategoryUpdateWithWhereUniqueWithoutSiteInput {
  where: CategoryWhereUniqueInput
  data: CategoryUpdateWithoutSiteDataInput
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input
}

export interface CategoryUpdateWithoutSiteDataInput {
  name?: String
  description?: String
  slug?: SlugUpdateOneWithoutCategoryInput
  productType?: ProductTypeUpdateManyWithoutCategoryInput
}

export interface TeamWhereUniqueInput {
  id?: ID_Input
}

export interface SlugUpdateOneWithoutCategoryInput {
  create?: SlugCreateWithoutCategoryInput
  connect?: SlugWhereUniqueInput
  delete?: Boolean
  update?: SlugUpdateWithoutCategoryDataInput
  upsert?: SlugUpsertWithoutCategoryInput
}

export interface GalleryUpdateInput {
  url?: String
}

export interface SlugUpdateWithoutCategoryDataInput {
  value?: String
  company?: CompanyUpdateOneWithoutSlugInput
  site?: SiteUpdateOneWithoutSlugInput
  productType?: ProductTypeUpdateOneWithoutSlugInput
  product?: ProductUpdateOneWithoutSlugInput
}

export interface ProductUpsertWithoutPricingInput {
  update: ProductUpdateWithoutPricingDataInput
  create: ProductCreateWithoutPricingInput
}

export interface SiteUpdateOneWithoutSlugInput {
  create?: SiteCreateWithoutSlugInput
  connect?: SiteWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SiteUpdateWithoutSlugDataInput
  upsert?: SiteUpsertWithoutSlugInput
}

export interface TeamUpdateInput {
  role?: String
  user?: UserUpdateOneWithoutTeamsInput
  site?: SiteUpdateOneWithoutTeamInput
}

export interface SiteUpdateWithoutSlugDataInput {
  name?: String
  location?: LocationUpdateOneWithoutSiteInput
  company?: CompanyUpdateOneWithoutSitesInput
  category?: CategoryUpdateManyWithoutSiteInput
  team?: TeamUpdateManyWithoutSiteInput
  custom?: CustomizeSiteUpdateOneInput
}

export interface LocationUpdateInput {
  lat?: Float
  lng?: Float
  address?: String
  site?: SiteUpdateOneWithoutLocationInput
}

export interface CompanyUpdateOneWithoutSitesInput {
  create?: CompanyCreateWithoutSitesInput
  connect?: CompanyWhereUniqueInput
  delete?: Boolean
  update?: CompanyUpdateWithoutSitesDataInput
  upsert?: CompanyUpsertWithoutSitesInput
}

export interface SiteUpdateInput {
  name?: String
  location?: LocationUpdateOneWithoutSiteInput
  slug?: SlugUpdateOneWithoutSiteInput
  company?: CompanyUpdateOneWithoutSitesInput
  category?: CategoryUpdateManyWithoutSiteInput
  team?: TeamUpdateManyWithoutSiteInput
  custom?: CustomizeSiteUpdateOneInput
}

export interface CompanyUpdateWithoutSitesDataInput {
  name?: String
  slug?: SlugUpdateOneWithoutCompanyInput
}

export interface SlugUpsertWithoutSiteInput {
  update: SlugUpdateWithoutSiteDataInput
  create: SlugCreateWithoutSiteInput
}

export interface SlugUpdateOneWithoutCompanyInput {
  create?: SlugCreateWithoutCompanyInput
  connect?: SlugWhereUniqueInput
  delete?: Boolean
  update?: SlugUpdateWithoutCompanyDataInput
  upsert?: SlugUpsertWithoutCompanyInput
}

export interface SlugUpsertWithoutCategoryInput {
  update: SlugUpdateWithoutCategoryDataInput
  create: SlugCreateWithoutCategoryInput
}

export interface SlugUpdateWithoutCompanyDataInput {
  value?: String
  site?: SiteUpdateOneWithoutSlugInput
  category?: CategoryUpdateOneWithoutSlugInput
  productType?: ProductTypeUpdateOneWithoutSlugInput
  product?: ProductUpdateOneWithoutSlugInput
}

export interface CategoryUpsertWithoutSlugInput {
  update: CategoryUpdateWithoutSlugDataInput
  create: CategoryCreateWithoutSlugInput
}

export interface CategoryUpdateOneWithoutSlugInput {
  create?: CategoryCreateWithoutSlugInput
  connect?: CategoryWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CategoryUpdateWithoutSlugDataInput
  upsert?: CategoryUpsertWithoutSlugInput
}

export interface ProductTypeUpsertWithoutSlugInput {
  update: ProductTypeUpdateWithoutSlugDataInput
  create: ProductTypeCreateWithoutSlugInput
}

export interface CategoryUpdateWithoutSlugDataInput {
  name?: String
  description?: String
  productType?: ProductTypeUpdateManyWithoutCategoryInput
  site?: SiteUpdateOneWithoutCategoryInput
}

export interface SlugUpdateOneWithoutProductInput {
  create?: SlugCreateWithoutProductInput
  connect?: SlugWhereUniqueInput
  delete?: Boolean
  update?: SlugUpdateWithoutProductDataInput
  upsert?: SlugUpsertWithoutProductInput
}

export interface ProductTypeUpdateManyWithoutCategoryInput {
  create?: ProductTypeCreateWithoutCategoryInput[] | ProductTypeCreateWithoutCategoryInput
  connect?: ProductTypeWhereUniqueInput[] | ProductTypeWhereUniqueInput
  disconnect?: ProductTypeWhereUniqueInput[] | ProductTypeWhereUniqueInput
  delete?: ProductTypeWhereUniqueInput[] | ProductTypeWhereUniqueInput
  update?: ProductTypeUpdateWithWhereUniqueWithoutCategoryInput[] | ProductTypeUpdateWithWhereUniqueWithoutCategoryInput
  upsert?: ProductTypeUpsertWithWhereUniqueWithoutCategoryInput[] | ProductTypeUpsertWithWhereUniqueWithoutCategoryInput
}

export interface SlugUpsertWithoutProductTypeInput {
  update: SlugUpdateWithoutProductTypeDataInput
  create: SlugCreateWithoutProductTypeInput
}

export interface ProductTypeUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductTypeWhereUniqueInput
  data: ProductTypeUpdateWithoutCategoryDataInput
}

export interface TeamCreateManyWithoutUserInput {
  create?: TeamCreateWithoutUserInput[] | TeamCreateWithoutUserInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
}

export interface ProductTypeUpdateWithoutCategoryDataInput {
  name?: String
  description?: String
  featured?: Boolean
  image?: ImageUpdateOneInput
  slug?: SlugUpdateOneWithoutProductTypeInput
  products?: ProductUpdateManyWithoutTypeInput
}

export interface LocationCreateOneWithoutSiteInput {
  create?: LocationCreateWithoutSiteInput
  connect?: LocationWhereUniqueInput
}

export interface ImageUpdateOneInput {
  create?: ImageCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ImageUpdateDataInput
  upsert?: ImageUpsertNestedInput
}

export interface CompanyCreateOneWithoutSlugInput {
  create?: CompanyCreateWithoutSlugInput
  connect?: CompanyWhereUniqueInput
}

export interface ImageUpdateDataInput {
  url?: String
}

export interface CategoryCreateManyWithoutSiteInput {
  create?: CategoryCreateWithoutSiteInput[] | CategoryCreateWithoutSiteInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
}

export interface ImageUpsertNestedInput {
  update: ImageUpdateDataInput
  create: ImageCreateInput
}

export interface SiteCreateOneWithoutSlugInput {
  create?: SiteCreateWithoutSlugInput
  connect?: SiteWhereUniqueInput
}

export interface SlugUpdateOneWithoutProductTypeInput {
  create?: SlugCreateWithoutProductTypeInput
  connect?: SlugWhereUniqueInput
  delete?: Boolean
  update?: SlugUpdateWithoutProductTypeDataInput
  upsert?: SlugUpsertWithoutProductTypeInput
}

export interface SlugCreateOneWithoutCompanyInput {
  create?: SlugCreateWithoutCompanyInput
  connect?: SlugWhereUniqueInput
}

export interface SlugUpdateWithoutProductTypeDataInput {
  value?: String
  company?: CompanyUpdateOneWithoutSlugInput
  site?: SiteUpdateOneWithoutSlugInput
  category?: CategoryUpdateOneWithoutSlugInput
  product?: ProductUpdateOneWithoutSlugInput
}

export interface PricingSubscriptionWhereInput {
  AND?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput
  OR?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput
  NOT?: PricingSubscriptionWhereInput[] | PricingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PricingWhereInput
}

export interface ProductUpdateOneWithoutSlugInput {
  create?: ProductCreateWithoutSlugInput
  connect?: ProductWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductUpdateWithoutSlugDataInput
  upsert?: ProductUpsertWithoutSlugInput
}

export interface SiteSubscriptionWhereInput {
  AND?: SiteSubscriptionWhereInput[] | SiteSubscriptionWhereInput
  OR?: SiteSubscriptionWhereInput[] | SiteSubscriptionWhereInput
  NOT?: SiteSubscriptionWhereInput[] | SiteSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SiteWhereInput
}

export interface ProductUpdateWithoutSlugDataInput {
  name?: String
  shortDescription?: String
  longDescription?: String
  featuredImage?: ImageUpdateOneInput
  gallery?: GalleryUpdateManyInput
  pricing?: PricingUpdateOneWithoutProductInput
  type?: ProductTypeUpdateOneWithoutProductsInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput
  OR?: LocationWhereInput[] | LocationWhereInput
  NOT?: LocationWhereInput[] | LocationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  lat?: Float
  lat_not?: Float
  lat_in?: Float[] | Float
  lat_not_in?: Float[] | Float
  lat_lt?: Float
  lat_lte?: Float
  lat_gt?: Float
  lat_gte?: Float
  lng?: Float
  lng_not?: Float
  lng_in?: Float[] | Float
  lng_not_in?: Float[] | Float
  lng_lt?: Float
  lng_lte?: Float
  lng_gt?: Float
  lng_gte?: Float
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  site?: SiteWhereInput
}

export interface GalleryUpdateManyInput {
  create?: GalleryCreateInput[] | GalleryCreateInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface PricingUpdateOneWithoutProductInput {
  create?: PricingCreateWithoutProductInput
  connect?: PricingWhereUniqueInput
  delete?: Boolean
  update?: PricingUpdateWithoutProductDataInput
  upsert?: PricingUpsertWithoutProductInput
}

export interface CustomizeSiteUpdateInput {
  headerText?: String
  headerImage?: String
  theme?: ThemeColorUpdateOneInput
}

export interface PricingUpdateWithoutProductDataInput {
  rangePricing?: Boolean
  day?: Int
  week?: Int
  month?: Int
}

export interface SiteUpdateWithoutLocationDataInput {
  name?: String
  slug?: SlugUpdateOneWithoutSiteInput
  company?: CompanyUpdateOneWithoutSitesInput
  category?: CategoryUpdateManyWithoutSiteInput
  team?: TeamUpdateManyWithoutSiteInput
  custom?: CustomizeSiteUpdateOneInput
}

export interface PricingUpsertWithoutProductInput {
  update: PricingUpdateWithoutProductDataInput
  create: PricingCreateWithoutProductInput
}

export interface TeamUpsertWithWhereUniqueWithoutUserInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutUserDataInput
  create: TeamCreateWithoutUserInput
}

export interface ProductTypeUpdateOneWithoutProductsInput {
  create?: ProductTypeCreateWithoutProductsInput
  connect?: ProductTypeWhereUniqueInput
  delete?: Boolean
  update?: ProductTypeUpdateWithoutProductsDataInput
  upsert?: ProductTypeUpsertWithoutProductsInput
}

export interface CompanyUpsertWithoutSitesInput {
  update: CompanyUpdateWithoutSitesDataInput
  create: CompanyCreateWithoutSitesInput
}

export interface ProductTypeUpdateWithoutProductsDataInput {
  name?: String
  description?: String
  featured?: Boolean
  image?: ImageUpdateOneInput
  slug?: SlugUpdateOneWithoutProductTypeInput
  category?: CategoryUpdateOneWithoutProductTypeInput
}

export interface ProductTypeUpdateOneWithoutSlugInput {
  create?: ProductTypeCreateWithoutSlugInput
  connect?: ProductTypeWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductTypeUpdateWithoutSlugDataInput
  upsert?: ProductTypeUpsertWithoutSlugInput
}

export interface CategoryUpdateOneWithoutProductTypeInput {
  create?: CategoryCreateWithoutProductTypeInput
  connect?: CategoryWhereUniqueInput
  delete?: Boolean
  update?: CategoryUpdateWithoutProductTypeDataInput
  upsert?: CategoryUpsertWithoutProductTypeInput
}

export interface ProductTypeUpsertWithoutProductsInput {
  update: ProductTypeUpdateWithoutProductsDataInput
  create: ProductTypeCreateWithoutProductsInput
}

export interface CategoryUpdateWithoutProductTypeDataInput {
  name?: String
  description?: String
  slug?: SlugUpdateOneWithoutCategoryInput
  site?: SiteUpdateOneWithoutCategoryInput
}

export interface SlugCreateOneWithoutSiteInput {
  create?: SlugCreateWithoutSiteInput
  connect?: SlugWhereUniqueInput
}

export interface SiteUpdateOneWithoutCategoryInput {
  create?: SiteCreateWithoutCategoryInput
  connect?: SiteWhereUniqueInput
  delete?: Boolean
  update?: SiteUpdateWithoutCategoryDataInput
  upsert?: SiteUpsertWithoutCategoryInput
}

export interface SlugCreateOneWithoutCategoryInput {
  create?: SlugCreateWithoutCategoryInput
  connect?: SlugWhereUniqueInput
}

export interface SiteUpdateWithoutCategoryDataInput {
  name?: String
  location?: LocationUpdateOneWithoutSiteInput
  slug?: SlugUpdateOneWithoutSiteInput
  company?: CompanyUpdateOneWithoutSitesInput
  team?: TeamUpdateManyWithoutSiteInput
  custom?: CustomizeSiteUpdateOneInput
}

export interface CategoryCreateOneWithoutSlugInput {
  create?: CategoryCreateWithoutSlugInput
  connect?: CategoryWhereUniqueInput
}

export interface TeamUpdateManyWithoutSiteInput {
  create?: TeamCreateWithoutSiteInput[] | TeamCreateWithoutSiteInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutSiteInput[] | TeamUpdateWithWhereUniqueWithoutSiteInput
  upsert?: TeamUpsertWithWhereUniqueWithoutSiteInput[] | TeamUpsertWithWhereUniqueWithoutSiteInput
}

export interface ImageWhereInput {
  AND?: ImageWhereInput[] | ImageWhereInput
  OR?: ImageWhereInput[] | ImageWhereInput
  NOT?: ImageWhereInput[] | ImageWhereInput
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface TeamUpdateWithWhereUniqueWithoutSiteInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutSiteDataInput
}

export interface CompanyWhereUniqueInput {
  id?: ID_Input
}

export interface TeamUpdateWithoutSiteDataInput {
  role?: String
  user?: UserUpdateOneWithoutTeamsInput
}

export interface ProductUpdateOneWithoutPricingInput {
  create?: ProductCreateWithoutPricingInput
  connect?: ProductWhereUniqueInput
  delete?: Boolean
  update?: ProductUpdateWithoutPricingDataInput
  upsert?: ProductUpsertWithoutPricingInput
}

export interface UserUpdateOneWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutTeamsDataInput
  upsert?: UserUpsertWithoutTeamsInput
}

export interface SiteUpsertWithWhereUniqueWithoutCompanyInput {
  where: SiteWhereUniqueInput
  update: SiteUpdateWithoutCompanyDataInput
  create: SiteCreateWithoutCompanyInput
}

export interface UserUpdateWithoutTeamsDataInput {
  email?: String
  password?: String
  firstName?: String
  lastName?: String
}

export interface ProductUpdateWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateWithoutTypeDataInput
}

export interface UserUpsertWithoutTeamsInput {
  update: UserUpdateWithoutTeamsDataInput
  create: UserCreateWithoutTeamsInput
}

export interface SiteCreateManyWithoutCompanyInput {
  create?: SiteCreateWithoutCompanyInput[] | SiteCreateWithoutCompanyInput
  connect?: SiteWhereUniqueInput[] | SiteWhereUniqueInput
}

export interface TeamUpsertWithWhereUniqueWithoutSiteInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutSiteDataInput
  create: TeamCreateWithoutSiteInput
}

export interface SlugSubscriptionWhereInput {
  AND?: SlugSubscriptionWhereInput[] | SlugSubscriptionWhereInput
  OR?: SlugSubscriptionWhereInput[] | SlugSubscriptionWhereInput
  NOT?: SlugSubscriptionWhereInput[] | SlugSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SlugWhereInput
}

export interface CustomizeSiteUpdateOneInput {
  create?: CustomizeSiteCreateInput
  connect?: CustomizeSiteWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CustomizeSiteUpdateDataInput
  upsert?: CustomizeSiteUpsertNestedInput
}

export interface SlugWhereUniqueInput {
  id?: ID_Input
}

export interface ThemeColorUpsertNestedInput {
  update: ThemeColorUpdateDataInput
  create: ThemeColorCreateInput
}

export interface ThemeColorUpdateDataInput {
  color?: String
  shade?: String
}

export interface ThemeColorUpdateOneInput {
  create?: ThemeColorCreateInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ThemeColorUpdateDataInput
  upsert?: ThemeColorUpsertNestedInput
}

export interface CustomizeSiteUpdateDataInput {
  headerText?: String
  headerImage?: String
  theme?: ThemeColorUpdateOneInput
}

export interface ProductTypeUpdateInput {
  name?: String
  description?: String
  featured?: Boolean
  image?: ImageUpdateOneInput
  slug?: SlugUpdateOneWithoutProductTypeInput
  products?: ProductUpdateManyWithoutTypeInput
  category?: CategoryUpdateOneWithoutProductTypeInput
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput
  OR?: CategoryWhereInput[] | CategoryWhereInput
  NOT?: CategoryWhereInput[] | CategoryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  slug?: SlugWhereInput
  productType_every?: ProductTypeWhereInput
  productType_some?: ProductTypeWhereInput
  productType_none?: ProductTypeWhereInput
  site?: SiteWhereInput
}

export interface CompanyCreateOneWithoutSitesInput {
  create?: CompanyCreateWithoutSitesInput
  connect?: CompanyWhereUniqueInput
}

export interface SiteCreateOneWithoutTeamInput {
  create?: SiteCreateWithoutTeamInput
  connect?: SiteWhereUniqueInput
}

export interface ProductUpsertWithWhereUniqueWithoutTypeInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateWithoutTypeDataInput
  create: ProductCreateWithoutTypeInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ThemeColorPreviousValues {
  color: String
  shade: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  firstName: String
  lastName: String
  teams?: Team[]
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface AggregateThemeColor {
  count: Int
}

export interface Team extends Node {
  id: ID_Output
  user: User
  site: Site
  role: String
}

export interface Site extends Node {
  id: ID_Output
  name: String
  location: Location
  slug: Slug
  company: Company
  category?: Category[]
  team?: Team[]
  custom?: CustomizeSite
}

/*
 * An edge in a connection.

 */
export interface ThemeColorEdge {
  node: ThemeColor
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ThemeColorConnection {
  pageInfo: PageInfo
  edges: ThemeColorEdge[]
  aggregate: AggregateThemeColor
}

export interface AggregateCustomizeSite {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CustomizeSiteConnection {
  pageInfo: PageInfo
  edges: CustomizeSiteEdge[]
  aggregate: AggregateCustomizeSite
}

export interface ThemeColor {
  color: String
  shade: String
}

/*
 * An edge in a connection.

 */
export interface SlugEdge {
  node: Slug
  cursor: String
}

export interface CustomizeSitePreviousValues {
  id: ID_Output
  headerText?: String
  headerImage?: String
}

export interface AggregateGallery {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface GalleryConnection {
  pageInfo: PageInfo
  edges: GalleryEdge[]
  aggregate: AggregateGallery
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  firstName: String
  lastName: String
}

/*
 * An edge in a connection.

 */
export interface ImageEdge {
  node: Image
  cursor: String
}

export interface CustomizeSite extends Node {
  id: ID_Output
  headerText?: String
  headerImage?: String
  theme?: ThemeColor
}

export interface AggregatePricing {
  count: Int
}

export interface CompanySubscriptionPayload {
  mutation: MutationType
  node?: Company
  updatedFields?: String[]
  previousValues?: CompanyPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PricingConnection {
  pageInfo: PageInfo
  edges: PricingEdge[]
  aggregate: AggregatePricing
}

export interface CompanyPreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface TeamEdge {
  node: Team
  cursor: String
}

export interface Pricing extends Node {
  id: ID_Output
  product: Product
  rangePricing: Boolean
  day: Int
  week: Int
  month: Int
}

export interface AggregateLocation {
  count: Int
}

export interface SiteSubscriptionPayload {
  mutation: MutationType
  node?: Site
  updatedFields?: String[]
  previousValues?: SitePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
}

export interface SitePreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface Gallery {
  url: String
}

export interface AggregateProductType {
  count: Int
}

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category
  updatedFields?: String[]
  previousValues?: CategoryPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ProductTypeConnection {
  pageInfo: PageInfo
  edges: ProductTypeEdge[]
  aggregate: AggregateProductType
}

export interface CategoryPreviousValues {
  id: ID_Output
  name: String
  description: String
}

/*
 * An edge in a connection.

 */
export interface CategoryEdge {
  node: Category
  cursor: String
}

export interface CustomizeSiteSubscriptionPayload {
  mutation: MutationType
  node?: CustomizeSite
  updatedFields?: String[]
  previousValues?: CustomizeSitePreviousValues
}

export interface AggregateSite {
  count: Int
}

export interface ProductTypeSubscriptionPayload {
  mutation: MutationType
  node?: ProductType
  updatedFields?: String[]
  previousValues?: ProductTypePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface SiteConnection {
  pageInfo: PageInfo
  edges: SiteEdge[]
  aggregate: AggregateSite
}

export interface ProductTypePreviousValues {
  id: ID_Output
  name: String
  description: String
  featured: Boolean
}

/*
 * An edge in a connection.

 */
export interface CompanyEdge {
  node: Company
  cursor: String
}

export interface Product extends Node {
  id: ID_Output
  name: String
  shortDescription: String
  longDescription: String
  featuredImage: Image
  slug: Slug
  gallery?: Gallery[]
  pricing: Pricing
  type: ProductType
}

export interface AggregateUser {
  count: Int
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface BatchPayload {
  count: Long
}

export interface ProductPreviousValues {
  id: ID_Output
  name: String
  shortDescription: String
  longDescription: String
}

/*
 * An edge in a connection.

 */
export interface CustomizeSiteEdge {
  node: CustomizeSite
  cursor: String
}

export interface Image {
  url: String
}

/*
 * A connection to a list of items.

 */
export interface SlugConnection {
  pageInfo: PageInfo
  edges: SlugEdge[]
  aggregate: AggregateSlug
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

export interface AggregateImage {
  count: Int
}

export interface LocationPreviousValues {
  id: ID_Output
  lat: Float
  lng: Float
  address: String
}

/*
 * An edge in a connection.

 */
export interface PricingEdge {
  node: Pricing
  cursor: String
}

export interface ProductType extends Node {
  id: ID_Output
  name: String
  description: String
  image?: Image
  slug: Slug
  products?: Product[]
  category: Category
  featured: Boolean
}

/*
 * A connection to a list of items.

 */
export interface TeamConnection {
  pageInfo: PageInfo
  edges: TeamEdge[]
  aggregate: AggregateTeam
}

export interface TeamSubscriptionPayload {
  mutation: MutationType
  node?: Team
  updatedFields?: String[]
  previousValues?: TeamPreviousValues
}

export interface AggregateProduct {
  count: Int
}

export interface TeamPreviousValues {
  id: ID_Output
  role: String
}

/*
 * An edge in a connection.

 */
export interface ProductTypeEdge {
  node: ProductType
  cursor: String
}

export interface Category extends Node {
  id: ID_Output
  name: String
  description: String
  slug: Slug
  productType?: ProductType[]
  site: Site
}

/*
 * A connection to a list of items.

 */
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: CategoryEdge[]
  aggregate: AggregateCategory
}

export interface PricingSubscriptionPayload {
  mutation: MutationType
  node?: Pricing
  updatedFields?: String[]
  previousValues?: PricingPreviousValues
}

export interface AggregateCompany {
  count: Int
}

export interface PricingPreviousValues {
  id: ID_Output
  rangePricing: Boolean
  day: Int
  week: Int
  month: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Company extends Node {
  id: ID_Output
  name: String
  slug: Slug
  sites?: Site[]
}

export interface AggregateSlug {
  count: Int
}

export interface ImageSubscriptionPayload {
  mutation: MutationType
  node?: Image
  updatedFields?: String[]
  previousValues?: ImagePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ImageConnection {
  pageInfo: PageInfo
  edges: ImageEdge[]
  aggregate: AggregateImage
}

export interface ImagePreviousValues {
  url: String
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface Slug extends Node {
  id: ID_Output
  value: String
  company?: Company
  site?: Site
  category?: Category
  productType?: ProductType
  product?: Product
}

export interface AggregateCategory {
  count: Int
}

export interface GallerySubscriptionPayload {
  mutation: MutationType
  node?: Gallery
  updatedFields?: String[]
  previousValues?: GalleryPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CompanyConnection {
  pageInfo: PageInfo
  edges: CompanyEdge[]
  aggregate: AggregateCompany
}

/*
 * An edge in a connection.

 */
export interface GalleryEdge {
  node: Gallery
  cursor: String
}

export interface SlugPreviousValues {
  id: ID_Output
  value: String
}

export interface SlugSubscriptionPayload {
  mutation: MutationType
  node?: Slug
  updatedFields?: String[]
  previousValues?: SlugPreviousValues
}

export interface Location extends Node {
  id: ID_Output
  lat: Float
  lng: Float
  site?: Site
  address: String
}

export interface GalleryPreviousValues {
  url: String
}

export interface AggregateTeam {
  count: Int
}

export interface ThemeColorSubscriptionPayload {
  mutation: MutationType
  node?: ThemeColor
  updatedFields?: String[]
  previousValues?: ThemeColorPreviousValues
}

/*
 * An edge in a connection.

 */
export interface SiteEdge {
  node: Site
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  companies: (args: { where?: CompanyWhereInput, orderBy?: CompanyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Company[]>
  sites: (args: { where?: SiteWhereInput, orderBy?: SiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Site[]>
  categories: (args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Category[]>
  productTypes: (args: { where?: ProductTypeWhereInput, orderBy?: ProductTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductType[]>
  products: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Product[]>
  locations: (args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Location[]>
  teams: (args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Team[]>
  pricings: (args: { where?: PricingWhereInput, orderBy?: PricingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Pricing[]>
  images: (args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Image[]>
  galleries: (args: { where?: GalleryWhereInput, orderBy?: GalleryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Gallery[]>
  slugs: (args: { where?: SlugWhereInput, orderBy?: SlugOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Slug[]>
  customizeSites: (args: { where?: CustomizeSiteWhereInput, orderBy?: CustomizeSiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CustomizeSite[]>
  themeColors: (args: { where?: ThemeColorWhereInput, orderBy?: ThemeColorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ThemeColor[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  company: (args: { where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Company | null>
  site: (args: { where: SiteWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Site | null>
  category: (args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Category | null>
  productType: (args: { where: ProductTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType | null>
  product: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  location: (args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Location | null>
  team: (args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  pricing: (args: { where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Pricing | null>
  slug: (args: { where: SlugWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Slug | null>
  customizeSite: (args: { where: CustomizeSiteWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CustomizeSite | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  companiesConnection: (args: { where?: CompanyWhereInput, orderBy?: CompanyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CompanyConnection>
  sitesConnection: (args: { where?: SiteWhereInput, orderBy?: SiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<SiteConnection>
  categoriesConnection: (args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CategoryConnection>
  productTypesConnection: (args: { where?: ProductTypeWhereInput, orderBy?: ProductTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductTypeConnection>
  productsConnection: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductConnection>
  locationsConnection: (args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<LocationConnection>
  teamsConnection: (args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<TeamConnection>
  pricingsConnection: (args: { where?: PricingWhereInput, orderBy?: PricingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PricingConnection>
  imagesConnection: (args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ImageConnection>
  galleriesConnection: (args: { where?: GalleryWhereInput, orderBy?: GalleryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<GalleryConnection>
  slugsConnection: (args: { where?: SlugWhereInput, orderBy?: SlugOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<SlugConnection>
  customizeSitesConnection: (args: { where?: CustomizeSiteWhereInput, orderBy?: CustomizeSiteOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CustomizeSiteConnection>
  themeColorsConnection: (args: { where?: ThemeColorWhereInput, orderBy?: ThemeColorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ThemeColorConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createCompany: (args: { data: CompanyCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Company>
  createSite: (args: { data: SiteCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Site>
  createCategory: (args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Category>
  createProductType: (args: { data: ProductTypeCreateInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType>
  createProduct: (args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  createLocation: (args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Location>
  createTeam: (args: { data: TeamCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Team>
  createPricing: (args: { data: PricingCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Pricing>
  createImage: (args: { data: ImageCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Image>
  createGallery: (args: { data: GalleryCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Gallery>
  createSlug: (args: { data: SlugCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Slug>
  createCustomizeSite: (args: { data: CustomizeSiteCreateInput }, info?: GraphQLResolveInfo | string) => Promise<CustomizeSite>
  createThemeColor: (args: { data: ThemeColorCreateInput }, info?: GraphQLResolveInfo | string) => Promise<ThemeColor>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateCompany: (args: { data: CompanyUpdateInput, where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Company | null>
  updateSite: (args: { data: SiteUpdateInput, where: SiteWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Site | null>
  updateCategory: (args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Category | null>
  updateProductType: (args: { data: ProductTypeUpdateInput, where: ProductTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType | null>
  updateProduct: (args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  updateLocation: (args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Location | null>
  updateTeam: (args: { data: TeamUpdateInput, where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  updatePricing: (args: { data: PricingUpdateInput, where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Pricing | null>
  updateSlug: (args: { data: SlugUpdateInput, where: SlugWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Slug | null>
  updateCustomizeSite: (args: { data: CustomizeSiteUpdateInput, where: CustomizeSiteWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CustomizeSite | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteCompany: (args: { where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Company | null>
  deleteSite: (args: { where: SiteWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Site | null>
  deleteCategory: (args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Category | null>
  deleteProductType: (args: { where: ProductTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType | null>
  deleteProduct: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  deleteLocation: (args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Location | null>
  deleteTeam: (args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  deletePricing: (args: { where: PricingWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Pricing | null>
  deleteSlug: (args: { where: SlugWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Slug | null>
  deleteCustomizeSite: (args: { where: CustomizeSiteWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CustomizeSite | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertCompany: (args: { where: CompanyWhereUniqueInput, create: CompanyCreateInput, update: CompanyUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Company>
  upsertSite: (args: { where: SiteWhereUniqueInput, create: SiteCreateInput, update: SiteUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Site>
  upsertCategory: (args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Category>
  upsertProductType: (args: { where: ProductTypeWhereUniqueInput, create: ProductTypeCreateInput, update: ProductTypeUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<ProductType>
  upsertProduct: (args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  upsertLocation: (args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Location>
  upsertTeam: (args: { where: TeamWhereUniqueInput, create: TeamCreateInput, update: TeamUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Team>
  upsertPricing: (args: { where: PricingWhereUniqueInput, create: PricingCreateInput, update: PricingUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Pricing>
  upsertSlug: (args: { where: SlugWhereUniqueInput, create: SlugCreateInput, update: SlugUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Slug>
  upsertCustomizeSite: (args: { where: CustomizeSiteWhereUniqueInput, create: CustomizeSiteCreateInput, update: CustomizeSiteUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<CustomizeSite>
  updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCompanies: (args: { data: CompanyUpdateInput, where?: CompanyWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManySites: (args: { data: SiteUpdateInput, where?: SiteWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCategories: (args: { data: CategoryUpdateInput, where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyProductTypes: (args: { data: ProductTypeUpdateInput, where?: ProductTypeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyProducts: (args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyLocations: (args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyTeams: (args: { data: TeamUpdateInput, where?: TeamWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyPricings: (args: { data: PricingUpdateInput, where?: PricingWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyImages: (args: { data: ImageUpdateInput, where?: ImageWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyGalleries: (args: { data: GalleryUpdateInput, where?: GalleryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManySlugs: (args: { data: SlugUpdateInput, where?: SlugWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCustomizeSites: (args: { data: CustomizeSiteUpdateInput, where?: CustomizeSiteWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyThemeColors: (args: { data: ThemeColorUpdateInput, where?: ThemeColorWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCompanies: (args: { where?: CompanyWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManySites: (args: { where?: SiteWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCategories: (args: { where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProductTypes: (args: { where?: ProductTypeWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProducts: (args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyLocations: (args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyTeams: (args: { where?: TeamWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPricings: (args: { where?: PricingWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyImages: (args: { where?: ImageWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyGalleries: (args: { where?: GalleryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManySlugs: (args: { where?: SlugWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCustomizeSites: (args: { where?: CustomizeSiteWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyThemeColors: (args: { where?: ThemeColorWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  company: (args: { where?: CompanySubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CompanySubscriptionPayload>>
  site: (args: { where?: SiteSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<SiteSubscriptionPayload>>
  category: (args: { where?: CategorySubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CategorySubscriptionPayload>>
  productType: (args: { where?: ProductTypeSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductTypeSubscriptionPayload>>
  product: (args: { where?: ProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductSubscriptionPayload>>
  location: (args: { where?: LocationSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<LocationSubscriptionPayload>>
  team: (args: { where?: TeamSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<TeamSubscriptionPayload>>
  pricing: (args: { where?: PricingSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PricingSubscriptionPayload>>
  image: (args: { where?: ImageSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ImageSubscriptionPayload>>
  gallery: (args: { where?: GallerySubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<GallerySubscriptionPayload>>
  slug: (args: { where?: SlugSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<SlugSubscriptionPayload>>
  customizeSite: (args: { where?: CustomizeSiteSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CustomizeSiteSubscriptionPayload>>
  themeColor: (args: { where?: ThemeColorSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ThemeColorSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Company: (where: CompanyWhereInput): Promise<boolean> => super.existsDelegate('query', 'companies', { where }, {}, '{ id }'),
    Site: (where: SiteWhereInput): Promise<boolean> => super.existsDelegate('query', 'sites', { where }, {}, '{ id }'),
    Category: (where: CategoryWhereInput): Promise<boolean> => super.existsDelegate('query', 'categories', { where }, {}, '{ id }'),
    ProductType: (where: ProductTypeWhereInput): Promise<boolean> => super.existsDelegate('query', 'productTypes', { where }, {}, '{ id }'),
    Product: (where: ProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'products', { where }, {}, '{ id }'),
    Location: (where: LocationWhereInput): Promise<boolean> => super.existsDelegate('query', 'locations', { where }, {}, '{ id }'),
    Team: (where: TeamWhereInput): Promise<boolean> => super.existsDelegate('query', 'teams', { where }, {}, '{ id }'),
    Pricing: (where: PricingWhereInput): Promise<boolean> => super.existsDelegate('query', 'pricings', { where }, {}, '{ id }'),
    Image: (where: ImageWhereInput): Promise<boolean> => super.existsDelegate('query', 'images', { where }, {}, '{ id }'),
    Gallery: (where: GalleryWhereInput): Promise<boolean> => super.existsDelegate('query', 'galleries', { where }, {}, '{ id }'),
    Slug: (where: SlugWhereInput): Promise<boolean> => super.existsDelegate('query', 'slugs', { where }, {}, '{ id }'),
    CustomizeSite: (where: CustomizeSiteWhereInput): Promise<boolean> => super.existsDelegate('query', 'customizeSites', { where }, {}, '{ id }'),
    ThemeColor: (where: ThemeColorWhereInput): Promise<boolean> => super.existsDelegate('query', 'themeColors', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    companies: (args, info): Promise<Company[]> => super.delegate('query', 'companies', args, {}, info),
    sites: (args, info): Promise<Site[]> => super.delegate('query', 'sites', args, {}, info),
    categories: (args, info): Promise<Category[]> => super.delegate('query', 'categories', args, {}, info),
    productTypes: (args, info): Promise<ProductType[]> => super.delegate('query', 'productTypes', args, {}, info),
    products: (args, info): Promise<Product[]> => super.delegate('query', 'products', args, {}, info),
    locations: (args, info): Promise<Location[]> => super.delegate('query', 'locations', args, {}, info),
    teams: (args, info): Promise<Team[]> => super.delegate('query', 'teams', args, {}, info),
    pricings: (args, info): Promise<Pricing[]> => super.delegate('query', 'pricings', args, {}, info),
    images: (args, info): Promise<Image[]> => super.delegate('query', 'images', args, {}, info),
    galleries: (args, info): Promise<Gallery[]> => super.delegate('query', 'galleries', args, {}, info),
    slugs: (args, info): Promise<Slug[]> => super.delegate('query', 'slugs', args, {}, info),
    customizeSites: (args, info): Promise<CustomizeSite[]> => super.delegate('query', 'customizeSites', args, {}, info),
    themeColors: (args, info): Promise<ThemeColor[]> => super.delegate('query', 'themeColors', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    company: (args, info): Promise<Company | null> => super.delegate('query', 'company', args, {}, info),
    site: (args, info): Promise<Site | null> => super.delegate('query', 'site', args, {}, info),
    category: (args, info): Promise<Category | null> => super.delegate('query', 'category', args, {}, info),
    productType: (args, info): Promise<ProductType | null> => super.delegate('query', 'productType', args, {}, info),
    product: (args, info): Promise<Product | null> => super.delegate('query', 'product', args, {}, info),
    location: (args, info): Promise<Location | null> => super.delegate('query', 'location', args, {}, info),
    team: (args, info): Promise<Team | null> => super.delegate('query', 'team', args, {}, info),
    pricing: (args, info): Promise<Pricing | null> => super.delegate('query', 'pricing', args, {}, info),
    slug: (args, info): Promise<Slug | null> => super.delegate('query', 'slug', args, {}, info),
    customizeSite: (args, info): Promise<CustomizeSite | null> => super.delegate('query', 'customizeSite', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    companiesConnection: (args, info): Promise<CompanyConnection> => super.delegate('query', 'companiesConnection', args, {}, info),
    sitesConnection: (args, info): Promise<SiteConnection> => super.delegate('query', 'sitesConnection', args, {}, info),
    categoriesConnection: (args, info): Promise<CategoryConnection> => super.delegate('query', 'categoriesConnection', args, {}, info),
    productTypesConnection: (args, info): Promise<ProductTypeConnection> => super.delegate('query', 'productTypesConnection', args, {}, info),
    productsConnection: (args, info): Promise<ProductConnection> => super.delegate('query', 'productsConnection', args, {}, info),
    locationsConnection: (args, info): Promise<LocationConnection> => super.delegate('query', 'locationsConnection', args, {}, info),
    teamsConnection: (args, info): Promise<TeamConnection> => super.delegate('query', 'teamsConnection', args, {}, info),
    pricingsConnection: (args, info): Promise<PricingConnection> => super.delegate('query', 'pricingsConnection', args, {}, info),
    imagesConnection: (args, info): Promise<ImageConnection> => super.delegate('query', 'imagesConnection', args, {}, info),
    galleriesConnection: (args, info): Promise<GalleryConnection> => super.delegate('query', 'galleriesConnection', args, {}, info),
    slugsConnection: (args, info): Promise<SlugConnection> => super.delegate('query', 'slugsConnection', args, {}, info),
    customizeSitesConnection: (args, info): Promise<CustomizeSiteConnection> => super.delegate('query', 'customizeSitesConnection', args, {}, info),
    themeColorsConnection: (args, info): Promise<ThemeColorConnection> => super.delegate('query', 'themeColorsConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createCompany: (args, info): Promise<Company> => super.delegate('mutation', 'createCompany', args, {}, info),
    createSite: (args, info): Promise<Site> => super.delegate('mutation', 'createSite', args, {}, info),
    createCategory: (args, info): Promise<Category> => super.delegate('mutation', 'createCategory', args, {}, info),
    createProductType: (args, info): Promise<ProductType> => super.delegate('mutation', 'createProductType', args, {}, info),
    createProduct: (args, info): Promise<Product> => super.delegate('mutation', 'createProduct', args, {}, info),
    createLocation: (args, info): Promise<Location> => super.delegate('mutation', 'createLocation', args, {}, info),
    createTeam: (args, info): Promise<Team> => super.delegate('mutation', 'createTeam', args, {}, info),
    createPricing: (args, info): Promise<Pricing> => super.delegate('mutation', 'createPricing', args, {}, info),
    createImage: (args, info): Promise<Image> => super.delegate('mutation', 'createImage', args, {}, info),
    createGallery: (args, info): Promise<Gallery> => super.delegate('mutation', 'createGallery', args, {}, info),
    createSlug: (args, info): Promise<Slug> => super.delegate('mutation', 'createSlug', args, {}, info),
    createCustomizeSite: (args, info): Promise<CustomizeSite> => super.delegate('mutation', 'createCustomizeSite', args, {}, info),
    createThemeColor: (args, info): Promise<ThemeColor> => super.delegate('mutation', 'createThemeColor', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateCompany: (args, info): Promise<Company | null> => super.delegate('mutation', 'updateCompany', args, {}, info),
    updateSite: (args, info): Promise<Site | null> => super.delegate('mutation', 'updateSite', args, {}, info),
    updateCategory: (args, info): Promise<Category | null> => super.delegate('mutation', 'updateCategory', args, {}, info),
    updateProductType: (args, info): Promise<ProductType | null> => super.delegate('mutation', 'updateProductType', args, {}, info),
    updateProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'updateProduct', args, {}, info),
    updateLocation: (args, info): Promise<Location | null> => super.delegate('mutation', 'updateLocation', args, {}, info),
    updateTeam: (args, info): Promise<Team | null> => super.delegate('mutation', 'updateTeam', args, {}, info),
    updatePricing: (args, info): Promise<Pricing | null> => super.delegate('mutation', 'updatePricing', args, {}, info),
    updateSlug: (args, info): Promise<Slug | null> => super.delegate('mutation', 'updateSlug', args, {}, info),
    updateCustomizeSite: (args, info): Promise<CustomizeSite | null> => super.delegate('mutation', 'updateCustomizeSite', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteCompany: (args, info): Promise<Company | null> => super.delegate('mutation', 'deleteCompany', args, {}, info),
    deleteSite: (args, info): Promise<Site | null> => super.delegate('mutation', 'deleteSite', args, {}, info),
    deleteCategory: (args, info): Promise<Category | null> => super.delegate('mutation', 'deleteCategory', args, {}, info),
    deleteProductType: (args, info): Promise<ProductType | null> => super.delegate('mutation', 'deleteProductType', args, {}, info),
    deleteProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'deleteProduct', args, {}, info),
    deleteLocation: (args, info): Promise<Location | null> => super.delegate('mutation', 'deleteLocation', args, {}, info),
    deleteTeam: (args, info): Promise<Team | null> => super.delegate('mutation', 'deleteTeam', args, {}, info),
    deletePricing: (args, info): Promise<Pricing | null> => super.delegate('mutation', 'deletePricing', args, {}, info),
    deleteSlug: (args, info): Promise<Slug | null> => super.delegate('mutation', 'deleteSlug', args, {}, info),
    deleteCustomizeSite: (args, info): Promise<CustomizeSite | null> => super.delegate('mutation', 'deleteCustomizeSite', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertCompany: (args, info): Promise<Company> => super.delegate('mutation', 'upsertCompany', args, {}, info),
    upsertSite: (args, info): Promise<Site> => super.delegate('mutation', 'upsertSite', args, {}, info),
    upsertCategory: (args, info): Promise<Category> => super.delegate('mutation', 'upsertCategory', args, {}, info),
    upsertProductType: (args, info): Promise<ProductType> => super.delegate('mutation', 'upsertProductType', args, {}, info),
    upsertProduct: (args, info): Promise<Product> => super.delegate('mutation', 'upsertProduct', args, {}, info),
    upsertLocation: (args, info): Promise<Location> => super.delegate('mutation', 'upsertLocation', args, {}, info),
    upsertTeam: (args, info): Promise<Team> => super.delegate('mutation', 'upsertTeam', args, {}, info),
    upsertPricing: (args, info): Promise<Pricing> => super.delegate('mutation', 'upsertPricing', args, {}, info),
    upsertSlug: (args, info): Promise<Slug> => super.delegate('mutation', 'upsertSlug', args, {}, info),
    upsertCustomizeSite: (args, info): Promise<CustomizeSite> => super.delegate('mutation', 'upsertCustomizeSite', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyCompanies: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCompanies', args, {}, info),
    updateManySites: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManySites', args, {}, info),
    updateManyCategories: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCategories', args, {}, info),
    updateManyProductTypes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProductTypes', args, {}, info),
    updateManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProducts', args, {}, info),
    updateManyLocations: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyLocations', args, {}, info),
    updateManyTeams: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyTeams', args, {}, info),
    updateManyPricings: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPricings', args, {}, info),
    updateManyImages: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyImages', args, {}, info),
    updateManyGalleries: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyGalleries', args, {}, info),
    updateManySlugs: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManySlugs', args, {}, info),
    updateManyCustomizeSites: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCustomizeSites', args, {}, info),
    updateManyThemeColors: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyThemeColors', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyCompanies: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCompanies', args, {}, info),
    deleteManySites: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManySites', args, {}, info),
    deleteManyCategories: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCategories', args, {}, info),
    deleteManyProductTypes: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProductTypes', args, {}, info),
    deleteManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProducts', args, {}, info),
    deleteManyLocations: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyLocations', args, {}, info),
    deleteManyTeams: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyTeams', args, {}, info),
    deleteManyPricings: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPricings', args, {}, info),
    deleteManyImages: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyImages', args, {}, info),
    deleteManyGalleries: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyGalleries', args, {}, info),
    deleteManySlugs: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManySlugs', args, {}, info),
    deleteManyCustomizeSites: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCustomizeSites', args, {}, info),
    deleteManyThemeColors: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyThemeColors', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    company: (args, infoOrQuery): Promise<AsyncIterator<CompanySubscriptionPayload>> => super.delegateSubscription('company', args, {}, infoOrQuery),
    site: (args, infoOrQuery): Promise<AsyncIterator<SiteSubscriptionPayload>> => super.delegateSubscription('site', args, {}, infoOrQuery),
    category: (args, infoOrQuery): Promise<AsyncIterator<CategorySubscriptionPayload>> => super.delegateSubscription('category', args, {}, infoOrQuery),
    productType: (args, infoOrQuery): Promise<AsyncIterator<ProductTypeSubscriptionPayload>> => super.delegateSubscription('productType', args, {}, infoOrQuery),
    product: (args, infoOrQuery): Promise<AsyncIterator<ProductSubscriptionPayload>> => super.delegateSubscription('product', args, {}, infoOrQuery),
    location: (args, infoOrQuery): Promise<AsyncIterator<LocationSubscriptionPayload>> => super.delegateSubscription('location', args, {}, infoOrQuery),
    team: (args, infoOrQuery): Promise<AsyncIterator<TeamSubscriptionPayload>> => super.delegateSubscription('team', args, {}, infoOrQuery),
    pricing: (args, infoOrQuery): Promise<AsyncIterator<PricingSubscriptionPayload>> => super.delegateSubscription('pricing', args, {}, infoOrQuery),
    image: (args, infoOrQuery): Promise<AsyncIterator<ImageSubscriptionPayload>> => super.delegateSubscription('image', args, {}, infoOrQuery),
    gallery: (args, infoOrQuery): Promise<AsyncIterator<GallerySubscriptionPayload>> => super.delegateSubscription('gallery', args, {}, infoOrQuery),
    slug: (args, infoOrQuery): Promise<AsyncIterator<SlugSubscriptionPayload>> => super.delegateSubscription('slug', args, {}, infoOrQuery),
    customizeSite: (args, infoOrQuery): Promise<AsyncIterator<CustomizeSiteSubscriptionPayload>> => super.delegateSubscription('customizeSite', args, {}, infoOrQuery),
    themeColor: (args, infoOrQuery): Promise<AsyncIterator<ThemeColorSubscriptionPayload>> => super.delegateSubscription('themeColor', args, {}, infoOrQuery)
  }
}