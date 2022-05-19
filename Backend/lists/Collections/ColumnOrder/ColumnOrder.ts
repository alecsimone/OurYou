import { list } from '@keystone-6/core';

const ColumnOrder = list({
  fields: {
    // order: [String] @scalarList(strategy: RELATION)
    // inCollection: Collection  @relation(name: "ManualColumnOrders")
  },
});

export default ColumnOrder;
