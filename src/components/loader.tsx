const Loader = () => {
  return (
    <section className="loader">
      <div></div>
    </section>
  );
};

export const LoaderLayout = () => {
  return (
    <section style={{ height: "calc(100vh - 4rem)" }} className="loader-layout">
      <div></div>
    </section>
  );
};

export default Loader;

interface skeletonProps {
  width?: string;
  length?: number;
  height?: string;
  continerHeight?: string;
}

export const Skeleton = ({
  width = "unset",
  length = 1,
  height = "30px",
  continerHeight = "unset",
}: skeletonProps) => {
  const skeletons = Array.from({ length }, (_, index) => (
    <div key={index} className="skeleton-shape" style={{ height }}></div>
  ));

  return (
    <div className="skeleton-loader" style={{ width, height: continerHeight }}>
      {skeletons}
    </div>
  );
};
