import { useReducer } from "react";

/* ---------- Initial State ---------- */
const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    username: "",
    password: ""
  },
  isSubmitted: false
};

/* ---------- Reducer ---------- */
function reducer(state, action) {
  switch (action.type) {

    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

/* ---------- App Component ---------- */
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  if (state.isSubmitted) {
    return (
      <div className="app">
        <div className="form-card">
          <h2>✅ Registration Successful</h2>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="form-card">
        <h2 className="title">Step {state.step} of 3</h2>

        {/* Step 1 */}
        {state.step === 1 && (
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={state.formData.email}
              onChange={handleChange}
            />

            <button
              disabled={!state.formData.name || !state.formData.email}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2 */}
        {state.step === 2 && (
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={state.formData.username}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.formData.password}
              onChange={handleChange}
            />

            <div className="btn-group">
              <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                Back
              </button>
              <button
                disabled={
                  !state.formData.username || !state.formData.password
                }
                onClick={() => dispatch({ type: "NEXT_STEP" })}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {state.step === 3 && (
          <div>
            <h3>Review Details</h3>
            <p><b>Name:</b> {state.formData.name}</p>
            <p><b>Email:</b> {state.formData.email}</p>
            <p><b>Username:</b> {state.formData.username}</p>

            <div className="btn-group">
              <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
                Back
              </button>
              <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
