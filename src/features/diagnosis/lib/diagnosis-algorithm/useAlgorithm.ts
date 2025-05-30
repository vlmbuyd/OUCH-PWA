import useSWR from "swr";
import { getAlgorithm } from "../../service/api";
import { DiagnosisAlgorithm } from "../../diagnosis.type";

export const useAlgorithm = () => {
    const { data, error, isLoading, mutate } = useSWR<DiagnosisAlgorithm []>(
        "/algorithm",
        getAlgorithm
    );    

    return {
        algorithms: data,
        isLoading,
        isError: error,
        mutate,
      };

}