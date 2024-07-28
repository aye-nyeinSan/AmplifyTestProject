/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTransactionInput = {
  id?: string | null,
  amount: number,
  screenshot?: string | null,
  paymentCheck: boolean,
  paymentCheckTime?: string | null,
  note?: string | null,
  transactionDate: string,
  paymentDeniedCheck: boolean,
};

export type ModelTransactionConditionInput = {
  amount?: ModelFloatInput | null,
  screenshot?: ModelStringInput | null,
  paymentCheck?: ModelBooleanInput | null,
  paymentCheckTime?: ModelStringInput | null,
  note?: ModelStringInput | null,
  transactionDate?: ModelStringInput | null,
  paymentDeniedCheck?: ModelBooleanInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  customer: Customer,
  supportRegion: SupportRegion,
  wallet: Wallet,
  amount: number,
  screenshot?: string | null,
  agent: Agent,
  paymentCheck: boolean,
  paymentCheckTime?: string | null,
  note?: string | null,
  transactionDate: string,
  paymentDeniedCheck: boolean,
  createdAt: string,
  updatedAt: string,
};

export type Customer = {
  __typename: "Customer",
  id: string,
  name: string,
  transactions?:  Array<Transaction | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type SupportRegion = {
  __typename: "SupportRegion",
  id: string,
  name: string,
  transactions?:  Array<Transaction | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Wallet = {
  __typename: "Wallet",
  id: string,
  WalletAccount: string,
  transactions?:  Array<Transaction | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type Agent = {
  __typename: "Agent",
  id: string,
  name: string,
  transactions?:  Array<Transaction | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTransactionInput = {
  id: string,
  amount?: number | null,
  screenshot?: string | null,
  paymentCheck?: boolean | null,
  paymentCheckTime?: string | null,
  note?: string | null,
  transactionDate?: string | null,
  paymentDeniedCheck?: boolean | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type CreateCustomerInput = {
  id?: string | null,
  name: string,
};

export type ModelCustomerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCustomerConditionInput | null > | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  not?: ModelCustomerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateCustomerInput = {
  id: string,
  name?: string | null,
};

export type DeleteCustomerInput = {
  id: string,
};

export type CreateSupportRegionInput = {
  id?: string | null,
  name: string,
};

export type ModelSupportRegionConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSupportRegionConditionInput | null > | null,
  or?: Array< ModelSupportRegionConditionInput | null > | null,
  not?: ModelSupportRegionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateSupportRegionInput = {
  id: string,
  name?: string | null,
};

export type DeleteSupportRegionInput = {
  id: string,
};

export type CreateWalletInput = {
  id?: string | null,
  WalletAccount: string,
};

export type ModelWalletConditionInput = {
  WalletAccount?: ModelStringInput | null,
  and?: Array< ModelWalletConditionInput | null > | null,
  or?: Array< ModelWalletConditionInput | null > | null,
  not?: ModelWalletConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateWalletInput = {
  id: string,
  WalletAccount?: string | null,
};

export type DeleteWalletInput = {
  id: string,
};

export type CreateAgentInput = {
  id?: string | null,
  name: string,
};

export type ModelAgentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelAgentConditionInput | null > | null,
  or?: Array< ModelAgentConditionInput | null > | null,
  not?: ModelAgentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAgentInput = {
  id: string,
  name?: string | null,
};

export type DeleteAgentInput = {
  id: string,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  screenshot?: ModelStringInput | null,
  paymentCheck?: ModelBooleanInput | null,
  paymentCheckTime?: ModelStringInput | null,
  note?: ModelStringInput | null,
  transactionDate?: ModelStringInput | null,
  paymentDeniedCheck?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type ModelCustomerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCustomerFilterInput | null > | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  not?: ModelCustomerFilterInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelSupportRegionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSupportRegionFilterInput | null > | null,
  or?: Array< ModelSupportRegionFilterInput | null > | null,
  not?: ModelSupportRegionFilterInput | null,
};

export type ModelSupportRegionConnection = {
  __typename: "ModelSupportRegionConnection",
  items:  Array<SupportRegion | null >,
  nextToken?: string | null,
};

export type ModelWalletFilterInput = {
  id?: ModelIDInput | null,
  WalletAccount?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWalletFilterInput | null > | null,
  or?: Array< ModelWalletFilterInput | null > | null,
  not?: ModelWalletFilterInput | null,
};

export type ModelWalletConnection = {
  __typename: "ModelWalletConnection",
  items:  Array<Wallet | null >,
  nextToken?: string | null,
};

export type ModelAgentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAgentFilterInput | null > | null,
  or?: Array< ModelAgentFilterInput | null > | null,
  not?: ModelAgentFilterInput | null,
};

export type ModelAgentConnection = {
  __typename: "ModelAgentConnection",
  items:  Array<Agent | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  screenshot?: ModelSubscriptionStringInput | null,
  paymentCheck?: ModelSubscriptionBooleanInput | null,
  paymentCheckTime?: ModelSubscriptionStringInput | null,
  note?: ModelSubscriptionStringInput | null,
  transactionDate?: ModelSubscriptionStringInput | null,
  paymentDeniedCheck?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
};

export type ModelSubscriptionSupportRegionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSupportRegionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSupportRegionFilterInput | null > | null,
};

export type ModelSubscriptionWalletFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  WalletAccount?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWalletFilterInput | null > | null,
  or?: Array< ModelSubscriptionWalletFilterInput | null > | null,
};

export type ModelSubscriptionAgentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAgentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAgentFilterInput | null > | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    supportRegion:  {
      __typename: "SupportRegion",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    wallet:  {
      __typename: "Wallet",
      id: string,
      WalletAccount: string,
      createdAt: string,
      updatedAt: string,
    },
    amount: number,
    screenshot?: string | null,
    agent:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    paymentCheck: boolean,
    paymentCheckTime?: string | null,
    note?: string | null,
    transactionDate: string,
    paymentDeniedCheck: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    supportRegion:  {
      __typename: "SupportRegion",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    wallet:  {
      __typename: "Wallet",
      id: string,
      WalletAccount: string,
      createdAt: string,
      updatedAt: string,
    },
    amount: number,
    screenshot?: string | null,
    agent:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    paymentCheck: boolean,
    paymentCheckTime?: string | null,
    note?: string | null,
    transactionDate: string,
    paymentDeniedCheck: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    supportRegion:  {
      __typename: "SupportRegion",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    wallet:  {
      __typename: "Wallet",
      id: string,
      WalletAccount: string,
      createdAt: string,
      updatedAt: string,
    },
    amount: number,
    screenshot?: string | null,
    agent:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    paymentCheck: boolean,
    paymentCheckTime?: string | null,
    note?: string | null,
    transactionDate: string,
    paymentDeniedCheck: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
  condition?: ModelCustomerConditionInput | null,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSupportRegionMutationVariables = {
  input: CreateSupportRegionInput,
  condition?: ModelSupportRegionConditionInput | null,
};

export type CreateSupportRegionMutation = {
  createSupportRegion?:  {
    __typename: "SupportRegion",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSupportRegionMutationVariables = {
  input: UpdateSupportRegionInput,
  condition?: ModelSupportRegionConditionInput | null,
};

export type UpdateSupportRegionMutation = {
  updateSupportRegion?:  {
    __typename: "SupportRegion",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSupportRegionMutationVariables = {
  input: DeleteSupportRegionInput,
  condition?: ModelSupportRegionConditionInput | null,
};

export type DeleteSupportRegionMutation = {
  deleteSupportRegion?:  {
    __typename: "SupportRegion",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWalletMutationVariables = {
  input: CreateWalletInput,
  condition?: ModelWalletConditionInput | null,
};

export type CreateWalletMutation = {
  createWallet?:  {
    __typename: "Wallet",
    id: string,
    WalletAccount: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWalletMutationVariables = {
  input: UpdateWalletInput,
  condition?: ModelWalletConditionInput | null,
};

export type UpdateWalletMutation = {
  updateWallet?:  {
    __typename: "Wallet",
    id: string,
    WalletAccount: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWalletMutationVariables = {
  input: DeleteWalletInput,
  condition?: ModelWalletConditionInput | null,
};

export type DeleteWalletMutation = {
  deleteWallet?:  {
    __typename: "Wallet",
    id: string,
    WalletAccount: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAgentMutationVariables = {
  input: CreateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type CreateAgentMutation = {
  createAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAgentMutationVariables = {
  input: UpdateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type UpdateAgentMutation = {
  updateAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAgentMutationVariables = {
  input: DeleteAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type DeleteAgentMutation = {
  deleteAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    supportRegion:  {
      __typename: "SupportRegion",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    wallet:  {
      __typename: "Wallet",
      id: string,
      WalletAccount: string,
      createdAt: string,
      updatedAt: string,
    },
    amount: number,
    screenshot?: string | null,
    agent:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    paymentCheck: boolean,
    paymentCheckTime?: string | null,
    note?: string | null,
    transactionDate: string,
    paymentDeniedCheck: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTransactionsQueryVariables = {
  id?: string | null,
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  id?: string | null,
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    items:  Array< {
      __typename: "Customer",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSupportRegionQueryVariables = {
  id: string,
};

export type GetSupportRegionQuery = {
  getSupportRegion?:  {
    __typename: "SupportRegion",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSupportRegionsQueryVariables = {
  id?: string | null,
  filter?: ModelSupportRegionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSupportRegionsQuery = {
  listSupportRegions?:  {
    __typename: "ModelSupportRegionConnection",
    items:  Array< {
      __typename: "SupportRegion",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWalletQueryVariables = {
  id: string,
};

export type GetWalletQuery = {
  getWallet?:  {
    __typename: "Wallet",
    id: string,
    WalletAccount: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWalletsQueryVariables = {
  id?: string | null,
  filter?: ModelWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListWalletsQuery = {
  listWallets?:  {
    __typename: "ModelWalletConnection",
    items:  Array< {
      __typename: "Wallet",
      id: string,
      WalletAccount: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAgentQueryVariables = {
  id: string,
};

export type GetAgentQuery = {
  getAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAgentsQueryVariables = {
  id?: string | null,
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAgentsQuery = {
  listAgents?:  {
    __typename: "ModelAgentConnection",
    items:  Array< {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    supportRegion:  {
      __typename: "SupportRegion",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    wallet:  {
      __typename: "Wallet",
      id: string,
      WalletAccount: string,
      createdAt: string,
      updatedAt: string,
    },
    amount: number,
    screenshot?: string | null,
    agent:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    paymentCheck: boolean,
    paymentCheckTime?: string | null,
    note?: string | null,
    transactionDate: string,
    paymentDeniedCheck: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    supportRegion:  {
      __typename: "SupportRegion",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    wallet:  {
      __typename: "Wallet",
      id: string,
      WalletAccount: string,
      createdAt: string,
      updatedAt: string,
    },
    amount: number,
    screenshot?: string | null,
    agent:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    paymentCheck: boolean,
    paymentCheckTime?: string | null,
    note?: string | null,
    transactionDate: string,
    paymentDeniedCheck: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    customer:  {
      __typename: "Customer",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    supportRegion:  {
      __typename: "SupportRegion",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    wallet:  {
      __typename: "Wallet",
      id: string,
      WalletAccount: string,
      createdAt: string,
      updatedAt: string,
    },
    amount: number,
    screenshot?: string | null,
    agent:  {
      __typename: "Agent",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    },
    paymentCheck: boolean,
    paymentCheckTime?: string | null,
    note?: string | null,
    transactionDate: string,
    paymentDeniedCheck: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSupportRegionSubscriptionVariables = {
  filter?: ModelSubscriptionSupportRegionFilterInput | null,
};

export type OnCreateSupportRegionSubscription = {
  onCreateSupportRegion?:  {
    __typename: "SupportRegion",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSupportRegionSubscriptionVariables = {
  filter?: ModelSubscriptionSupportRegionFilterInput | null,
};

export type OnUpdateSupportRegionSubscription = {
  onUpdateSupportRegion?:  {
    __typename: "SupportRegion",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSupportRegionSubscriptionVariables = {
  filter?: ModelSubscriptionSupportRegionFilterInput | null,
};

export type OnDeleteSupportRegionSubscription = {
  onDeleteSupportRegion?:  {
    __typename: "SupportRegion",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWalletSubscriptionVariables = {
  filter?: ModelSubscriptionWalletFilterInput | null,
};

export type OnCreateWalletSubscription = {
  onCreateWallet?:  {
    __typename: "Wallet",
    id: string,
    WalletAccount: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWalletSubscriptionVariables = {
  filter?: ModelSubscriptionWalletFilterInput | null,
};

export type OnUpdateWalletSubscription = {
  onUpdateWallet?:  {
    __typename: "Wallet",
    id: string,
    WalletAccount: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWalletSubscriptionVariables = {
  filter?: ModelSubscriptionWalletFilterInput | null,
};

export type OnDeleteWalletSubscription = {
  onDeleteWallet?:  {
    __typename: "Wallet",
    id: string,
    WalletAccount: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAgentSubscriptionVariables = {
  filter?: ModelSubscriptionAgentFilterInput | null,
};

export type OnCreateAgentSubscription = {
  onCreateAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAgentSubscriptionVariables = {
  filter?: ModelSubscriptionAgentFilterInput | null,
};

export type OnUpdateAgentSubscription = {
  onUpdateAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAgentSubscriptionVariables = {
  filter?: ModelSubscriptionAgentFilterInput | null,
};

export type OnDeleteAgentSubscription = {
  onDeleteAgent?:  {
    __typename: "Agent",
    id: string,
    name: string,
    transactions?:  Array< {
      __typename: "Transaction",
      id: string,
      amount: number,
      screenshot?: string | null,
      paymentCheck: boolean,
      paymentCheckTime?: string | null,
      note?: string | null,
      transactionDate: string,
      paymentDeniedCheck: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
