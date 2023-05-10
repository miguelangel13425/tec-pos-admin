import { auth, signInWithEmailAndPassword } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      toast.promise(
        signInWithEmailAndPassword(auth, values.email, values.password).then(
          (userCredential) => {
            localStorage.setItem("email", userCredential.user.email as string);
            localStorage.setItem(
              "name",
              userCredential.user.displayName as string
            );
            localStorage.setItem("uid", userCredential.user.uid);
            navigate("/dashboard");
          }
        ),
        {
          pending: "Iniciando sesión... 🍳",
          success: "Sesión autenticada 👌",
          error: {
            render: ({ data }: any) => {
              return data.code;
            },
          },
        }
      );
      resetForm();
    },
  });

  useEffect(() => {
    const user = localStorage.getItem("email");
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
      {/* make a floating div in the center */}
      <div className="flex items-center justify-center h-screen">
        <form
          className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-sm w-full space-y-4"
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <div className="flex items-center space-x-4">
            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
              <h2 className="leading-relaxed">Login</h2>
              <p className="text-sm text-gray-500 font-normal leading-relaxed">
                Inicia sesión para continuar
              </p>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Correo Electronico</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              name="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-500 hover:text-blue-400"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none"
            >
              Login
            </button>
            <a
              href="/register"
              className="  font-medium  text-blue-500 rounded-lg hover:text-blue-400 focus:outline-none text-center mt-2"
            >
              ¿No tienes una cuenta? Registrate
            </a>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
