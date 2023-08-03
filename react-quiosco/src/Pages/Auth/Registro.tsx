import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Registro() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("El nombre es obligatorio"),
            email: Yup.string()
              .email("El correo no es válido")
              .required("El correo es obligatorio"),
            password: Yup.string()
              .required("La contraseña es obligatoria")
              .min(6, "La contraseña debe tener al menos 6 caracteres"),
            password_confirmation: Yup.string()
              .required("La confirmación de contraseña es obligatoria")
              .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="mb-4 space-y-4">
            <label className="text-slate-800" htmlFor="name">
              Nombre:
            </label>
            <Field type="text" name="name" className="w-full p-3 bg-gray-50" />
            <ErrorMessage
              name="name"
              component="p"
              className="text-red-500 pb-4"
            />
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
            <label className="text-slate-800" htmlFor="password_confirmation">
              Confirmar Contraseña:
            </label>
            <Field
              type="password"
              name="password_confirmation"
              className="w-full p-3 bg-gray-50"
            />
            <ErrorMessage
              name="password_confirmation"
              component="p"
              className="text-red-500 pb-4"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            >
              Iniciar Sesión
            </button>
          </Form>
        </Formik>
      </div>

      <nav className="mt-5 hover:text-indigo-600">
        <Link to=".." relative="path">
          ¿Ya tienes cuenta? Inicia Sesión.
        </Link>
      </nav>
    </>
  );
}

export default Registro;
