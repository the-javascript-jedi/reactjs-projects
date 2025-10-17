import React, { useState } from "react"
import { useForm } from "react-hook-form"
const IndexPage = () => {
  const MAX_STEPS = 3
  const [formStep, setFormStep] = useState(0)
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" })
  // Increase Form Step
  const completeFormStep = () => {
    setFormStep(curr => curr + 1)
  }
  // submit form
  const submitForm = values => {
    window.alert(JSON.stringify(values, null, 2))
    completeFormStep()
  }
  // render button
  const renderButton = () => {
    if (formStep > 2) {
      return ""
    } else if (formStep === 2) {
      return (
        <button
          type="submit"
          className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
          // onClick={completeFormStep}
          disabled={!isValid}
        >
          Create Account
        </button>
      )
    } else {
      return (
        <button
          type="button"
          className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={completeFormStep}
          disabled={!isValid}
        >
          Next Step
        </button>
      )
    }
  }
  // JSX
  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-green-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Welcome to <span className="text-yellow-500">the Club</span>
        </h1>
        <p className="text-green-200 mt-2">
          Become a new member in 3 easy steps
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form autocomplete="off" onSubmit={handleSubmit(submitForm)}>
            <div>
              <p>
                Step {formStep + 1} of {MAX_STEPS}
              </p>
            </div>
            {/* Step 1 */}
            {formStep >= 0 && (
              <section className={formStep === 0 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Personal Information
                </h2>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="text-input"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type a username",
                    },
                  })}
                />
                {errors.username && (
                  <p className={"text-red-600 text-sm mt-2"}>
                    {errors.username.message}
                  </p>
                )}
              </section>
            )}
            {/* Step 2 */}
            {formStep >= 1 && (
              <section className={formStep === 1 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Billing Information
                </h2>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="text-input"
                  ref={register({
                    required: {
                      value: true,
                      message: "Please type a address",
                    },
                  })}
                />
                {errors.address && (
                  <p className={"text-red-600 text-sm mt-2"}>
                    {errors.address.message}
                  </p>
                )}
              </section>
            )}
            {/* Step 3 */}
            {formStep >= 2 && (
              <section className={formStep === 2 ? "block" : "hidden"}>
                <h2 className="font-semibold text-3xl mb-8">
                  Legal Information
                </h2>
                <div className="block mt-6">
                  <input
                    name="toc"
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                    ref={register({
                      required: {
                        value: true,
                      },
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Terms and Conditions
                    </a>
                    .
                  </span>
                </div>
                <div className="block mt-6">
                  <input
                    name="pp"
                    className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                    type="checkbox"
                    ref={register({
                      required: {
                        value: true,
                      },
                    })}
                  />
                  <span>
                    I accept the{" "}
                    <a className="text-blue-400 underline" href="/">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>
              </section>
            )}
            {/* Congratulations */}
            {formStep === 3 && (
              <h2 className="font-semibold text-3xl mb-8">Congratulations</h2>
            )}
            {renderButton()}
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
