import { useIsFetching } from "react-query";
import { TailSpin } from "react-loader-spinner";
function Loading() {
    const isFetching = useIsFetching()
    return (<>

        {isFetching ? <div className="border main-bg position-absolute top-0 bottom-0 start-0 end-0 z-3 d-flex justify-content-center align-items-center" >
            <TailSpin visible={true}
                height="80"
                width="80"
                color="#FFFFFF"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass="" />
        </div> : ''}
    </>);
}

export default Loading;