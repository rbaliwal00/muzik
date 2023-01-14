import useSWR from "swr";
import fecther from "./fetcher";

export const useMe = () =>{
    const {data,error} = useSWR('/me', fecther)

    return {
        user: data,
        isLoading: !data && !error,
        isError: error
    }
}

export const usePlaylist = () =>{
    const {data,error} = useSWR('/playlist', fecther);

    return {
        playlists: (data as any) || [],
        isLoading: !data && !error,
        isError: error
    }
}