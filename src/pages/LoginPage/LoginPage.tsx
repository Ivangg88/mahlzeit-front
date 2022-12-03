import Layout from "../../components/Layout/Layout";
import Login from "../../components/Login/Login";

interface LoginPageProps {
  navigateTarget: string;
}
const LoginPage = ({ navigateTarget }: LoginPageProps) => {
  return (
    <Layout>
      <Login navigateTarget={navigateTarget} />
    </Layout>
  );
};

export default LoginPage;
