import { MODULE_ADDRESS } from "@/constants";
import { aptosClient } from "@/utils/aptosClient";

export const getTest = async (): Promise<string> => {
  const content = await aptosClient()
    .view<[string]>({
      payload: {
        function: `${MODULE_ADDRESS}::supply_chain::get_all_manufacturers`,
      },
    })
    .catch((error) => {
      console.error(error);
      return ["message not exist"];
    });

  return content[0];
};
