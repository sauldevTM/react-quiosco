import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("El correo no es válido")
              .required("El correo es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="mb-4 space-y-4">
            <label className="text-slate-800" htmlFor="email">
              Correo:
            </label>
            <Field
              type="email"
              name="email"
              className="w-full p-3 bg-gray-50"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 pb-4"
            />

            <label className="text-slate-800" htmlFor="password">
              Contraseña:
            </label>
            <Field
              type="password"
              name="password"
              className="w-full p-3 bg-gray-50"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 pb-4"
            />

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            >
              Registrar
            </button>
          </Form>
        </Formik>
      </div>

      <nav className="mt-5 hover:text-indigo-600">
        <Link to="registro">¿No tienes cuenta? Crea una.</Link>
      </nav>
    </>
  );
}

export default Login;
