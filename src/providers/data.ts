import { DataProvider, BaseRecord, GetListParams, GetListResponse } from "@refinedev/core";
import {MOCK_SUBJECT} from '@/constants/mock-data.ts'
export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>(
      { resource }: GetListParams
  ): Promise<GetListResponse<TData>> => {
    if (resource !== 'subjects') {
      return { data: [] as TData[], total: 0 };
    }

    // your actual fetch logic here...
    return {  data: MOCK_SUBJECT as unknown as TData[] ,
              total: MOCK_SUBJECT.length };
  },

  getOne : async ()=>{throw new Error ('this function is not present in mock')},
  create : async ()=>{throw new Error ('this function is not present in mock')},
  update : async ()=>{throw new Error ('this function is not present in mock')},
  deleteOne : async ()=>{throw new Error ('this function is not present in mock')},


  getApiUrl:() =>'',
};