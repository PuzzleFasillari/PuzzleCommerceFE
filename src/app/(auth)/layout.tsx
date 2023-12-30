const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
