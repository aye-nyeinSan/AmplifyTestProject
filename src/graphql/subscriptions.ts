/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePet = /* GraphQL */ `subscription OnCreatePet($filter: ModelSubscriptionPetFilterInput) {
  onCreatePet(filter: $filter) {
    id
    name
    type
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePetSubscriptionVariables,
  APITypes.OnCreatePetSubscription
>;
export const onUpdatePet = /* GraphQL */ `subscription OnUpdatePet($filter: ModelSubscriptionPetFilterInput) {
  onUpdatePet(filter: $filter) {
    id
    name
    type
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePetSubscriptionVariables,
  APITypes.OnUpdatePetSubscription
>;
export const onDeletePet = /* GraphQL */ `subscription OnDeletePet($filter: ModelSubscriptionPetFilterInput) {
  onDeletePet(filter: $filter) {
    id
    name
    type
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePetSubscriptionVariables,
  APITypes.OnDeletePetSubscription
>;
