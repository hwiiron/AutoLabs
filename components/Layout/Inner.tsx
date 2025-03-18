type ChildrenProps = {
  children: React.ReactNode;
  className?: string;
};

function Inner({ children, className }: ChildrenProps) {
  return (
    <div className={`${className} relative w-[1200px] mx-auto`}>{children}</div>
  );
}

export default Inner;
