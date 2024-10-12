import Body from "../component/Body";
import { TokenLoading } from "../component/Skeletone";
import { useUserAccess } from "../hooks/useUserAccess";

function Main() {
  const { data, isLoading, isError, isFetching } = useUserAccess();

  if (isFetching || isLoading) {
    return <TokenLoading />;
  }

  if (isError) {
    return <div>Error: 데이터를 불러오지 못했습니다.</div>;
  }

  return <>{data && <Body />}</>;
}

export default Main;
